/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#E8E3DC",
        primary: "#C77F4D",
        secondary: "#000000",
        tertiary: "#FFFFFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        "xs": "450px",
      },
    },
  },
  plugins: [],
};
