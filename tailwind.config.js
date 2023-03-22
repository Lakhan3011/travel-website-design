/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontfamily: {
        poppins: ["Poppins", "Montserrat"],
      },
      colors: {
        orange: "#FB6E38",
        blue: "#05073C",
        gray: "#C6C6D2",
        lightGray: "#FAFAFB",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
