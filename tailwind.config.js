/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
        slate: colors.slate,
        violet: colors.violet,
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
});
