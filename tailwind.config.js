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
          100: "#fafafa",
          200: "#f5f5f5",
          300: "#eeeeee",
          400: "#e0e0e0",
          500: "#bdbdbd",
          600: "#9e9e9e",
          700: "#757575",
          800: "#616161",
          900: "#424242",
        },
      },
    },
  },
  plugins: [],
};
