/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      blackRussian: '#090b1a',
      slateBlue: '#1b1938',
      legendaryLavender: '#aa5cdb',
      white: 'hsl(0, 0%, 100%)',
      whitePara: 'hsla(0, 0%, 100%, 0.75)',
      whiteStats: 'hsla(0, 0%, 100%, 0.6)',
      transparentPurple: 'hsla(300,80%,25%, .5)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      }

    },
  },
  plugins: [],
}
