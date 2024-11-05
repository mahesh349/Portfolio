/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-black': 'linear-gradient(145deg, #1e2024, #23272b)',
        'linear-white': 'linear-gradient(145deg, #e2e8ec, #ffffff)',
        'linear-revblack' : 'linear-gradient(325deg, #1e2024, #23272b)',
        'linear-revwhite' : 'linear-gradient(325deg, #e2e8ec, #ffffff)',
      },
    },
  },
  plugins: [],
}