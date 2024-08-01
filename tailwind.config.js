/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '0px',
    },
    extend: {
      colors: {
        maroon: '#800000',
        dark: '#020403',
        green: '#6E8880',
        primary: '#F3F1EF',
        secondary: '#2F4D4B'
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

