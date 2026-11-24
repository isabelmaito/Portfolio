import { useState } from 'react';
import { formatFullDate } from '../../utils/heaDates.js';
import { PostForm, ReplyForm } from './PostForm.jsx';

const TRANSLATIONS = [
  { lang: 'en', label: 'EN' },
  { lang: 'es', label: 'ES' },
  { lang: 'zh', label: 'ZH' },
  { lang: 'py', label: 'PY' },
];

function AdminReply({ reply, minDate, onUpdateReply, onDeleteReply }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <li className="admin-reply">
        <ReplyForm
          initial={{ body: reply.body.pt, repliedOn: reply.repliedOn }}
          minDate={minDate}
          submitLabel="Salvar"
          onCancel={() => setEditing(false)}
          onSubmit={async (data) => {
            await onUpdateReply(reply.id, data);
            setEditing(false);
          }}
        />
      </li>
    );
  }

  return (
    <li className="admin-reply">
      <time className="admin-date" dateTime={reply.repliedOn}>
        {formatFullDate(reply.repliedOn, 'pt-BR')}
      </time>
      <p className="admin-text">{reply.body.pt}</p>
      <div className="admin-card-actions">
        <button type="button" className="admin-link-button" onClick={() => setEditing(true)}>
          Editar
        </button>
        <button type="button" className="admin-link-button danger" onClick={() => onDeleteReply(reply.id)}>
          Apagar
        </button>
      </div>
    </li>
  );
}

export function AdminPostCard({
  post,
  topics,
  onCreateTopic,
  onUpdate,
  onDelete,
  onReply,
  onUpdateReply,
  onDeleteReply,
}) {
  const [mode, setMode] = useState('view');
  const postTopics = post.topics ?? [];

  return (
    <article className="admin-card admin-post">
      {mode === 'edit' ? (
        <PostForm
          initial={{
            title: post.title.pt,
            body: post.body.pt,
            learnedOn: post.learnedOn,
            topicIds: postTopics.map((topic) => topic.id),
          }}
          topics={topics}
          onCreateTopic={onCreateTopic}
          submitLabel="Salvar alterações"
          onCancel={() => setMode('view')}
          onSubmit={async (data) => {
            await onUpdate(post.id, data);
            setMode('view');
          }}
        />
      ) : (
        <>
          <div className="admin-post-meta">
            <time className="admin-date" dateTime={post.learnedOn}>
              {formatFullDate(post.learnedOn, 'pt-BR')}
            </time>
            {postTopics.length > 0 && (
              <ul className="admin-post-topics" aria-label="Temas">
                {postTopics.map((topic) => (
                  <li key={topic.id}>{topic.name.pt}</li>
                ))}
              </ul>
            )}
          </div>
          <h2 className="admin-post-title">{post.title.pt}</h2>
          <p className="admin-text">{post.body.pt}</p>

          <details className="admin-translations">
            <summary>Ver traduções</summary>
            {TRANSLATIONS.map(({ lang, label }) => (
              <div key={lang} className="admin-translation">
                <span className="admin-translation-lang">{label}</span>
                <div>
                  <strong>{post.title[lang]}</strong>
                  <p className="admin-text">{post.body[lang]}</p>
                </div>
              </div>
            ))}
          </details>

          <div className="admin-card-actions">
            <button type="button" className="admin-link-button" onClick={() => setMode('reply')}>
              Responder
            </button>
            <button type="button" className="admin-link-button" onClick={() => setMode('edit')}>
              Editar
            </button>
            <button type="button" className="admin-link-button danger" onClick={() => onDelete(post.id)}>
              Apagar
            </button>
          </div>
        </>
      )}

      {(post.replies.length > 0 || mode === 'reply') && (
        <ol className="admin-thread">
          {post.replies.map((reply) => (
            <AdminReply
              key={reply.id}
              reply={reply}
              minDate={post.learnedOn}
              onUpdateReply={onUpdateReply}
              onDeleteReply={onDeleteReply}
            />
          ))}
          {mode === 'reply' && (
            <li className="admin-reply">
              <ReplyForm
                minDate={post.learnedOn}
                submitLabel="Publicar continuação"
                onCancel={() => setMode('view')}
                onSubmit={async (data) => {
                  await onReply(post.id, data);
                  setMode('view');
                }}
              />
            </li>
          )}
        </ol>
      )}
    </article>
  );
}
