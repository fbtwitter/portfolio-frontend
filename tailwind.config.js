/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", ...defaultTheme.fontFamily.sans],
        fraunces: ["Fraunces", ...defaultTheme.fontFamily.serif],
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "1.5xl": ["1.375rem", "1.75rem"],
      },
    },
  },
  plugins: [],
};
