/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {

    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
    },
    colors: {
      "travel-black": "#1E1E1E",
      "travel-silver": "#656568",
      "travel-silver-background": "#EAE8E8",
    },
  },
  plugins: [],
};
