module.exports = {
  head: {
    title: 'witta',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'witta',
        name: 'description',
        content: 'my profile, my life and more..'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['bulma', '@/assets/scss/main.scss'],
  loading: { color: '#a1d6e2' },
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      const vueLoader = config.module.rules.find(
        ({ loader }) => loader === 'vue-loader'
      )
      const { options: { loaders } } = vueLoader || {
        options: {}
      }
      if (loaders) {
        for (const loader of Object.values(loaders)) {
          changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
        }
      }
      config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
    }
  }
}

function changeLoaderOptions(loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets/scss'],
          data: '@import "_variables.scss";'
        })
      }
    }
  }
}
