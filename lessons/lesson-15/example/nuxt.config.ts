// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'My Nuxt App'
    }
  },
  vite: {
    server: {
      fs: {
        strict: true
      }
    }
  }
})
