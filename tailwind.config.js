/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('./assets/home.png')",
        explorer: "url('./assets/explore-product.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
