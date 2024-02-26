/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'copy-grey': '#f2f2f2',
        'copy-green': '#34b557',
      },
    },
  },
  plugins: [],
};
