/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },

    extend: {
      colors: {
        "text-color": "#e2f0e3",
        "background-color": "#071308",
        "primary-color": "#8FE195",
        "secondary-color": "#188C22",
        "accent-color": "#16E927",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
