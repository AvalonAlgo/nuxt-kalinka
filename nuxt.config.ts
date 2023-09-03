// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/supabase',
    '@tresjs/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    'vue-email/nuxt',
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@element-plus/nuxt'
  ],
  supabase: {
    redirect: false
  },
  nitro: {
    preset: "vercel",
  }
})
