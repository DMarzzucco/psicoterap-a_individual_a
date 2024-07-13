/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightDark: "#1b2024"
      },
      width: {
        350: "350px",
        300: "300px",
        250: "250px",
      }
    },
  },
  plugins: [],
}

