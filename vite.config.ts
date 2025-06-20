import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Required for Render.com
    port: 10000,      // Default Render port
    strictPort: true   // Exit if port is unavailable
  },
  preview: {
    host: true,       // Required for Render.com
    port: 10000,      // Must match server port
    strictPort: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',   // Explicit output directory
    emptyOutDir: true // Clear directory before build
  }
});
