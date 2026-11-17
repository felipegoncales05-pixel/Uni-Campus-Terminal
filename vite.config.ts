import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base relativa funciona tanto no preview local quanto em /Uni-Campus-Terminal/ no GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { outDir: 'dist' },
});
