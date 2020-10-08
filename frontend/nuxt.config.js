const strapiBaseUri = process.env.API_URL || 'https://tatchi-blog.herokuapp.com/'

export default {
  mode: 'universal',
  target: 'server',
  server: {
    port: 8000, // par défaut : 3000
    host: '0.0.0.0' // par défaut : localhost
  },
  env: {
    strapiBaseUri,
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      // { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }
    ],
  },
  loading: '~/components/global/Loader.vue',
  css: ['~layouts/global.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios', '@nuxtjs/markdownit', '@nuxtjs/strapi'],
  axios: {},
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  strapi: {
    url: strapiBaseUri,
    entities: [
      {
        name: 'projects',
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
