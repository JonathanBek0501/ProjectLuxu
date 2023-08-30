/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
        sofia:['Sofia Sans', 'sans-serif'],
        saira:['Saira', 'sans-serif']
      },
      maxWidth:{
        xxl:"101rem"
      },
      colors:{
        brand:{
          black:{
            50:"#17181C",
            100:"#1D1D20",
            socials:" #111116"
          },
          gray:{
            50:"#DEDEDE",
            100:"#666670",
            200:"#8A8A94",
          },
          pink:"#EF3054"
        }
      },
      borderWidth: {
        1.5: '1.5px',
        3: '3px',
      },
      fontSize: {
        base: ['16px', '22px']
      },
      lineHeight: {
        7.5: '30px'
      },
      backgroundImage:{
        "pink":"linear-gradient(180deg, #EF3054 0%, rgba(239, 48, 84, 0.64) 100%)",
        "pink-dark":"linear-gradient(180deg, #E31239 0%, rgba(239, 47, 83, 0.64) 100%)",
        "pink-ho":"linear-gradient(180deg, #F25572 0%, rgba(242, 85, 114, 0.64) 100%)",
        "black":"linear-gradient(244deg, rgba(18, 19, 22, 0.92) 0%, #121316 100%)",
        "100":"linear-gradient(180deg, #202227 0%, rgba(32, 34, 39, 0.48) 100%)",
        "200":"linear-gradient(180deg, #25272D 0%, rgba(37, 39, 45, 0.48) 100%)",
        "black-ho":"linear-gradient(180deg, #17181C 0%, rgba(23, 24, 28, 0.48) 100%)",
        "download-gradient":"linear-gradient(90deg, #17181C 0%, rgba(23, 24, 28, 0.64) 66.67%, rgba(23, 24, 28, 0.00) 100%)",
        "checked":"url('/image/checked.svg')",
      },
      spacing:{
        13:"3.25rem",
        50:"12.5rem"
      },
      dropShadow:{
        "game-text":"box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.48)"
      }
    },
  },
  plugins: [
  ],
}

