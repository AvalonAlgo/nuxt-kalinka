// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@element-plus/nuxt',
    '@nuxtjs/google-fonts'
  ],

  colorMode: {
    preference: 'light'
  },

  googleFonts: {
    families: {
      'Amatic+SC': true
    },
  },

  nitro: {
    preset: "vercel",
  },

  compatibilityDate: '2024-10-10'
})