/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ['Poppins']
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
