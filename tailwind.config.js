module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      '1/2': '40%',
    },
    flex: {
      1: '1 1 0%',
      2: '2 2 0%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
