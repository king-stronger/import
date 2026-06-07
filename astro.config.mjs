// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-jakarta',
      provider: fontProviders.google(),

      weights: [400, 500, 600, 700, 800],
      styles: ['normal']
    }
  ],
  adapter: cloudflare()
});