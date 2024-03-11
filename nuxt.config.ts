// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    webhookUrl: ''
  },
  modules: ["@nuxt/content", '@nuxt/ui', '@vee-validate/nuxt', 'nuxt-icon'],
});
