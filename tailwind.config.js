/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-hero':"url('../src/assets/bgecom.png')",
        'banner':"url('../src/assets/banneroffer.png')"
      },
     
    },
  },
  plugins: [],
}

