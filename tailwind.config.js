/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.ts"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato"],
        serif: ["Roboto Slab"],
      },
    },
  },
  plugins: [],
};
