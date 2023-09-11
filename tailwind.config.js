/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        1: "repeat(1, 380px)",
        2: "repeat(2, 380px)",
        3: "repeat(3, 380px)",
      },
    },
  },
  plugins: [],
};
