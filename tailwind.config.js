const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        "about-pattern": "url('/public/hero.png')",
      }),
      outline: {
        primary: "2px solid #057176",
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ["visited"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
