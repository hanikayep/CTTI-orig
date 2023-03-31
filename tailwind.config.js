/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: "#51E9EF",
        darkPrimary: "#2A474",
        secondary: "#39B0A8",
        light: "#F5F5F5;",
        dark: "#1C1C1C",
        darkGray: "#5C5B5B",
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

      fontSize: {
        h1: 'clamp(4rem, 8vw, 5.8rem)',
        h2: 'clamp(3.5rem, 5vw, 4rem)',
        h3: 'clamp(2.5rem, 4vw, 3rem)',
        h4: 'clamp(1.5rem, 2vw, 2rem)',
        h5: 'clamp(1rem, 3vw, 1.5rem)'
      },

      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '768px',
          lg: '992px',
          xl: '1382px',
        },

      }

    },
  },
  plugins: [],
}