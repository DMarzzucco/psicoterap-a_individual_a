import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightDark: "#1b2024",
        blackGrey: "#1a1a1a"
      },
      screens: {
        '456': { 'max': "456px" },
      },
      width: {
        350: "350px",
        300: "300px",
        250: "250px",
        200: "200px",
      },
      height: {
        300: "300px",
        200: "200px",
      }
    },
  },
  plugins: [],
};
export default config;
