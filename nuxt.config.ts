// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  build : {
    transpile : ["vuetify"]
  },
  devtools: { enabled: true },
});
