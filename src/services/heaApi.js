const API_URL = (import.meta.env.API_URL || 'http://localhost:4000').replace(/\/$/, '');

export class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
    }
}

async function request(path, { method = 'GET', body, auth = false, signal } = {}) {
    let response;
    try {
        response = await fetch(`${API_URL}${path}`, {
            method,
            signal,
            credentials: auth ? 'include' : 'omit',
            headers: body ? { 'Content-Type': 'application/json' } : undefined,
            body: body ? JSON.stringify(body) : undefined,
        });
    } catch (error) {
        if (error.name === 'AbortError') throw error;
        throw new ApiError('Sem conexão com o servidor', 0);
    }

    if (response.status === 204) return null;
    const data = await response.json().catch(() => null);
    if (!response.ok) {
        throw new ApiError(data?.error || `Erro ${response.status}`, response.status);
    }
    return data;
}

function query(params) {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') search.set(key, String(value));
    });
    const text = search.toString();
    return text ? `?${text}` : '';
}

/** Sends a photo already shrinked to WebP (utils/photoResize.js); returns { url, width, height }. */
async function uploadPhoto(blob) {
    let response;
    try {
        response = await fetch(`${API_URL}/api/admin/photos`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'image/webp' },
            body: blob,
        });
    } catch {
        throw new ApiError('Sem conexão com o servidor', 0);
    }
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new ApiError(data?.error || `Erro ${response.status}`, response.status);
    return data;
}

export const heaApi = {
    feed: ({ cursor, year, month, topics, signal } = {}) =>
        request(`/api/posts${query({ cursor, year, month, topics: topics?.join(',') })}`, { signal }),
    calendar: ({ signal } = {}) => request('/api/posts/calendar', { signal }),
    topics: ({ signal } = {}) => request('/api/posts/topics', { signal }),
    postContext: (id, { signal } = {}) => request(`/api/posts/${id}`, { signal }),

    login: (username, password) =>
        request('/api/auth/login', { method: 'POST', body: { username, password }, auth: true }),
    logout: () => request('/api/auth/logout', { method: 'POST', auth: true }),
    me: () => request('/api/auth/me', { auth: true }),

    adminFeed: (cursor, { year, month, topics } = {}) =>
        request(`/api/admin/feed${query({ cursor, year, month, topics: topics?.join(',') })}`, { auth: true }),
    createPost: (data) => request('/api/admin/posts', { method: 'POST', body: data, auth: true }),
    updatePost: (id, data) => request(`/api/admin/posts/${id}`, { method: 'PUT', body: data, auth: true }),
    deletePost: (id) => request(`/api/admin/posts/${id}`, { method: 'DELETE', auth: true }),
    createReply: (postId, data) =>
        request(`/api/admin/posts/${postId}/replies`, { method: 'POST', body: data, auth: true }),
    updateReply: (id, data) => request(`/api/admin/replies/${id}`, { method: 'PUT', body: data, auth: true }),
    deleteReply: (id) => request(`/api/admin/replies/${id}`, { method: 'DELETE', auth: true }),

    adminTopics: () => request('/api/admin/topics', { auth: true }),
    createTopic: (name) => request('/api/admin/topics', { method: 'POST', body: { name }, auth: true }),
    renameTopic: (id, name) => request(`/api/admin/topics/${id}`, { method: 'PUT', body: { name }, auth: true }),
    deleteTopic: (id) => request(`/api/admin/topics/${id}`, { method: 'DELETE', auth: true }),
    uploadPhoto,
};
