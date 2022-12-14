/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    maxWidth: {
      "1/2": "50%",
      "4/5": "80%",
      1: "100%",
    },
    colors: {
      dark: "#001E22",
      whitesmoke: "#f5f5f5",
      lime: "rgb(54,83,20)",
      from: "#8b508c",
      via: "#6764c7",
      to: "#2b2bc8",
    },
    fontFamily: {
      base: ["Noto Sans Japanese"],
      title: ["Alfa Slab One"],
    },
    fontSize: {
      base: "1.3rem",
      title: "2.3rem",
      small: "1.0rem",
    },
    letterSpacing: {
      normal: "0.1em",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        fadeInSection: "fadeInSection 3s ease-in",
      },
      keyframes: {
        fadeInSection: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
