/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: '#7B81FF', //purple
        primaryDark: '#05149C',
        secondary: '#F2F3FF', //light purple
        secondaryDark: '#BABFFF',
        complementary: '#4C4950', //gray
        complementaryDark: '#252427',
        docGray: '#242526',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false },
};
