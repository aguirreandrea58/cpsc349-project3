/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './modules/*.js',
    './main.js',
    './index.html'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
}
