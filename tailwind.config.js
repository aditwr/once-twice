module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        arapey: ["Arapey", "serif"],
        poiredOne: ["Poiret One", "cursive"],
        viaodaLibre: ["Viaoda Libre", "cursive"],
      },
      keyframes: {
        scroll: {
          "0%": { height: "0" },
          "50%": { height: "100%", transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        blur: {
          "0%": { "backdrop-filter": "blur(16px)" },
          "30%": { "backdrop-filter": "blur(0)" },
          "60%": { "backdrop-filter": "blur(0)" },
          "100%": { "backdrop-filter": "blur(24px)" },
        },
        downOpacity: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        scroll: "scroll 1.2s linear 0s infinite",
        blur: "blur 3.6s ease-in",
        downOpacity: "downOpacity .5s ease-in",
      },
    },
  },
  plugins: [],
};
