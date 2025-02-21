// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css",     
    "bootstrap-icons/font/bootstrap-icons.css"
  ],

  app: {
    head:{
      script: [{
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.bundle.min.js'
      }]
    }
  },
  modules: ["@nuxtjs/supabase"],
  supabase: { redirect: false },
})
