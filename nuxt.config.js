export default {
  mode: 'universal',
  target: 'server',
  server: {
    port: 8000, // par défaut : 3000
    host: '0.0.0.0', // par défaut : localhost
  },
  publicRuntimeConfig: {
    backURL: process.env.API_URL,
    crispID: process.env.CRISP_ID,
    gaID: process.env.GA_ID
  },
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'TATCHI Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'TATCHI Studio est une jeune agence de création de motion design.',
      },
      {
        name: 'msapplication-TileColor',
        content: process.env.theme_color || '#ffffff',
      },
      { name: 'theme-color', content: process.env.theme_color || '#ffffff' },

      {
        itemprop: 'name',
        content: 'TATCHI Studio - Création de motion design',
      },
      {
        itemprop: 'description',
        content:
          'TATCHI Studio est une agence de création de motion design. Nous décrivons votre projet en une vidéo.',
      },
      {
        itemprop: 'image',
        content: `https://studio.tatchi.fr/social/share-1200x630.jpg`,
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'TATCHI Studio - Création de motion design',
      },
      {
        name: 'twitter:description',
        content:
          'TATCHI Studio est une agence de création de motion design. Nous décrivons votre projet en une vidéo.',
      },
      {
        name: 'twitter:image',
        content: `https://studio.tatchi.fr/social/share-1200x600.jpg`,
      },

      {
        property: 'og:site_name',
        content: 'TATCHI Studio - Création de motion design',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://studio.tatchi.fr' },
      {
        property: 'og:title',
        content: 'TATCHI Studio - Création de motion design',
      },
      {
        property: 'og:description',
        content:
          'TATCHI Studio est une agence de création de motion design. Nous décrivons votre projet en une vidéo.',
      },
      {
        property: 'og:image',
        content: `https://studio.tatchi.fr/social/share-1200x630.jpg`,
      },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', href: 'favicon/favicon-16x16.png' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'favicon/apple-touch-icon.png',
      },
      { rel: 'manifest', href: 'favicon/manifest.json' },
      {
        rel: 'mask-icon',
        href: 'favicon/safari-pinned-tab.svg',
        color: '#ffffff',
      },
    ],
  },
  loading: '~/components/global/Loader.vue',
  css: ['~layouts/global.css'],
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/crisp.js', mode: 'client' },
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/google-analytics'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    '@nuxtjs/strapi',
    'nuxt-mail',
  ],
  axios: {
    baseURL: process.env.BASE_URL, // Used as fallback if no runtime config is provided
  },
  googleAnalytics: {
    id: process.env.GA_ID,
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BASE_URL,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  mail: {
    smtp: {
      host: 'ssl0.ovh.net',
      port: 465,
      secure: true,
      secureConnection: true,
      auth: {
        user: process.env.CONTACT_USER, // compte expéditeur
        pass: process.env.CONTACT_PASS, // mot de passe du compte expéditeur
      },
      tls: {
        ciphers: 'SSLv3',
      },
    },
  },
  strapi: {
    url: process.env.API_URL,
    entities: [
      {
        name: 'motions',
        type: 'collection',
      },
      // {
      //   name: 'categories',
      //   type: 'collection',
      // },
      {
        name: 'homepage',
        type: 'single',
      },
      {
        name: 'global',
        type: 'single',
      },
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
