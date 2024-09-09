/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#0C0D11",
        gray: "#0F1014",
        hoverGray: "#121317;",
        fontGray: "#525560;",
        pureWhite: "#FFF",
        hoverRed: "#FF1A35",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(255, 26, 53, 0.15), rgba(160, 31, 46, 0.15) 50px, rgba(160, 31, 46, 0) 120px, #0C0D11 200px);",
      },
    },
  },
  plugins: [],
};
