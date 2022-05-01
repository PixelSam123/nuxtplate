import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {}
    }
  },
  typescript: {
    shim: false, // set to True for IDEs that don't use Volar
    strict: true
  }
})
