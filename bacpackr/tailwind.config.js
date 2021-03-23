module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true
    },
    fontFamily: {
      'sans': ['Niramit', 'Sans-serif']
    }
  },
  variants: {}
}
