// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
  
    userAdmin: process.env.USER_ADMIN,
    userPassword: process.env.USER_PASSWORD
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [ 
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: [100, 300, 400, 500, 700, 900],
        Roboto: true,
      }
    }],'@pinia/nuxt'
  ],
})