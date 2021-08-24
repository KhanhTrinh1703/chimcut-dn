const path = require('path')
const sassLoader = require('sass-loader')
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions
      },
    },
  },
}
