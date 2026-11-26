import { Bold, Code, Eye, Italic, Link, Pencil } from 'lucide-react';
import { useRef, useState } from 'react';
import { RichText } from '../../components/RichText.jsx';
import { visibleLength } from '../../utils/richText.js';

const HTTPS_URL = /^https:\/\/[^\s)]+$/;

/**
 * The post body field: a textarea plus buttons that write the format the site reads
 * (utils/richText.js): **bold**, *italic*, `code` and [text](https://...).
 */
export function RichEditor({ label, value, onChange, max, rows = 5, autoFocus = false }) {
  const textareaRef = useRef(null);
  const [panel, setPanel] = useState(null); // 'link' | null
  const [linkUrl, setLinkUrl] = useState('');
  const [linkError, setLinkError] = useState('');
  const [preview, setPreview] = useState(false);

  const length = visibleLength(value);

  // Replaces the selection; the new text keeps `select` (start/end inside it) selected.
  const replaceSelection = (build) => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart ?? value.length;
    const end = textarea?.selectionEnd ?? value.length;
    const { text, select = [text.length, text.length] } = build(value.slice(start, end), value[start - 1] ?? '');
    onChange(value.slice(0, start) + text + value.slice(end));
    requestAnimationFrame(() => {
      textarea?.focus();
      textarea?.setSelectionRange(start + select[0], start + select[1]);
    });
  };

  const wrap = (mark, placeholder) =>
    replaceSelection((selected) => {
      const inner = selected || placeholder;
      return { text: `${mark}${inner}${mark}`, select: [mark.length, mark.length + inner.length] };
    });

  const togglePanel = (name) => setPanel((current) => (current === name ? null : name));

  const insertLink = (event) => {
    event.preventDefault();
    const url = linkUrl.trim();
    if (!HTTPS_URL.test(url)) {
      setLinkError('Cole um endereço completo começando com https://');
      return;
    }
    replaceSelection((selected, before) => {
      const text = selected || 'texto do link';
      // "útil![..." would read as a photo, so a link never sticks to the word before it.
      const space = before && !/\s/.test(before) ? ' ' : '';
      return { text: `${space}[${text}](${url})`, select: [space.length + 1, space.length + 1 + text.length] };
    });
    setLinkUrl('');
    setLinkError('');
    setPanel(null);
  };

  const tools = [
    { icon: Bold, title: 'Negrito', onClick: () => wrap('**', 'negrito') },
    { icon: Italic, title: 'Itálico', onClick: () => wrap('*', 'itálico') },
    { icon: Code, title: 'Código', onClick: () => wrap('`', 'código') },
    { icon: Link, title: 'Link', onClick: () => togglePanel('link'), pressed: panel === 'link' },
  ];

  return (
    <div className="admin-field">
      <span>
        {label}
        <span className={`admin-counter ${length > max ? 'over' : ''}`}>
          {length}/{max}
        </span>
      </span>

      <div className="rich-editor">
        <div className="rich-toolbar" role="toolbar" aria-label="Formatação">
          {tools.map(({ icon: Icon, title, onClick, pressed, disabled }) => (
            <button
              key={title}
              type="button"
              className="rich-tool"
              title={title}
              aria-label={title}
              aria-pressed={pressed}
              disabled={disabled}
              // Keeps the text selected while the button is pressed.
              onMouseDown={(event) => event.preventDefault()}
              onClick={onClick}
            >
              <Icon size={18} aria-hidden="true" />
            </button>
          ))}
          <button
            type="button"
            className="rich-tool rich-tool-text"
            title={preview ? 'Editar' : 'Ver como fica'}
            aria-pressed={preview}
            onClick={() => setPreview((current) => !current)}
          >
            {preview ? <Pencil size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
            <span className="rich-tool-label">{preview ? 'Editar' : 'Ver como fica'}</span>
          </button>
        </div>

        {panel === 'link' && (
          <div className="rich-panel rich-link-panel">
            <input
              type="url"
              inputMode="url"
              placeholder="https://..."
              value={linkUrl}
              onChange={(event) => setLinkUrl(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && insertLink(event)}
              aria-label="Endereço do link"
              autoFocus
            />
            <button type="button" className="admin-button admin-button-primary" onClick={insertLink}>
              Inserir
            </button>
            {linkError && <p className="admin-error">{linkError}</p>}
          </div>
        )}

        {preview ? (
          <RichText className="admin-text rich-preview" source={value} />
        ) : (
          <textarea
            ref={textareaRef}
            rows={rows}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            aria-label={label}
            required
            autoFocus={autoFocus}
          />
        )}
      </div>

    </div>
  );
}
