/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainPurp: '#2E00D7',
        mainBlue:'#2B7CFF'
      }
    },
  },
  plugins: [],
}