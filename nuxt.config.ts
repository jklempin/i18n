// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    baseUrl: 'http:localhost:3000',
    strategy: 'prefix',
    defaultLocale: 'en',
    trailingSlash: false,
    customRoutes: 'config',
    pages: {
      'admin/index': false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirect',
      redirectOn: 'root', // recommended
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-GB',
      },
      {
        code: 'de',
        name: 'German',
        iso: 'de-DE',
      },
    ],
  },
});
