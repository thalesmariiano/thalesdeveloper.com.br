/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'myPurple': {
          100: '#6531e6',
          400: '#551fdb',
          700: '#02002d',
          800: '#020026',
          900: '#04021d',
        },
      },
      fontFamily: {
        madeTommy: ['madeTommyLight', 'sans-serif'],
        kusanagi: ['kusanagi', 'sans-serif'],
      },
      boxShadow: {
        drawer: '-3px 3px 5px rgba(0,0,0,.5)',
        header: '0px 3px 5px rgba(0,0,0,.5)'
      }
    },
  },
  plugins: [],
}

