/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09172a",
        secondary: "#38d9a9",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        nav: ["Bai Jamjuree", "sans serif"],
      },
    },
  },
  plugins: [],
};
