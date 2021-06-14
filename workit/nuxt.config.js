export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'workit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/firebase.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'bootstrap-vue/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
 
  axios: {
    proxy: false,
    progress: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    firebase: {
    apiKey: "AIzaSyAdodEPHZEI12EqvSfkBrbZxXyE5wLayns",
    authDomain: "work-it-2e0cb.firebaseapp.com",
    databaseURL: "https://work-it-2e0cb-default-rtdb.firebaseio.com",
    projectId: "work-it-2e0cb",
    storageBucket: "work-it-2e0cb.appspot.com",
    messagingSenderId: "167858554085",
    appId: "1:167858554085:web:b53b72b0290c7c1eea000c"
    }
  },


  
}
