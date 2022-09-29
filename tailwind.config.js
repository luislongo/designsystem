/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato"],
        serif: ["Roboto Slab"],
      },
      colors: {
        neutral: {
          full: "#FFFFFF",
          50: "#f2f2f2",
          100: "#e6e6e6",
          200: "#cdcdcd",
          400: "#9a9a9a",
          500: "#686868",
          600: "#282828",
        },
        green: {
          full: "#25CEBT",
          100: "#21B96F",
          200: "#1EA562",
          400: "#167C4A",
          600: "#0F5231",
          800: "#072919",
        },
        secondary: {
          full: "#64656A",
          100: "#5A5B5F",
          200: "#505155",
          400: "#3C3D40",
          600: "#28282A",
          800: "#141415",
        },
        feedback: {
          ok: "#30AE17",
          warn: "#E8BB07",
          info: "#57AF8B",
          err: "#DC3913",
        },
      },
    },
  },
  plugins: [],
};
