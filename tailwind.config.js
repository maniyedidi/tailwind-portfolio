/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },    
    extend: {
      colors: {
        primary: '#198754',
        primaryLight: '#21C896'
      },
      listStyleImage:{
        checkmark:'url("/assets/icons/check.svg")'
      }
    }
  },
  plugins: []
};
