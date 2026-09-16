import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3030,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});