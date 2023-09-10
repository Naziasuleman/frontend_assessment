/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing: {
        wider: "0.03em",
      },
      boxShadow: {
        "3xl": "0px 6px 20px 0px rgba(140, 151, 164, 0.2)",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontWeight: {
        light: 300,
        medium: 500,
        bold: 700,
      },
      colors: {
        bodybg: "#EEF2F7",
        gray: "#646464",
        lightgray: "#757575",
        grayest: "#C2C2C2",
        blue: "#6590FF",
        red: "#E33E38",
        inputbg: "#F8F9FB",
        purple: "#8344DB",
        lightpurple: "#8344DB1A",
      },
    },
  },
  plugins: [],
};
