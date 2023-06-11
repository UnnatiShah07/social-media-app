/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E11299',
        'font-color': '#363636'
      },
    },
    fontFamily: {
      'caveat': ['Caveat', 'cursiv'],
    }
  },
  plugins: [],
};
