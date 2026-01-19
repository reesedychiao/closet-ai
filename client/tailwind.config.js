/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#343439",
        background: "#e4d3b9",
        primary: "#8696ba",
        secondary: "#b35949",
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
};
