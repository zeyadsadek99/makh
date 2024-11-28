// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/i18n",
      {
        locales: [
          {
            name: "EN",
            code: "en",
            iso: "en-US",
            file: "en.json",
            dir: "ltr",
          },
          {
            name: "AR",
            code: "ar",
            iso: "ar-AR",
            file: "ar.json",
            dir: "rtl",
          },
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ar",
        detectBrowserLanguage: false,
        vueI18nLoader: true,
      },
    ],
    "nuxt-icons",
    "@nuxt/image",
  ],
  plugins: ["~/plugins/i18n.client.ts", "~/plugins/fontawesome.ts"],

  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "@/assets/css/tailwind.css",
    "@/assets/css/style.css",
    "@/assets/css/global.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page", mode: "in-out" },
  },
  build: {
    transpile: ["vuetify"],
  },

  // modules: [
  //   (_options, nuxt) => {
  //     nuxt.hooks.hook("vite:extendConfig", (config) => {
  //       // @ts-expect-error
  //       config.plugins.push(vuetify({ autoImport: true }));
  //     });
  //   },
  //   //...
  // ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    optimizeDeps: {
      include: ["@vee-validate/rules"],
    },
  },

  // app: {
  //   head: {
  //     meta: [
  //       { name: "description", content: "This is about page" },
  //       { name: "keywords", content: "development,vuejs,nuxtjs" },
  //     ],
  //   },
  // },
});
