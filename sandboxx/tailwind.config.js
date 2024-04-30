/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      gridTemplateColumns:{
     '350':'repeat(auto-fill,minmax(350px,1fr))',
     '250':'repeat(auto-fill,minmax(250px,1fr))',
     '300': 'repeat(auto-fill,minmax(300px,1fr))',
      },
      animation : {
         'up':' up 2s ease-in-out forwards',
         'animates':'animates 2s ease-in-out forwards',
         'load':' load 2s ease-in-out forwards', 
      },

      
      keyframes:{
        up : {
          'to':{transform : 'translateY(0)' , opacity : '1' ,transation:'4s'}
        },
        animates : {
          'to':{transform : 'translateY(0)' , opacity : '1'}
        },
      
        load : {
          'to':{ opacity : '1'}
        },
    }
    },
    screens:{
      'sm':'390px',
      'md':'768px',
      'lg':'1024px',
    }
  },
  plugins: [],
}
