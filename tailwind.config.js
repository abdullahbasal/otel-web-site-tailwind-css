/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        amber: colors.amber,
        emerald: colors.emerald,
      },
    },
  },
  plugins: [],
});
