module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      '1/2': '40%',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'black-light': '#393E46',
      'black-dark': '#222831',
      teal: '#00ADB5',
      'gray-light': '#EEEEEE',
    }),
    flex: {
      1: '1 1 0%',
      2: '2 2 0%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
