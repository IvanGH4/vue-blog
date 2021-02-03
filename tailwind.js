module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        myBlue: {
          light: '#8685ef',
          DEFAULT: '#ff00ff'
        },
        myDark: {
          light: '#aca7cb',
          DEFAULT: '#787586',
          dark: '#333333'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
