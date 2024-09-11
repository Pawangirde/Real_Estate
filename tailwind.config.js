/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './styles/**/*.{css,scss,sass}', // Add paths to other folders if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
