/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'inter' : ['"Inter"', 'sans-serif']
      },
      colors: {
        'custom-yellow' : 'hsl(75, 94%, 57%)',
        'Dark-Grey': 'hsl(0, 0%, 12%)',
        'Off-Black': 'hsl(0, 0%, 8%)',
        'Grey': 'hsl(0, 0%, 20%)'
      }
    },
  },
  plugins: [],
}

