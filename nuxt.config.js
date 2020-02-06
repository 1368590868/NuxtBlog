
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '木木的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'keywords', content: '冉林的博客,冉林的小站,冉林,木木的小站' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#43863b' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css',
    'assets/css/animate.min.css',
    'assets/css/index.less',
    'vant/lib/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui',
    {
      src: "~plugins/vue-particles",
      ssr: false
    },
    {
      src: '@/plugins/vue-mavon-editor',
      srr: false
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
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
