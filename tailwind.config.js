/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customYellow: '#fcfcdc',
        customGreen: '#17BF63',
      },
      fontFamily: {
        'maven': ['"Maven Pro"', 'serif'], 
      },
    },
  },
  plugins: [],
}

