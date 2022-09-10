import cfg from './project.config'
import messages from './lib/i18n'

export default {
  target: 'static',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'ابتكار مستمر لتكنولوجيا المعلومات',
    /*
    ** title: process.env.npm_package_name || '',
    */
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: cfg.metaContent.text || '' },
      { hid: 'og:title', name: 'og:title', content: cfg.metaContent.text },
      { hid: 'og:image', name: 'og:image', content: cfg.metaContent.image },
      { hid: 'og:url', name: 'og:url', content: cfg.metaContent.url },
      { hid: 'keywords', name: 'keywords', content: cfg.metaContent.keywords }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/fonts.sass',
    '~/assets/typography.sass',
    '~/assets/swiper.sass',
    '~/assets/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lottie-vue-player.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: cfg.locale.list,
        defaultLocale: cfg.locale.default,
        strategy: 'prefix',
        detectBrowserLanguage: false,
        vueI18n: {
          fallbackLocale: cfg.locale.fallback,
          silentFallbackWarn: cfg.locale.default.length > 2,
          messages
        }
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.sass'],
    optionsPath: './vuetify.config.js'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
