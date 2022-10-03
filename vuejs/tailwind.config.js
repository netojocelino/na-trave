/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'white': '#F4F6FF',
        'grey-1': '#696C74',
        'grey-2': '#91949D',
        'grey-3': '#B1B4BD',
        'black': '#0B0E16',
        'red-1': '#300219',
        'red-2': '#AF053F',
        'red-3': '#BB2E57',
    },
    extend: {},
  },
  plugins: [],
}
