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
        1: "#f8f8ff",
        2: "#ecedf6",
        3: "#cccdde",
      },
      gray: {
        1: "#eee",
        2: "#dedfe1",
      },
      white: "ffffff",
    },
    extend: {},
  },
  plugins: [],
};
