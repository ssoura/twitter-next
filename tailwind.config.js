/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        White: "#e7e9ea",
        Blue: "#308CD8",
        Border: "#2f3336",
        LightGray: "#71767b",
        DarkGray: "#17181C",
      },
    },
  },
  plugins: [],
};
