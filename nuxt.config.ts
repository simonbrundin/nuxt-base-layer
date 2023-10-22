// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@unocss/nuxt"],
  devtools: { enabled: true },
  plugins: ["~/plugins/debounce"],
  imports: {
    dirs: ["./stores"],
  },
});
