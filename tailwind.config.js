/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '16rem',
          sm: '16rem',
          lg: '16rem',
          xl: '15rem',
          '2xl': '16rem',
        },
      },
    },
  },
  plugins: [],
}