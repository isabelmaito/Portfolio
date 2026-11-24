import { useTranslation } from 'react-i18next';
import { contentLang, textIn } from '../../utils/heaDates.js';

/** Checkboxes for the topics in use; ticking several shows posts with any of them. */
export function HeaTopicMenu({ topics, selected, onToggle, onClear }) {
  const { t, i18n } = useTranslation();
  const lang = contentLang(i18n.language);

  if (topics.length === 0) return null;

  return (
    <nav className="hea-topic-menu" aria-label={t('hea.topicNav')}>
      <h3 className="hea-aside-title">{t('hea.topicNav')}</h3>
      <ul className="hea-topic-options">
        {topics.map((topic) => {
          const checked = selected.includes(topic.id);
          return (
            <li key={topic.id}>
              <label className={`hea-topic-option ${checked ? 'checked' : ''}`}>
                <input type="checkbox" checked={checked} onChange={() => onToggle(topic.id)} />
                <span className="hea-topic-option-name">{textIn(topic.name, lang)}</span>
                <span className="hea-menu-count">{topic.posts}</span>
              </label>
            </li>
          );
        })}
      </ul>
      {selected.length > 0 && (
        <button type="button" className="hea-topic-clear" onClick={onClear}>
          {t('hea.clearTopics')}
        </button>
      )}
    </nav>
  );
}
