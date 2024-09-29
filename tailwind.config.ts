import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      screens: {
        "1200px": "1200px",
        "1360px": "1360px",
      },
      animation: {
        "glow-orange": "glow 2s ease-in-out infinite",
      },
      colors: {
        primary: {
          DEFAULT: "#47E1DD",
          BG_LIGHT: "#F8F8F8",
          ALMOST_WHITE: "#FAFAFA",
          dark: "#000000",
          grey: "#6A6A6A",
          bgGrey: "#E8E8E8",
        },
        functional: {
          DEFAULT: "#F93A00",
          gray: "rgba(26, 26, 26, 0.50)",
          LIGHT: "#FFF3EF",
          dark: "#008BA3",
        },
        dark: {
          super: "#16151B",
          lighter: "#2B2934",
          upper: "#3A3846",
          upper2: "#474556",
          text: "#817C9A",
          lightText: "#B7B4C5",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          dark: "#008BA3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
