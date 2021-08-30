const cracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
  style: {
    sass: {
      loaderOptions: (sassLoaderOptions, { env, paths }) => {
        return sassLoaderOptions
      },
    },
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
