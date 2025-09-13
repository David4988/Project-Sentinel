/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sentinel-blue': '#0A2540',
        'sentinel-green': '#2ECC71',
        'sentinel-yellow': '#F1C40F',
        'sentinel-red': '#E74C3C',
        'sentinel-bg': '#F8F9FA',
        'sentinel-text-dark': '#495057',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}