/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        potrait: "2/3",
      },
      colors: {
        background: "#27272a",
        primary: "#22c55e",
      },
    },
  },
  plugins: [],
};
  