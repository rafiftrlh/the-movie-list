/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      aspectRatio: {
        potrait: "2/3",
        cinema: "21/7",
      },
      colors: {
        background: "#27272a",
        primary: "#22c55e",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
