/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'md': { 'min': "481px"},
    },
    extend: {},
  },
  plugins: [],
};
