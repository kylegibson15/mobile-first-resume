import { defineConfig } from 'astro/config';

export default defineConfig({
  // Firebase Hosting serves this directory; the previous Vite build used it too.
  outDir: './build',
  build: { format: 'file' },
});
