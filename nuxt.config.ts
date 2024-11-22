// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',

  components: {
    global: true,
    dirs: ['~/components/general']
  },
  modules: ['@nuxtjs/tailwindcss'],
})