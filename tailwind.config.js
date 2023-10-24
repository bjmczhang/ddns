/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ddnsPrimary: "#f1582c",
        ddnsSecondary: "#d14124",
        ddnsBlack: "#111111",
        ddnsDarkGrey: "#2b2b2b",
        ddnsGrey: "#949494",
        ddnsSilver: "#f8f9fa",
        ddnsBlue: "#0e278e",
        ddnsLightBlue: "#026be2",
        ddnsExtraLightBlue: "#248be2",
      },

      animation: {
        "bounce-1": "bounce 2s ease-in-out 0s infinite alternate",
        "bounce-2": "bounce 2.5s ease-in-out 0.5s infinite alternate",
        "bounce-3": "bounce 3s ease-in-out 0s infinite alternate",
        "bounce-4": "bounce 2s ease-in-out 0.5s infinite alternate",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
