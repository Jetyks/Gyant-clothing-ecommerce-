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
    'text-white',
    'hover:border-yellow-900',
    'hover:border-yellow-950',
    'hover:bg-yellow-900',
    'border-none',
    'bg-yellow-950',
    'hover:bg-gray-50',
    'border-yellow-900',
    'text-yellow-950',
    'opacity-100',
    'opacity-60',
   /*  { pattern: /hover:bg-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /border-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/ },
    { pattern: /bg-(yellow|blue|red|green|gray)-(100|200|300|400|500|600|700|800|900)/ }, */
  ],
  plugins: [],
};

