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
      },
      backgroundImage: () => ({
        footer: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(../Images/Footer/footer-bg.jpg)",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
  ],
}

