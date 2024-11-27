/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#DAF0E9", // Define your custom color here
        "custom-gray": "#6B6D70",
        "custom-white": "#FAFAFA",
        "custom-gray": "#C8C8C8",
        "custom-black": "#272526",

        primary: "#ff3333",
        secondary: {
          100: "#9dc3ff",
          200: "#5b9aff",
        },
      },
      fontFamily: {
        bodyFont: ["Almarai"],
        customFont: ["Nunito"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(92.54deg, #71E7A4 0.77%, #196BAC 98.18%)",
        "custom-gradientt":
          "linear-gradient(94.48deg, #61D1A7 4.13%, #2780AB 99.24%)",
        "custom-gradient1":
          "linear-gradient(94.48deg, #61D1A7 4.13%, #2780AB 99.24%)",
      },
    },
  },
  plugins: [],
};
