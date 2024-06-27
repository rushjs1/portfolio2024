// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    webhookUrl: ''
  },
  modules: [
    "@nuxt/content",
    '@nuxt/ui',
    '@vee-validate/nuxt',
    '@vueuse/nuxt',
    "@nuxt/image"
  ],
});
