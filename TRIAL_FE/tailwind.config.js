/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primaty-grey-dark": "#757575",
        orangered: "#ff3d00",
        gray: "#16151c",
        "primaty-cyan-dark": "#000",
        gold: "#ffc107",
        "primaty-grey-medium": "#e0e0e0",
        "primaty-grey-light": "#f6f5f4",
        darkgray: "#9e9e9e",
        cornflowerblue: "#1b61ae",
        "primaty-cyan-light": "#c3dce3",
        teal: "#2b788b",
      },
      fontFamily: {
        "text-label": "Dela Gothic One",
        "headings-heading-3": "'Dela Gothic One'",
      },
    },
  },
  plugins: [],
}