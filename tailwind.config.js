/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/Assets/banner.png')",
        hero1: "url('/src/Assets/hero1.webp')",
        hero2: "url('/src/Assets/hero2.webp')",
        hero3: "url('/src/Assets/hero3.webp')",
      },
    },
  },
  plugins: [],
});
