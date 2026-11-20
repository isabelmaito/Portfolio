import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The Vercel dashboard rejects VITE_ names, so the API address is read from API_URL.
  // Only list public values here: everything these prefixes match ends up in the bundle.
  envPrefix: ['VITE_', 'API_URL'],
  server: {
    port: 3000,
    open: true
  }
});
