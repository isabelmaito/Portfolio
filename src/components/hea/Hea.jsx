import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import { ChevronDown, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { heaApi } from '../../services/heaApi.js';
import { contentLang, formatMonthYear, monthKeyOf, textIn } from '../../utils/heaDates.js';
import { HeaDateMenu } from './HeaDateMenu.jsx';
import { HeaFeedItem, postElementId } from './HeaFeedItem.jsx';
import { HeaTimelineMarker } from './HeaTimeline.jsx';
import './Hea.css';

const MOBILE_QUERY = '(max-width: 1099px)';

function setPostParam(postId) {
  const url = new URL(window.location.href);
  if (postId) url.searchParams.set('post', String(postId));
  else url.searchParams.delete('post');
  window.history.replaceState(window.history.state, '', url);
}

function scrollIntoView(element) {
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hea({ darkMode }) {
  const { t, i18n } = useTranslation();
  const theme = darkMode ? 'dark' : 'light';

  const [filter, setFilter] = useState(null);
  const [topicIds, setTopicIds] = useState([]);
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [status, setStatus] = useState('loading');
  const [loadingMore, setLoadingMore] = useState(false);
  const [moreError, setMoreError] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [focus, setFocus] = useState(null);
  const [notice, setNotice] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  const requestId = useRef(0);
  const retry = useRef(null);
  const initialized = useRef(false);

  // Month and topics combine: the feed shows posts of that month with any of the topics.
  const loadFirstPage = useCallback(async (nextFilter, nextTopics = []) => {
    const id = ++requestId.current;
    retry.current = () => loadFirstPage(nextFilter, nextTopics);
    setFilter(nextFilter);
    setTopicIds(nextTopics);
    setStatus('loading');
    setMoreError(false);
    try {
      const page = await heaApi.feed({ year: nextFilter?.year, month: nextFilter?.month, topics: nextTopics });
      if (id !== requestId.current) return;
      setItems(page.items);
      setNextCursor(page.nextCursor);
      setStatus('ready');
    } catch {
      if (id === requestId.current) setStatus('error');
    }
  }, []);

  const openPost = useCallback(
    async (postId) => {
      const id = ++requestId.current;
      retry.current = () => openPost(postId);
      setStatus('loading');
      setMoreError(false);
      try {
        const context = await heaApi.postContext(postId);
        if (id !== requestId.current) return;
        setFilter({ year: context.year, month: context.month });
        setTopicIds([]);
        setItems(context.items);
        setNextCursor(context.nextCursor);
        setStatus('ready');
        setFocus({ postId, token: Date.now() });
        setPostParam(postId);
      } catch (error) {
        if (id !== requestId.current) return;
        if (error.status === 404) {
          setPostParam(null);
          setNotice(t('hea.postNotFound'));
          loadFirstPage(null);
        } else {
          setStatus('error');
        }
      }
    },
    [loadFirstPage, t],
  );

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    heaApi
      .calendar()
      .then(({ months }) => setCalendar(months))
      .catch(() => {});

    const postParam = new URLSearchParams(window.location.search).get('post');
    if (postParam && /^\d+$/.test(postParam)) openPost(Number(postParam));
    else loadFirstPage(null);
  }, [loadFirstPage, openPost]);

  useEffect(() => {
    if (!focus || status !== 'ready') return undefined;
    scrollIntoView(document.getElementById(postElementId(focus.postId)));
    const timer = setTimeout(() => setFocus(null), 2600);
    return () => clearTimeout(timer);
  }, [focus, status]);

  const closeNavOnMobile = () => {
    if (window.matchMedia(MOBILE_QUERY).matches) setNavOpen(false);
  };

  const changeFilter = (nextFilter, nextTopics = topicIds) => {
    setPostParam(null);
    loadFirstPage(nextFilter, nextTopics);
    scrollIntoView(document.getElementById('hea-feed'));
  };

  const changeMonth = (nextFilter) => {
    changeFilter(nextFilter);
    closeNavOnMobile();
  };

  // Ticking several boxes is normal, so the topic menu stays open on phones.
  const toggleTopic = (topicId) => {
    const next = topicIds.includes(topicId) ? topicIds.filter((id) => id !== topicId) : [...topicIds, topicId];
    changeFilter(filter, next);
  };

  const handleOpenPost = (postId) => {
    closeNavOnMobile();
    openPost(postId);
  };

  const loadMore = async () => {
    if (!nextCursor || loadingMore) return;
    const id = requestId.current;
    setLoadingMore(true);
    setMoreError(false);
    try {
      const page = await heaApi.feed({ cursor: nextCursor, year: filter?.year, month: filter?.month, topics: topicIds });
      if (id !== requestId.current) return;
      setItems((current) => {
        const seen = new Set(current.map((item) => item.key));
        return [...current, ...page.items.filter((item) => !seen.has(item.key))];
      });
      setNextCursor(page.nextCursor);
    } catch {
      if (id === requestId.current) setMoreError(true);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleShare = async (post) => {
    const url = `${window.location.origin}/?post=${post.id}#hea`;
    const title = textIn(post.title, contentLang(i18n.language));
    if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setNotice(t('hea.linkCopied'));
    } catch {
      setNotice(t('hea.copyFailed'));
    }
  };

  // Items arrive newest first, so each month is one consecutive run.
  const monthGroups = useMemo(() => {
    const groups = [];
    items.forEach((item) => {
      const key = monthKeyOf(item.date);
      const last = groups.at(-1);
      if (last?.key === key) {
        last.items.push(item);
        return;
      }
      const [year, month] = key.split('-').map(Number);
      groups.push({ key, year, month, items: [item] });
    });
    return groups;
  }, [items]);

  const hasNavigation = calendar.length > 0;

  return (
    <section id="hea" className={`hea-section ${theme}`}>
      <div className="hea-container">
        <header className="hea-header">
          <h2 className={`hea-title ${theme}`}>{t('hea.title')}</h2>
          <p className={`hea-subtitle ${theme}`}>{t('hea.subtitle')}</p>
        </header>

        {hasNavigation && (
          <button
            type="button"
            className={`hea-nav-toggle ${theme}`}
            aria-expanded={navOpen}
            aria-controls="hea-aside"
            onClick={() => setNavOpen((open) => !open)}
          >
            {t('hea.dateNav')}
            <ChevronDown className={`hea-menu-chevron ${navOpen ? 'open' : ''}`} aria-hidden="true" />
          </button>
        )}

        <div className="hea-layout">
          <div id="hea-feed" className="hea-feed" aria-busy={status === 'loading'}>
            {filter && (
              <div className={`hea-filter-chip ${theme}`}>
                {formatMonthYear(filter.year, filter.month, i18n.language)}
                <button type="button" onClick={() => changeFilter(null)} aria-label={t('hea.allDates')}>
                  <X className="hea-icon" aria-hidden="true" />
                </button>
              </div>
            )}

            {status === 'loading' && (
              <div className="hea-state">
                <CircularProgress size={28} sx={{ color: 'var(--accent-primary)' }} />
                <p>{t('hea.loading')}</p>
              </div>
            )}

            {status === 'error' && (
              <div className="hea-state">
                <p>{t('hea.error')}</p>
                <button type="button" className="hea-load-more" onClick={() => retry.current?.()}>
                  {t('hea.retry')}
                </button>
              </div>
            )}

            {status === 'ready' && items.length === 0 && (
              <div className="hea-state">
                <p>{filter ? t('hea.emptyFilter') : t('hea.empty')}</p>
              </div>
            )}

            {status === 'ready' && items.length > 0 && (
              <div className={`hea-stream ${theme}`}>
                {monthGroups.map((group) => (
                  <div key={group.key} className="hea-month" data-month={group.key}>
                    <div className="hea-month-items">
                      {group.items.map((item) => (
                        <HeaFeedItem
                          key={item.key}
                          item={item}
                          darkMode={darkMode}
                          highlighted={item.type === 'post' && focus?.postId === item.post.id}
                          onShare={handleShare}
                          selectedTopics={topicIds}
                          onToggleTopic={toggleTopic}
                          onOpenPost={handleOpenPost}
                        />
                      ))}
                    </div>
                    <div className="hea-rail">
                      <HeaTimelineMarker year={group.year} month={group.month} />
                    </div>
                  </div>
                ))}

                {nextCursor && (
                  <div className="hea-more-row">
                    <div className="hea-more">
                      {moreError && <p className="hea-more-error">{t('hea.error')}</p>}
                      <button type="button" className="hea-load-more" onClick={loadMore} disabled={loadingMore}>
                        {loadingMore ? t('hea.loading') : moreError ? t('hea.retry') : t('hea.loadMore')}
                      </button>
                    </div>
                    <div className="hea-rail hea-rail-end" aria-hidden="true">
                      <span className="hea-rail-ellipsis" />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {hasNavigation && (
            <aside id="hea-aside" className={`hea-aside ${navOpen ? 'open' : ''}`}>
              <HeaDateMenu
                calendar={calendar}
                filter={filter}
                onSelectMonth={(year, month) => changeMonth({ year, month })}
                onClear={() => changeMonth(null)}
              />
            </aside>
          )}
        </div>
      </div>

      <Snackbar
        open={Boolean(notice)}
        autoHideDuration={2500}
        onClose={() => setNotice('')}
        message={notice}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </section>
  );
}
