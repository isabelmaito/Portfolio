import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { heaApi } from '../../services/heaApi.js';
import './Admin.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    heaApi
      .me()
      .then(() => active && navigate('/admin', { replace: true }))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await heaApi.login(username, password);
      navigate('/admin', { replace: true });
    } catch (loginError) {
      setError(loginError.message);
      setSubmitting(false);
    }
  };

  return (
    <main className="admin-page admin-login-page">
      <form className="admin-card admin-login-card" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">HEA</h1>
        <p className="admin-muted">Entre para publicar o que aprendeu hoje.</p>

        <label className="admin-field">
          <span>Usuário</span>
          <input
            type="text"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            autoFocus
          />
        </label>

        <label className="admin-field">
          <span>Senha</span>
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {error && (
          <p className="admin-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="admin-button admin-button-primary" disabled={submitting}>
          {submitting ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
    </main>
  );
}
