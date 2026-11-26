import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHorizontalBranco from '../../assets/logoHorizontalBranco.png';
import { heaApi } from '../../services/heaApi.js';
import { AdminHistoryFilters, describePeriod, periodToQuery } from './AdminHistoryFilters.jsx';
import { AdminPostCard } from './AdminPostCard.jsx';
import { PostForm } from './PostForm.jsx';
import { TopicManager } from './TopicManager.jsx';
import './Admin.css';

function byDateDesc(a, b) {
  if (a.learnedOn !== b.learnedOn) return a.learnedOn < b.learnedOn ? 1 : -1;
  return b.id - a.id;
}

function byReplyDate(a, b) {
  if (a.repliedOn !== b.repliedOn) return a.repliedOn < b.repliedOn ? -1 : 1;
  return a.id - b.id;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [authChecked, setAuthChecked] = useState(false);
  const [posts, setPosts] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [topics, setTopics] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [filters, setFilters] = useState({ period: '', topicIds: [] });
  const filtersRef = useRef(filters);
  const requestRef = useRef(0);
  const loadingRef = useRef(false);
  const sentinelRef = useRef(null);

  const handleError = useCallback(
    (requestError) => {
      if (requestError.status === 401) {
        navigate('/admin/login', { replace: true });
        return;
      }
      throw requestError;
    },
    [navigate],
  );

  // A new first page (cursor null) always wins: an older request that answers later is ignored.
  const loadPage = useCallback(
    async (cursor) => {
      if (cursor && loadingRef.current) return;
      const request = ++requestRef.current;
      const { period, topicIds } = filtersRef.current;
      loadingRef.current = true;
      setLoading(true);
      setError('');
      if (!cursor) setPosts([]);
      try {
        const page = await heaApi.adminFeed(cursor, { ...periodToQuery(period), topics: topicIds });
        if (request !== requestRef.current) return;
        setPosts((current) => {
          const base = cursor ? current : [];
          const seen = new Set(base.map((post) => post.id));
          return [...base, ...page.posts.filter((post) => !seen.has(post.id))];
        });
        setNextCursor(page.nextCursor);
        setHasLoaded(true);
      } catch (requestError) {
        if (request !== requestRef.current) return;
        if (requestError.status === 401) {
          navigate('/admin/login', { replace: true });
        } else {
          setError(requestError.message);
        }
      } finally {
        if (request === requestRef.current) {
          loadingRef.current = false;
          setLoading(false);
        }
      }
    },
    [navigate],
  );

  const changeFilters = (next) => {
    filtersRef.current = next;
    setFilters(next);
    loadPage(null);
  };

  // Month counts for the period filter; they change when a post is created, moved or deleted.
  const loadCalendar = useCallback(() => {
    heaApi
      .calendar()
      .then(({ months }) => setCalendar(months))
      .catch(() => {});
  }, []);

  // Topic counts change whenever a post gains or loses a topic, so this reloads after each save.
  const loadTopics = useCallback(async () => {
    try {
      const { topics: list } = await heaApi.adminTopics();
      setTopics(list);
    } catch (requestError) {
      if (requestError.status === 401) navigate('/admin/login', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    let active = true;
    heaApi
      .me()
      .then(() => {
        if (!active) return;
        setAuthChecked(true);
        loadPage(null);
        loadTopics();
        loadCalendar();
      })
      .catch(() => active && navigate('/admin/login', { replace: true }));
    return () => {
      active = false;
    };
  }, [loadPage, loadTopics, loadCalendar, navigate]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !nextCursor || error) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) loadPage(nextCursor);
      },
      { rootMargin: '400px' },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [nextCursor, error, loadPage, posts.length]);

  const replacePost = (updated) =>
    setPosts((current) => current.map((post) => (post.id === updated.id ? updated : post)).sort(byDateDesc));

  const updateReplies = (postId, change) =>
    setPosts((current) =>
      current.map((post) => (post.id === postId ? { ...post, replies: change(post.replies).sort(byReplyDate) } : post)),
    );

  const handleCreate = async (data) => {
    try {
      await heaApi.createPost(data);
    } catch (requestError) {
      handleError(requestError);
      return;
    }
    loadTopics();
    loadCalendar();
    await loadPage(null);
  };

  const handleUpdate = async (id, data) => {
    try {
      const { post } = await heaApi.updatePost(id, data);
      replacePost(post);
      loadTopics();
      loadCalendar();
    } catch (requestError) {
      handleError(requestError);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Apagar este post e todas as continuações dele?')) return;
    try {
      await heaApi.deletePost(id);
      setPosts((current) => current.filter((post) => post.id !== id));
      loadTopics();
      loadCalendar();
    } catch (requestError) {
      if (requestError.status === 401) return handleError(requestError);
      window.alert(requestError.message);
    }
  };

  const handleReply = async (postId, data) => {
    try {
      const { reply } = await heaApi.createReply(postId, data);
      updateReplies(postId, (replies) => [...replies, reply]);
    } catch (requestError) {
      handleError(requestError);
    }
  };

  const handleUpdateReply = async (replyId, data) => {
    try {
      const { reply } = await heaApi.updateReply(replyId, data);
      updateReplies(reply.postId, (replies) => replies.map((item) => (item.id === reply.id ? reply : item)));
    } catch (requestError) {
      handleError(requestError);
    }
  };

  const handleDeleteReply = async (replyId) => {
    if (!window.confirm('Apagar esta continuação?')) return;
    try {
      await heaApi.deleteReply(replyId);
      setPosts((current) =>
        current.map((post) => ({ ...post, replies: post.replies.filter((reply) => reply.id !== replyId) })),
      );
    } catch (requestError) {
      if (requestError.status === 401) return handleError(requestError);
      window.alert(requestError.message);
    }
  };

  const handleCreateTopic = async (name) => {
    try {
      const { topic } = await heaApi.createTopic(name);
      setTopics((current) =>
        [...current, topic].sort((a, b) => a.name.pt.localeCompare(b.name.pt, 'pt-BR')),
      );
      return topic;
    } catch (requestError) {
      return handleError(requestError);
    }
  };

  // Posts show topic names, so both changes reload the history too.
  const handleRenameTopic = async (id, name) => {
    try {
      await heaApi.renameTopic(id, name);
    } catch (requestError) {
      handleError(requestError);
      return;
    }
    await Promise.all([loadTopics(), loadPage(null)]);
  };

  const handleDeleteTopic = async (topic) => {
    const message = `Apagar o tema "${topic.name.pt}"? Ele sai de ${topic.posts} post(s); os posts ficam.`;
    if (!window.confirm(message)) return;
    try {
      await heaApi.deleteTopic(topic.id);
    } catch (requestError) {
      if (requestError.status === 401) return handleError(requestError);
      window.alert(requestError.message);
      return;
    }
    await Promise.all([loadTopics(), loadPage(null)]);
  };

  const filtering = Boolean(filters.period) || filters.topicIds.length > 0;
  const filterTopicNames = topics
    .filter((topic) => filters.topicIds.includes(topic.id))
    .map((topic) => topic.name.pt)
    .join(' ou ');

  const handleLogout = async () => {
    await heaApi.logout().catch(() => {});
    navigate('/admin/login', { replace: true });
  };

  if (!authChecked) {
    return (
      <main className="admin-page">
        <p className="admin-muted admin-center">Carregando...</p>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-topbar">
        <div className="admin-topbar-brand">
          <img src={logoHorizontalBranco} alt="Isabel Maito" className="admin-topbar-logo" />
          <h1 className="admin-topbar-title">HEA · Hoje Eu Aprendi</h1>
        </div>
        <nav className="admin-topbar-actions">
          <a href="/#hea" className="admin-link-button" target="_blank" rel="noopener noreferrer">
            Ver no site
          </a>
          <button type="button" className="admin-button" onClick={handleLogout}>
            Sair
          </button>
        </nav>
      </header>

      <div className="admin-content">
        <section className="admin-card">
          <h2 className="admin-section-title">Novo post</h2>
          <PostForm topics={topics} onCreateTopic={handleCreateTopic} submitLabel="Publicar" onSubmit={handleCreate} />
          <p className="admin-muted admin-hint">
            Escreva em português. O texto é traduzido para inglês, espanhol e chinês ao salvar.
          </p>
        </section>

        <TopicManager topics={topics} onRename={handleRenameTopic} onDelete={handleDeleteTopic} />

        <section className="admin-history" aria-label="Histórico de posts">
          <h2 className="admin-section-title">Histórico</h2>

          <AdminHistoryFilters calendar={calendar} topics={topics} filters={filters} onChange={changeFilters} />
          {filtering && hasLoaded && !loading && (
            <p className="admin-muted admin-filter-summary" role="status">
              {posts.length === 0
                ? 'Nenhum post com esses filtros.'
                : `Posts ${[
                    filters.period && `de ${describePeriod(filters.period)}`,
                    filters.topicIds.length > 0 && `com ${filterTopicNames}`,
                  ]
                    .filter(Boolean)
                    .join(' ')}${nextCursor ? '' : ` (${posts.length})`}`}
            </p>
          )}

          {posts.map((post) => (
            <AdminPostCard
              key={post.id}
              post={post}
              topics={topics}
              onCreateTopic={handleCreateTopic}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onReply={handleReply}
              onUpdateReply={handleUpdateReply}
              onDeleteReply={handleDeleteReply}
            />
          ))}

          {hasLoaded && !filtering && posts.length === 0 && (
            <p className="admin-muted">Nenhum post ainda. Que tal o primeiro?</p>
          )}
          {loading && <p className="admin-muted admin-center">Carregando...</p>}
          {error && (
            <div className="admin-center">
              <p className="admin-error">{error}</p>
              <button type="button" className="admin-button" onClick={() => loadPage(posts.length ? nextCursor : null)}>
                Tentar novamente
              </button>
            </div>
          )}
          {hasLoaded && !nextCursor && posts.length > 0 && <p className="admin-muted admin-center">Fim do histórico.</p>}
          <div ref={sentinelRef} aria-hidden="true" />
        </section>
      </div>
    </main>
  );
}
