/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [
    // Add Tailwind CSS plugins here
    // require('@tailwindcss/typography'),
  ],
};
