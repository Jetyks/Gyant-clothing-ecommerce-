/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        customYellow: '#fcfcdc',
        customGreen: '#17BF63',
        // Puedes seguir agregando más colores personalizados
      },
    },
  },
  plugins: [],
}

