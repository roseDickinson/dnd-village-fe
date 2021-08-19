module.exports = {
  head: {
    title: 'DnD Locations Visualisation',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Tool to visualise the people and relationships in my DnD locations' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'assets/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  buildModules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      '@nuxtjs/vuetify',
      '@nuxtjs/eslint-module',
    ],
    vuetify: {
      optionsPath: '~/plugins/vuetify.js',
    },
  }