/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
  }, 
  screens: {
    xxs:{"max": "400px"},
    xs: {"max": "511px"},
    sm: "512px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}