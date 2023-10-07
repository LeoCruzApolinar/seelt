/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'back-movies': "url('./images/background.jpeg')",
      }
    },
  },
  plugins: [],
}

