/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "rgba(255, 255, 255, 0.03)",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(217, 217, 217, 0)",
        },
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        gruppo: "Gruppo",
      },
      borderRadius: {
        "181xl": "200px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "63xl": "82px",
      "45xl": "64px",
      "21xl": "40px",
      "77xl": "96px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
