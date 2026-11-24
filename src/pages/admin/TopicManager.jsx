import { useState } from 'react';

function TopicRow({ topic, onRename, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(topic.name.pt);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const save = async (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    setSaving(true);
    setError('');
    try {
      await onRename(topic.id, name.trim());
      setEditing(false);
    } catch (renameError) {
      setError(renameError.message);
    } finally {
      setSaving(false);
    }
  };

  if (editing) {
    return (
      <li className="admin-topic-row">
        <form className="admin-topic-rename" onSubmit={save}>
          <label className="admin-field admin-field-grow">
            <span className="admin-sr-only">Novo nome do tema</span>
            <input type="text" value={name} maxLength={40} onChange={(event) => setName(event.target.value)} autoFocus />
          </label>
          <button type="button" className="admin-button" onClick={() => setEditing(false)} disabled={saving}>
            Cancelar
          </button>
          <button type="submit" className="admin-button admin-button-primary" disabled={saving || !name.trim()}>
            {saving ? 'Traduzindo...' : 'Salvar'}
          </button>
        </form>
        {error && (
          <p className="admin-error" role="alert">
            {error}
          </p>
        )}
      </li>
    );
  }

  return (
    <li className="admin-topic-row">
      <span>
        {topic.name.pt} <span className="admin-counter">· {topic.posts} posts</span>
      </span>
      <span className="admin-card-actions">
        <button
          type="button"
          className="admin-link-button"
          onClick={() => {
            setName(topic.name.pt);
            setEditing(true);
          }}
        >
          Renomear
        </button>
        <button type="button" className="admin-link-button danger" onClick={() => onDelete(topic)}>
          Apagar
        </button>
      </span>
    </li>
  );
}

export function TopicManager({ topics, onRename, onDelete }) {
  return (
    <details className="admin-card admin-topic-manager">
      <summary className="admin-section-title">Gerenciar temas ({topics.length})</summary>
      <p className="admin-muted admin-hint">
        Renomear traduz o nome de novo. Apagar tira o tema dos posts, sem apagar os posts.
      </p>
      {topics.length === 0 ? (
        <p className="admin-muted">Nenhum tema ainda. Crie o primeiro no campo Temas do post.</p>
      ) : (
        <ul className="admin-topic-rows">
          {topics.map((topic) => (
            <TopicRow key={topic.id} topic={topic} onRename={onRename} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </details>
  );
}
