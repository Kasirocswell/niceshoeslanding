/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      abril: ['Abril Fatface'],
      concert: ['Concert One'],
      prompt: ['Prompt'],
      witcher: ['Qwitcher Grypen'],
      neue: ['Bebas Neue']
    },
  },
  plugins: [],
}
