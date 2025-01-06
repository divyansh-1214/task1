/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '390px' },
        'sm': { 'max': '770px' },
        'sn': { 'max': '450px' },
        'so': { 'min': '450px', 'max': '600px' },
        'md': { 'min': '670px', 'max': '767px' },
        'rx': { 'min': '600px', 'max': '900px'},
        'lg': { 'min': '768px', 'max': '1024px' },
        '1.5xl': { 'min': '1024px', 'max': '1439px'},
        'xl': { 'min': '1440px' },
        '2xl': { 'min': '2560px' },
      },
    },
  },
  plugins: [],
}