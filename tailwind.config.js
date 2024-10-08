/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue-dark': '#030916',
      'blue': '#4A6382',
      'blue-semilight': '#CDD4DA',
      'blue-light': '#F2F7FC',
      'secondary': '#0D0D17',
      'primary': '#BF9845',
      'primary-dark': '#473B21',
      'primary-light': '#B8A37B',
      'primary-lighter': '#E1D6BE',
      'gold': '#CDAF6D',
      'gold-dark': '#765D28',
      'gold-light': '#DECA9E',
      'white': '#FFFFFF',
      'gray': '#555',
      'black': '#000',
      'red-light': '#f87171',
      'red': '#b91c1c',
      'green-light': '#f0fdf4',
      'green': '#15803d'
    },
    extend: {
      fontFamily: {
        'roboto' : ["Roboto", 'sans-serif']
      }
    },
  },
  plugins: [],
}

