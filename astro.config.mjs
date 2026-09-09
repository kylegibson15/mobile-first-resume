import { defineConfig } from 'astro/config';

export default defineConfig({
  // The Firebase Hosting site this deploys to (`.firebaserc` → resume-kyle-gibson).
  // Needed so the layout can emit an absolute canonical and og:url; a relative
  // one is ignored by every link unfurler.
  site: 'https://resume-kyle-gibson.web.app',
  // Firebase Hosting serves this directory; the previous Vite build used it too.
  outDir: './build',
  build: { format: 'file' },
});
