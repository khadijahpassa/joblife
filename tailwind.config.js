/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    container: {
      padding: {
        DEFAULT: '50px'
      }
    },
    screens: {
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1330px',
    },
    extend: {
      colors: {
        primary:'#161C2D',
        secondary:'#161C2D70',
        accent: {
          DEFAULT: '#473BF0',
          secondary: '#68D585',
          tertiary: '#F4F7FA',
        },
        lightGreen: '#F0FBF3',
      },
      fontFamily: {
        primary: 'Poppins',
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 2px 40px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        hero: 'url(../../asset/img/background/bg-hero.png)',
        signUp: 'url(../../asset/img/background/bg-signup.png)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

