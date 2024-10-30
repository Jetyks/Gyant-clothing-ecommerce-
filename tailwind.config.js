/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
  safelist: [
    'text-yellow-900', 'text-blue-500', 'hover:bg-yellow-900', 'border-red-500',
    {
      pattern: /text-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /border-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /hover:bg-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  plugins: [],
};

