// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Macebile couvreur zingueur page d\'accueil',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  typescript: {
    shim: false,
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/fonts.css', '@/assets/css/reset.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
