/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extends: {
      animation:{
        blob: "blob 2s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.5)"
          },
          "66%": {
            transform: "scale(0.9)"
          },
          "100%": {
            transform: "scale(1)"
          },
        }
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'roboto': ['Roboto'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}