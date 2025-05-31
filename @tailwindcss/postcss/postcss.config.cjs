const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
// '@tailwindcss/postcss' - это плагин для PostCSS, который позволяет использовать Tailwind CSS в PostCSS

module.exports = {
  plugins: {
    tailwindcss: {}, // tailwindcss(), если передать опции
    autoprefixer: {},
    '@tailwindcss/postcss': {},
  },
};