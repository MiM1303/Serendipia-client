/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        caveat: `"Caveat", cursive`,
        marker: `"Permanent Marker", cursive`,
        marcellus: `"Marcellus", serif`
      }
    },
  },
  plugins: [require("daisyui")],
}

