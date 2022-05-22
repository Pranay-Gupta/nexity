module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 1s ease-out 1",
      },
      keyframes: {
        fade: {
          "0%": { transform: "translateY(30px) ", opacity: 0 },
          "100%": { transform: "translateY(0px) ", opacity: 100 },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
