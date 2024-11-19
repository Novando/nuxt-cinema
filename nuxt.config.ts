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
      apiUrl: 'http://localhost:3000/v1',
      wsUrl: 'http://localhost:3000',
    }
  },

  modules: ['@pinia/nuxt']
})