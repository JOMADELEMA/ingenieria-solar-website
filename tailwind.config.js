/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [ 
        './Pages/**/*.cshtml',
        './Views/**/*.chstml'
    ]
  },
  darkMode: false,
  content: ["./src/*.{html,js}", "./index.html", "./location.html"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'beach-noon': 'url(/assets/beach-noon.jpg)',
      //   'cloudy-sky': 'url(/assets/cloudy-sky.jpg)',
      // },
      colors: {
        'brighter': '#F6F6F6',
        'bright': '#FFF4CF',
        'normal': '#FFCB42',
        'normal2': '#3399EE',
        'dark': '#FFB200',
        'darken': '#277BC0', 
        'darkest': '#111111'
      },
      height: {
        "100": "28rem",
        "110": "32rem",
        "0.9": "90%"
      },
    },
  },
  plugins: [],
}
