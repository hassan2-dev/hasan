module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollDown: {
          "0%": { top: "0" },
          "100%": { top: "66%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        scrollDown: "scrollDown 1.5s ease-in-out infinite",
      },
    },
  },
};
