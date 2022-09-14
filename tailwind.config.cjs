/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#68ACCD",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        nav: ["Bai Jamjuree", "sans serif"],
      },
    },
  },
  plugins: [],
};
