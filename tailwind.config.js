/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    flex: {
      '3': '0 0 20%',
      'mobile': '0 0 33%'
    },
    fontFamily: {
      'custom': ['Irish Grover'],
      'custom2': ['Work Sans'],
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
