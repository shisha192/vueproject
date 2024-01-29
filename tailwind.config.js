/** @type {import('tailwindcss').Config} */
import { screens } from "./utils/baseScreens.js"

const spacing = {}
const spacingPercents = {}
const fontSize = {}

for (let i = 0; i <= 2000; i++) {
  spacing[i] = `${i}px`
}

for (let i = 0; i <= 100; i++) {
  spacingPercents[i + "%"] = `${i}%`
}

for (let i = 1; i <= 200; i++) {
  fontSize[i] = [`${i}px`, `${i}px`]
}

export default {
  content: ["./components/**/*.{js,vue,ts}", "./app.vue", "./pages/**/*.vue", "./error.vue", "./utils/**/*.{js,ts}"],

  darkMode: "class",

  theme: {
    screens,

    spacing: {
      0: "0",
      ...spacing,
      ...spacingPercents,
    },

    flexBasis: {
      "1/5": "20%",
      "1/4": "25%",
      "1/3": "33.33%",
      "1/2": "50%",
      "2/3": "66.67%",
      "3/4": "75%",
      full: "100%",
    },

    fontSize: {
      ...fontSize,
      "12/20": ["12px", "20px"],
      "16/24": ["16px", "24px"],
      "17/28": ["17px", "28px"],
      "18/24": ["18px", "24px"],
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chakraPetch: ["ChakraPetch", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },

    colors: {
      transparent: "transparent",
      inherit: "inherit",
      current: "currentColor",

      primary: {
        50: "#FFB5FE",
        100: "#FFB5FE",
        200: "#FF7BFE",
        300: "#FF00FF",
        400: "#FC00FE",
        500: "#ED00F2",
        DEFAULT: "#DA00EF",
        700: "#C000EB",
        800: "#A800E7",
        900: "#7800E0",
      },

      secondary: {
        50: "#D9FFFE",
        100: "#9AFFFD",
        200: "#00FFFF",
        300: "#00FBFF",
        400: "#00F5FE",
        500: "#00F0FF",
        DEFAULT: "#00DEEB",
        700: "#00C7CE",
        800: "#00B1B4",
        900: "#008C82",
      },

      neutral: {
        10: "#FFFFFF",
        50: "#F5F5F5",
        100: "#E9E9E9",
        200: "#D9D9D9",
        300: "#C4C4C4",
        400: "#9D9D9D",
        500: "#7B7B7B",
        DEFAULT: "#555555",
        700: "#434343",
        800: "#262626",
        900: "#000000",
      },

      error: {
        DEFAULT: "#C8102E",
      },
    },

    minWidth: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100wh",
    }),

    minHeight: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),

    borderRadius: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      none: "0px",
      full: "9999px",
    }),

    maxWidth: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100wh",
      none: "none",
    }),

    maxHeight: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      none: "none",
    }),

    backgroundImage: {
      none: "none",
      gradient: "linear-gradient(89.02deg, #FF00FF -8.11%, #00FFFF 109.58%)",
    },
  },
}
