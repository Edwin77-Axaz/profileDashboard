/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:{
          100: "#3A00B0",
          300: "#29007D",
          900: "#120037",
        },
      }
    },
  },
  plugins: [],
}