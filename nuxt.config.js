const env = require('dotenv').config({ path: '/opt/illustrarama/config/.env' });

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'illustrarama-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato|Poiret+One|Raleway' },
      { rel: 'stylesheet', href: '/css/style.css' }
    ],
    script: [
      {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'},
      {
        src:'https://platform.instagram.com/en_US/embeds.js',
        async: true
      }
    ]
  },
  modules: [
    ['@nuxtjs/redirect-module', {
      // Redirect option here
    }],
    // Simple usage
    ['nuxt-cookie-control', {
      //your options
    }],
    ['nuxt-ssr-cache', {
      useHostPrefix: false,
      pages: [
        // these are prefixes of pages that need to be cached
        // if you want to cache all pages, just include '/'
        '/about',

        // you can also pass a regular expression to test a path
        /^\/news\/[a-f0-9]{32}$/,

        /^\/$/
      ],
      store: {
        type: 'memory',
        max: 1000,
        ttl: 60,
      },
    }],
    ['@nuxtjs/google-analytics', {
      id: process.env.ANALYTICS_ACCT || 'UA-0000000-00'
    }],
    ['@nuxtjs/recaptcha', {
      hideBadge: true,
      siteKey: process.env.RECAPTCHA_KEY || '0000000000000000',
      version: 3,
    }],
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-adsense', {
      id: process.env.ADSENSE_ACCT || 'ca-pub-0000000000000000',
      pageLevelAds: true,
      test: false,
      analyticsUacct: process.env.ANALYTICS_ACCT || 'UA-0000000-00',
    }],
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: process.env.FACEBOOK_PIXEL_KEY || '000000000000000',
    }],
    ['@miyaoka/nuxt-twitter-widgets-module', {
      /* module options */
      directiveName: 'twitter-widgets',
      scriptUrl: '//platform.twitter.com/widgets.js'
    }]
  ],
  buildModules: [
    // Simple usage
   ['@nuxtjs/dotenv',{ path: '/opt/illustrarama/config/' }]
  ],
  plugins: [
    '~/plugins/vue-moment',
    '~/plugins/vue-facebook-signin-button',
    '~/plugins/disqus',
    '~/plugins/vue-social-sharing',
  ],
  redirect: [
    { from: '^/news/(.*)$', to: '/news?v=$1' } // One to one mapping
  ],
  cookies: {
    necessary: [
      {
        name:  'Cookies del sitio',
        description:  'Utilizadas para el control de cookies como este mensaje.',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies', '_biz_uid', '_biz_pendingA', '_biz_nA', '_biz_flagsA', '_fbc', '_fbp', 'sparrow_id']
      },
      {
        name:  'Google Analitycs',
        description:  'Analizamos la data de trafico usando google analytics',
        cookies: ['_ga', '_gat', '_gid', '_gads', '1P_JAR', 'ANID', 'APISID', 'CONSENT', 'DV', 'GMAIL_RTT', 'HSID', 'NID', 'OTZ', 'S', 'SAPISID', 'SEARCH_SAMESITE', 'SID', 'SIDCC', 'SSID', 'GED_PLAYLIST_ACTIVITY'],
      },
      {
        name:  'Google Ads',
        description:  'Nuestra unica forma de generar ingreso es a traves de anuncios. Utilizados por google para el posicionamiento de publicidad dirigida.',
        cookies: ['DSID', 'IDE', 'S_adsense3-ui', 'UULE'],
      }
    ]
  },
  serverMiddleware: ["~/middleware/response-header.js"],
  fontawesome: {
    component: 'fa',
    imports: [
        {
          set: '@fortawesome/fontawesome-free-solid'
        },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
