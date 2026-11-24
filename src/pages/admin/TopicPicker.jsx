import { X } from 'lucide-react';
import { useId, useState } from 'react';

export const TOPICS_PER_POST_MAX = 3;
const TOPIC_NAME_MAX = 40;

function normalize(text) {
  return text.trim().toLocaleLowerCase('pt-BR');
}

/**
 * Chips for the chosen topics plus a text box that suggests existing topics
 * and offers to create a new one when nothing matches the typed name.
 */
export function TopicPicker({ topics, value, onChange, onCreate }) {
  const inputId = useId();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState('');

  const chosen = value.map((id) => topics.find((topic) => topic.id === id)).filter(Boolean);
  const full = value.length >= TOPICS_PER_POST_MAX;
  const typed = normalize(query);
  const exact = topics.find((topic) => normalize(topic.name.pt) === typed);
  const suggestions = topics
    .filter((topic) => !value.includes(topic.id) && normalize(topic.name.pt).includes(typed));
  const canCreate = typed !== '' && !exact && [...query.trim()].length <= TOPIC_NAME_MAX;

  const add = (id) => {
    if (!value.includes(id) && !full) onChange([...value, id]);
    setQuery('');
    setError('');
  };

  const create = async () => {
    if (!canCreate || creating) return;
    setCreating(true);
    setError('');
    try {
      const topic = await onCreate(query.trim());
      if (topic) add(topic.id);
    } catch (createError) {
      setError(createError.message);
    } finally {
      setCreating(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Enter picks or creates a topic; it must not submit the post.
      event.preventDefault();
      if (exact && !value.includes(exact.id)) add(exact.id);
      else if (canCreate) create();
      else if (suggestions[0] && typed) add(suggestions[0].id);
    } else if (event.key === 'Backspace' && query === '' && value.length > 0) {
      onChange(value.slice(0, -1));
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  const showList = open && !full && (suggestions.length > 0 || canCreate);

  return (
    <div className="admin-field admin-topics">
      <label htmlFor={inputId}>
        <span>
          Temas <span className="admin-counter">{value.length}/{TOPICS_PER_POST_MAX}</span>
        </span>
      </label>

      <div className="admin-topics-box">
        {chosen.map((topic) => (
          <span key={topic.id} className="admin-topic-chip">
            {topic.name.pt}
            <button
              type="button"
              onClick={() => onChange(value.filter((id) => id !== topic.id))}
              aria-label={`Tirar o tema ${topic.name.pt}`}
            >
              <X aria-hidden="true" />
            </button>
          </span>
        ))}
        <input
          id={inputId}
          type="text"
          value={query}
          maxLength={TOPIC_NAME_MAX}
          disabled={full || creating}
          placeholder={full ? 'Máximo de 3 temas' : 'Digite um tema...'}
          autoComplete="off"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {showList && (
        // onMouseDown keeps the focus in the input, so the list stays open until a click lands.
        <ul className="admin-topic-list" onMouseDown={(event) => event.preventDefault()}>
          {suggestions.map((topic) => (
            <li key={topic.id}>
              <button type="button" onClick={() => add(topic.id)}>
                <span>{topic.name.pt}</span>
                <span className="admin-counter">{topic.posts} posts</span>
              </button>
            </li>
          ))}
          {canCreate && (
            <li>
              <button type="button" className="admin-topic-create" onClick={create} disabled={creating}>
                {creating ? 'Criando e traduzindo...' : `+ Criar tema “${query.trim()}”`}
              </button>
            </li>
          )}
        </ul>
      )}

      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
