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
import { HeaTopicMenu } from './HeaTopicMenu.jsx';
import './Hea.css';

const MOBILE_QUERY = '(max-width: 1099px)';
// Ticking boxes only asks the API once the reader stops for this long, so five quick clicks cost one request.
const TOPIC_DELAY_MS = 1500;

function setPostParam(postId) {
  const url = new URL(window.location.href);
  if (postId) url.searchParams.set('post', String(postId));
  else url.searchParams.delete('post');
  window.history.replaceState(window.history.state, '', url);
}

// ?temas=1,4 keeps the chosen topics in the address, so a copied link opens the same filter.
function setTopicsParam(topicIds) {
  const url = new URL(window.location.href);
  if (topicIds.length > 0) url.searchParams.set('temas', topicIds.join(','));
  else url.searchParams.delete('temas');
  url.search = url.search.replaceAll('%2C', ','); // "1,4" reads better in a shared link than "1%2C4"
  window.history.replaceState(window.history.state, '', url);
}

function readTopicsParam() {
  const value = new URLSearchParams(window.location.search).get('temas');
  if (!value || !/^\d{1,9}(,\d{1,9})*$/.test(value)) return [];
  return [...new Set(value.split(',').map(Number))].filter((id) => id > 0).slice(0, 20);
}

function scrollIntoView(element) {
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Hea({ darkMode }) {
  const { t, i18n } = useTranslation();
  const theme = darkMode ? 'dark' : 'light';

  const [filter, setFilter] = useState(null);
  // topicIds = topics of the feed on screen; selectedTopics = boxes ticked, applied after TOPIC_DELAY_MS.
  const [topicIds, setTopicIds] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [status, setStatus] = useState('loading');
  const [loadingMore, setLoadingMore] = useState(false);
  const [moreError, setMoreError] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [topics, setTopics] = useState([]);
  const [focus, setFocus] = useState(null);
  const [notice, setNotice] = useState('');
  const [navOpen, setNavOpen] = useState(false);

  const requestId = useRef(0);
  const retry = useRef(null);
  const initialized = useRef(false);
  const topicTimer = useRef(null);

  const cancelPendingTopics = () => clearTimeout(topicTimer.current);
  useEffect(() => () => clearTimeout(topicTimer.current), []);

  // Month and topics combine: the feed shows posts of that month with any of the topics.
  const loadFirstPage = useCallback(async (nextFilter, nextTopics = []) => {
    const id = ++requestId.current;
    retry.current = () => loadFirstPage(nextFilter, nextTopics);
    setFilter(nextFilter);
    setTopicIds(nextTopics);
    setSelectedTopics(nextTopics);
    setTopicsParam(nextTopics);
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
        setSelectedTopics([]);
        setTopicsParam([]);
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

    heaApi
      .topics()
      .then(({ topics: list }) => setTopics(list))
      .catch(() => {});

    const postParam = new URLSearchParams(window.location.search).get('post');
    if (postParam && /^\d+$/.test(postParam)) openPost(Number(postParam));
    else loadFirstPage(null, readTopicsParam());
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

  const changeFilter = (nextFilter, nextTopics = selectedTopics) => {
    cancelPendingTopics();
    setPostParam(null);
    loadFirstPage(nextFilter, nextTopics);
    scrollIntoView(document.getElementById('hea-feed'));
  };

  const changeMonth = (nextFilter) => {
    changeFilter(nextFilter);
    closeNavOnMobile();
  };

  // The box changes at once; the feed waits until no box was clicked for TOPIC_DELAY_MS.
  const toggleTopic = (topicId) => {
    const next = selectedTopics.includes(topicId)
      ? selectedTopics.filter((id) => id !== topicId)
      : [...selectedTopics, topicId];
    setSelectedTopics(next);
    cancelPendingTopics();
    topicTimer.current = setTimeout(() => {
      setPostParam(null);
      loadFirstPage(filter, next);
    }, TOPIC_DELAY_MS);
  };

  const clearTopics = () => changeFilter(filter, []);

  const handleOpenPost = (postId) => {
    cancelPendingTopics();
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

  const hasNavigation = calendar.length > 0 || topics.length > 0;
  const topicMenuProps = {
    topics,
    selected: selectedTopics,
    onToggle: toggleTopic,
    onClear: clearTopics,
    theme,
  };
  const lang = contentLang(i18n.language);
  const activeTopics = selectedTopics.map((id) => topics.find((topic) => topic.id === id)).filter(Boolean);
  const filtered = Boolean(filter) || selectedTopics.length > 0;

  return (
    <section id="hea" className={`hea-section ${theme}`}>
      <div className="hea-container">
        <header className="hea-header">
          <h2 className={`hea-title ${theme}`}>{t('hea.title')}</h2>
          <p className={`hea-subtitle ${theme}`}>{t('hea.subtitle')}</p>
        </header>

        {/* Below 1100px the topic button sits above the date toggle, so the dates keep their own button. */}
        {topics.length > 0 && (
          <div className={`hea-topics-mobile ${theme}`}>
            <HeaTopicMenu {...topicMenuProps} />
          </div>
        )}

        {calendar.length > 0 && (
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
            {filtered && (
              <div className="hea-filter-chips">
                {filter && (
                  <div className={`hea-filter-chip ${theme}`}>
                    {formatMonthYear(filter.year, filter.month, i18n.language)}
                    <button type="button" onClick={() => changeFilter(null)} aria-label={t('hea.allDates')}>
                      <X className="hea-icon" aria-hidden="true" />
                    </button>
                  </div>
                )}
                {activeTopics.map((topic) => {
                  const name = textIn(topic.name, lang);
                  return (
                    <div key={topic.id} className={`hea-filter-chip ${theme}`}>
                      {name}
                      <button
                        type="button"
                        onClick={() => toggleTopic(topic.id)}
                        aria-label={t('hea.removeTopic', { name })}
                      >
                        <X className="hea-icon" aria-hidden="true" />
                      </button>
                    </div>
                  );
                })}
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
                <p>{topicIds.length > 0 ? t('hea.emptyTopics') : filter ? t('hea.emptyFilter') : t('hea.empty')}</p>
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
                          selectedTopics={selectedTopics}
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
              {topics.length > 0 && (
                <div className="hea-topics-desktop">
                  <HeaTopicMenu {...topicMenuProps} />
                </div>
              )}
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
