/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "#1b2024",
        blackGrey: "#1a1a1a"
      },
      width: {
        350: "350px",
        300: "300px",
        250: "250px",
        200: "200px",
      },
      height:{
        300:"300px",
        200:"200px",
      }
    },
  },
  plugins: [],
}

