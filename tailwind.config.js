/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          DEFAULT:'#7469B6'
        },
        pink:{
          DEFAULT:'#FFE6E6'
        }
      },
    },
  },
  plugins: [],
}