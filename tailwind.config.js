/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // transparent: 'transparent',
        // current: 'currentColor',
        // 'white': '#ffffff',
        // 'purple': '#3f3cbb',
        // 'midnight': '#121063',
        // 'metal': '#565584',
        // 'tahiti': '#3ab7bf',
        // 'silver': '#ecebff',
        // 'bubble-gum': '#ff77e9',
        // 'bermuda': '#78dcca',
        'appBg': '#edf2f8'
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
