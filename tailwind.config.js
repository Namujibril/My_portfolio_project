/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1320px',
    },
    container: {
      center: true,
      padding:{
        DEFAULT: '2rem',
      }
    },
    colors: {
      primryColor:'#ddfcfd',
      backgroundColor:'#011d1e',
      secondaryColor:'#6eecf7'
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem',
    },
    fontFamily: {
      heading: 'El Messiri',
      body: 'El Messiri',
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {},
  },
  plugins: [],
}