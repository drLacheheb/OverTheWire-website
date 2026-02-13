// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import icon from 'astro-icon';

const isProd = process.env.NODE_ENV === 'production' || import.meta.env?.PROD;

// https://astro.build/config
export default defineConfig({
  site: 'https://drLacheheb.github.io',
  base: isProd ? '/OverTheWire-website' : '/',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), icon()],
});