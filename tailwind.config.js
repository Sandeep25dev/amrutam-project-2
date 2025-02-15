/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#3A643B",
        },
        secondary: {
          200: "#FFFBF2",
        },
      },
    },
  },
  plugins: [],
};
