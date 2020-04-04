export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Geraldine Bacang',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/main.scss', lang: 'scss' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/preload',
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/scrollto', ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],

  styleResources: {
    scss: ['~assets/main.scss']
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faCookieBite',
          'faCommentDots',
          'faEnvelope',
          'faGrinWink',
          'faHeart',
          'faAt',
          'faPhone'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: [
          'faDev',
          'faFacebook',
          'faTwitter',
          'faInstagram',
          'faYoutube',
          'faGithub',
          'faLinkedinIn',
          'faDribbble'
        ]
      }
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['aos', 'scrollto'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
