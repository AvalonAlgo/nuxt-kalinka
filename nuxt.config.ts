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
  ],
  supabase: {
    redirect: false
  },
  nitro: {
    preset: "vercel",
  }
})
