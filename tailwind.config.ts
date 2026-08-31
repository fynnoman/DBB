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
        // warm beige / ivory base
        ivory: {
          50: "#FBF7EE",
          100: "#F6EFDF",
          200: "#EFE4C9",
          300: "#E4D2A9",
          400: "#D6BC88",
        },
        // cozy deep forest green
        forest: {
          50: "#EEF2EC",
          100: "#D6DFD1",
          200: "#A7B7A0",
          300: "#75896C",
          400: "#4C6244",
          500: "#334A2E",
          600: "#243922",
          700: "#1B2C1B",
          800: "#132014",
          900: "#0C160D",
        },
        // muted antique gold accent
        gold: {
          50: "#FBF3DF",
          100: "#F1E1B0",
          200: "#E4CB84",
          300: "#D2B15E",
          400: "#B8894E",
          500: "#9C7239",
          600: "#7E5A29",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "brand-tight": "-0.02em",
        "brand-wide": "0.24em",
      },
      boxShadow: {
        glass:
          "0 1px 0 0 rgba(255,255,255,0.35) inset, 0 12px 40px -12px rgba(19,32,20,0.25), 0 0 0 1px rgba(19,32,20,0.06)",
        glassDark:
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 60px -20px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
        gold: "0 10px 30px -10px rgba(184,137,78,0.55)",
      },
      backdropBlur: {
        xs: "6px",
      },
      transitionTimingFunction: {
        cozy: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
