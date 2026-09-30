import { MessageCircle, Share2 } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import avatarSrc from '../../assets/Foto_profile2.jpeg';
import { contentLang, formatFullDate } from '../../utils/heaDates.js';

export function postElementId(postId) {
  return `hea-post-${postId}`;
}

function Avatar({ className }) {
  return <img src={avatarSrc} alt="Isabel Maito" className={`hea-avatar ${className}`} loading="lazy" decoding="async" />;
}

// CSS can't size a square from a stretched height (aspect-ratio gives it zero width), so measure it.
function useHeight() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return undefined;
    const observer = new ResizeObserver(([entry]) => setHeight(Math.round(entry.borderBoxSize[0].blockSize)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, height];
}

function HeaPostCard({ item, darkMode, highlighted, onShare }) {
  const { t, i18n } = useTranslation();
  const lang = contentLang(i18n.language);
  const { post } = item;
  const [headingRef, headingHeight] = useHeight();

  return (
    <div className="hea-post-row">
      <Avatar className="hea-avatar-outside" />
      <article
        id={postElementId(post.id)}
        className={`hea-card hea-bubble ${darkMode ? 'dark' : 'light'} ${highlighted ? 'hea-highlight' : ''}`}
      >
        <div className="hea-card-head">
          <span className="hea-avatar-inside" style={{ '--avatar-inside-size': `${headingHeight}px` }}>
            <Avatar className="hea-avatar-fill" />
          </span>
          <div ref={headingRef} className="hea-card-heading">
            <time className="hea-date" dateTime={post.learnedOn}>
              {formatFullDate(post.learnedOn, i18n.language)}
            </time>
            <h3 className="hea-card-title">{post.title[lang]}</h3>
          </div>
        </div>
        <p className="hea-card-body">{post.body[lang]}</p>

        {post.replies.length > 0 && (
          <ol className="hea-thread" aria-label={t('hea.thread')}>
            {post.replies.map((reply) => (
              <li key={reply.id} className="hea-thread-item">
                <time className="hea-date" dateTime={reply.repliedOn}>
                  {formatFullDate(reply.repliedOn, i18n.language)}
                </time>
                <p className="hea-card-body">{reply.body[lang]}</p>
              </li>
            ))}
          </ol>
        )}

        <div className="hea-card-actions">
          <button type="button" className="hea-share-button" onClick={() => onShare(post)}>
            <Share2 className="hea-icon" aria-hidden="true" />
            {t('hea.share')}
          </button>
        </div>
      </article>
    </div>
  );
}

function HeaReplyActivity({ item, darkMode, onOpenPost }) {
  const { i18n } = useTranslation();
  const lang = contentLang(i18n.language);

  return (
    <div className="hea-post-row">
      <span className="hea-avatar-spacer" aria-hidden="true" />
      <div className={`hea-activity ${darkMode ? 'dark' : 'light'}`}>
        <MessageCircle className="hea-icon hea-activity-icon" aria-hidden="true" />
        <div>
          <time className="hea-date" dateTime={item.date}>
            {formatFullDate(item.date, i18n.language)}
          </time>
          <p className="hea-activity-text">
            <Trans
              i18nKey="hea.replyShortcut"
              values={{ title: item.post.title[lang] }}
              components={{
                post: <button type="button" className="hea-activity-link" onClick={() => onOpenPost(item.post.id)} />,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeaFeedItem({ item, ...props }) {
  return item.type === 'post' ? <HeaPostCard item={item} {...props} /> : <HeaReplyActivity item={item} {...props} />;
}
