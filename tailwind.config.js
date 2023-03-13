/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
         {
           'hero_pattern': "url('/public/Images/waveBackground.png')"
         }
    },
  },
  plugins: [],
}
