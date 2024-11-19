// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  pages: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public : {
      apiUrl: 'https://sentausa.arutek.com/v1',
      wsUrl: 'https://sentausa.arutek.com',
    }
  },

  modules: ['@pinia/nuxt']
})