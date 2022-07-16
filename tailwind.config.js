/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryPurple: "#646ff0",
      black: {
        1: "#646681",
        2: "#585858",
        pure: "#000000",
      },
      bg: {
        1: "#0d1117", //light
        2: "#010409", //dark
        3: "#30363d", //border
      },
      gray: {
        1: "#eee",
        2: "#dedfe1",
      },
      white: "#ffffff",
      orange: "#d29917",
    },
    extend: {},
  },
  plugins: [],
};
