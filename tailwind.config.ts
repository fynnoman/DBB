import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#b79a62",
          50: "#faf4e6",
          100: "#f0e3c1",
          200: "#e2cf9a",
          300: "#d1b878",
          400: "#c2a56a",
          500: "#b79a62",
          600: "#9a8253",
          700: "#7d6a44",
          800: "#5d5033",
          900: "#3e361f",
        },
        cream: {
          DEFAULT: "#fbfaf7",
          50: "#ffffff",
          100: "#fdfcf9",
          200: "#fbfaf7",
          300: "#f6f2e9",
          400: "#efe8d6",
        },
        ink: "#181818",
        muted: "#69645e",
        line: "#e8e1d5",
        forest: "#234f43",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "serif"],
        sans: [
          "var(--font-sans)",
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      letterSpacing: {
        kicker: "0.17em",
        brand: "0.09em",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(0,0,0,.055)",
        header: "0 6px 24px rgba(0,0,0,.035)",
        booking: "0 12px 34px rgba(0,0,0,.10)",
        menu: "0 18px 50px rgba(0,0,0,.10)",
        cardHover: "0 22px 60px -20px rgba(183,154,98,.35)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.22,1,.36,1)",
      },
      keyframes: {
        pulse60: {
          "0%,100%": { transform: "scale(1)", filter: "brightness(1)" },
          "12%": { transform: "scale(1.014)", filter: "brightness(1.04)" },
          "24%": { transform: "scale(1)", filter: "brightness(1)" },
        },
        sweep: {
          from: { transform: "translate3d(0,0,0)" },
          to: { transform: "translate3d(-50%,0,0)" },
        },
        drawIn: {
          from: { strokeDashoffset: "800" },
          to: { strokeDashoffset: "0" },
        },
        floatIn: {
          from: { opacity: "0", transform: "translate3d(0,10px,0)" },
          to: { opacity: "1", transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        pulse60: "pulse60 1s ease-in-out infinite",
        sweep: "sweep 14s linear infinite",
        drawIn: "drawIn 2.4s ease-out forwards",
        floatIn: "floatIn .9s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
