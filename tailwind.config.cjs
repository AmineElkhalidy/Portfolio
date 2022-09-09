/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#10101a",
        primary: "#0a192f",
        light: "#233044",
        secondary: "#57a3c7",
        accent: "#e6972f",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        nav: ["Bai Jamjuree", "sans serif"],
      },
    },
  },
  plugins: [],
};
