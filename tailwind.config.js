/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#13131a",
        "theme-secondary": "#1c1c24",
        "theme-light": "#292932",
        color: "#1e75ff",
        "color-secondary": "#50b5ff"
      }
    },
    fontFamily: {
      themeFont: ["IBM Plex Sans", "sans-serif"]
    }
  },
  plugins: []
};
