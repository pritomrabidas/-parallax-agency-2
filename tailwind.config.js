/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#212121",
        secandari: "#3FD0D4",
        brand: "#9b9fa5",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        NunitoFont: ["Nunito", "sans-serif"],
        Opensans: ["Open Sans", "sans-serif"],
        Montez: ["Montez", "serif"],
      },
    },
  },
  plugins: [],
};
