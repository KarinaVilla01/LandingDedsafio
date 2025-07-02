/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pokmn: ['POKMNFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
