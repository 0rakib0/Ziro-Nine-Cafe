/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico:['Pacifico', 'cursive']
      },
      colors:{
        'primaryColor':'#0F172B',
        'secondarycolor':'#ef565c'
      }
    },
  },
  plugins: [],
}

