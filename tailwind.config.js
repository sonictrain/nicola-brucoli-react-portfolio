/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          200: '#55E5CE',
          900: '#142934',
        },
        midnightBlue: {
          200: '#121625'
        },
        stone: {
          200: '#DEE4ED',
          700: '#8696AF',
          900: '#4D5A6F',
        },
      },
      fontFamily: {
        'sans': ['"Inter var", sans-serif',
          {
            fontFeatureSettings: '"cv01", "cv09", "cv02", "cv03", cv04, zero "ss07"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [],
});