/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif']
      },
      colors: {
        brandRed: '#eb666e',
        deepPurple: '#391b51'
      },
      mytheme: {
        'base-100': '#ffffff'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}