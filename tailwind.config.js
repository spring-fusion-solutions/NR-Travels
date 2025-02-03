/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      fontFamily: {
        sans: ['"Inter"', 'serif'],
        play: ['"Playfair"', 'serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
}

