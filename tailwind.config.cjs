/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09172a",
        secondary: "#5ae6c4",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        nav: ["Bai Jamjuree", "sans serif"],
      },
    },
  },
  plugins: [],
};
