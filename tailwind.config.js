/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        primary: '#1E3A8A', // Azul oscuro
        secondary: '#3B82F6', // Azul claro
        accent: '#F59E0B', // Amarillo
        dark: '#111827', // Gris oscuro
        light: '#F3F4F6', // Gris claro
        black: '#000000',
        white: '#FFFFFF',
    },}
  },
  plugins: [],
}

