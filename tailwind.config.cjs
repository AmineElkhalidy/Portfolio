/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // secondary: "#38d9a9",
        primary: "#09172a",
        secondary: "#08d565",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        nav: ["Bai Jamjuree", "sans serif"],
      },
    },
  },
  plugins: [],
};
