import { useState } from 'react';
import { BODY_MAX, TITLE_MAX, charLength, todayIso } from '../../utils/heaDates.js';
import { visibleLength } from '../../utils/richText.js';
import { RichEditor } from './RichEditor.jsx';
import { TopicPicker } from './TopicPicker.jsx';

function CharCounter({ value, max }) {
  const length = charLength(value);
  return (
    <span className={`admin-counter ${length > max ? 'over' : ''}`}>
      {length}/{max}
    </span>
  );
}

export function PostForm({ initial, topics, onCreateTopic, submitLabel, onSubmit, onCancel }) {
  const [title, setTitle] = useState(initial?.title ?? '');
  const [learnedOn, setLearnedOn] = useState(initial?.learnedOn ?? todayIso());
  const [body, setBody] = useState(initial?.body ?? '');
  const [topicIds, setTopicIds] = useState(initial?.topicIds ?? []);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const invalid =
    !title.trim() || !body.trim() || !learnedOn || charLength(title) > TITLE_MAX || visibleLength(body) > BODY_MAX;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (invalid) return;
    setError('');
    setSubmitting(true);
    try {
      await onSubmit({ title, body, learnedOn, topicIds });
      if (!initial) {
        setTitle('');
        setBody('');
        setLearnedOn(todayIso());
        setTopicIds([]);
      }
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form-row">
        <label className="admin-field admin-field-grow">
          <span>
            Título <CharCounter value={title} max={TITLE_MAX} />
          </span>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} required />
        </label>
        <label className="admin-field">
          <span>Data</span>
          <input type="date" value={learnedOn} onChange={(event) => setLearnedOn(event.target.value)} required />
        </label>
      </div>

      <RichEditor label="O que você aprendeu?" value={body} onChange={setBody} max={BODY_MAX} />

      <TopicPicker topics={topics} value={topicIds} onChange={setTopicIds} onCreate={onCreateTopic} />

      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}

      <div className="admin-form-actions">
        {onCancel && (
          <button type="button" className="admin-button" onClick={onCancel} disabled={submitting}>
            Cancelar
          </button>
        )}
        <button type="submit" className="admin-button admin-button-primary" disabled={invalid || submitting}>
          {submitting ? 'Salvando e traduzindo...' : submitLabel}
        </button>
      </div>
    </form>
  );
}

export function ReplyForm({ initial, minDate, submitLabel, onSubmit, onCancel }) {
  const [body, setBody] = useState(initial?.body ?? '');
  const [repliedOn, setRepliedOn] = useState(() => {
    if (initial?.repliedOn) return initial.repliedOn;
    const today = todayIso();
    return minDate && today < minDate ? minDate : today;
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const invalid = !body.trim() || !repliedOn || visibleLength(body) > BODY_MAX;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (invalid) return;
    setError('');
    setSubmitting(true);
    try {
      await onSubmit({ body, repliedOn });
    } catch (submitError) {
      setError(submitError.message);
      setSubmitting(false);
    }
  };

  return (
    <form className="admin-form admin-reply-form" onSubmit={handleSubmit}>
      <div className="admin-form-row">
        <div className="admin-field-grow">
          <RichEditor label="Continuação" value={body} onChange={setBody} max={BODY_MAX} rows={3} autoFocus />
        </div>
        <label className="admin-field">
          <span>Data</span>
          <input
            type="date"
            value={repliedOn}
            min={minDate}
            onChange={(event) => setRepliedOn(event.target.value)}
            required
          />
        </label>
      </div>

      {error && (
        <p className="admin-error" role="alert">
          {error}
        </p>
      )}

      <div className="admin-form-actions">
        <button type="button" className="admin-button" onClick={onCancel} disabled={submitting}>
          Cancelar
        </button>
        <button type="submit" className="admin-button admin-button-primary" disabled={invalid || submitting}>
          {submitting ? 'Salvando e traduzindo...' : submitLabel}
        </button>
      </div>
    </form>
  );
}
