/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      monseMedium: ['Montserrat-Medium'],
      monseBold: ['Monserrat-Bold'],
      frauncesBold: ['"Fraunces-Bold"'],
    },
    extend: {},
  },
  plugins: [],
}