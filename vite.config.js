import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: ['.traefik.me', 'localhost']
  }
});