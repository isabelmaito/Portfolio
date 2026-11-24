import { ChevronDown } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { contentLang, textIn } from '../../utils/heaDates.js';

/**
 * A button like the language picker that opens the topics as checkboxes, so a long list
 * stays folded. Ticking several shows posts with any of them.
 */
export function HeaTopicMenu({ topics, selected, onToggle, onClear, theme }) {
  const { t, i18n } = useTranslation();
  const lang = contentLang(i18n.language);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const closeOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  if (topics.length === 0) return null;

  const chosen = topics.filter((topic) => selected.includes(topic.id));
  const label =
    chosen.length === 0
      ? t('hea.allTopics')
      : chosen.length === 1
        ? textIn(chosen[0].name, lang)
        : t('hea.topicsSelected', { count: chosen.length });

  return (
    <nav className="hea-topic-menu" aria-label={t('hea.topicNav')} ref={rootRef}>
      <h3 className="hea-aside-title">{t('hea.topicNav')}</h3>
      <button
        type="button"
        className={`hea-topic-trigger ${theme} ${chosen.length > 0 ? 'active' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="hea-topic-trigger-label">{label}</span>
        <ChevronDown className={`hea-menu-chevron ${open ? 'open' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div id={panelId} className={`hea-topic-panel ${theme}`}>
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
        </div>
      )}
    </nav>
  );
}
