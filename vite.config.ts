import { defineConfig } from 'vite';

export default defineConfig({
  base: '/minigames/', 
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