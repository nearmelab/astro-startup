import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import basicSsl from '@vitejs/plugin-basic-ssl';

import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://nearmelab.digital',
   adapter: cloudflare(),
  image: {
    domains: ['picsum.photos'],
  },
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    react(), 
    mdx(),
    sitemap({
      i18n: {
        locales: {
          en: 'en-US',
          ar: 'ar-SA',
        },
        defaultLocale: 'en',
      },
    })
  ],
  vite: {
     server: {
      allowedHosts: ['nearmelab.local']
    },
    plugins: [
      basicSsl(),
      tailwindcss(),
      Icons({
        autoInstall: true,
        jsx: 'react',
        compiler: 'jsx'
      }),
      AutoImport({
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
            extension: 'tsx',
          }),
        ],
      })
    ],
  },
});
