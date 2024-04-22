import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deep_green: "#057003",
        yellow_green: "#c8ea8e",
        acid_green: "#bac304",
        army_green: "#395111",
        vampire_black: "#021b02",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      keyframes: {
        opacity: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeUp: {
          "0%": {
            transform: "translateY(80px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        opacity: "opacity 0.1s",
        "fade-up": "fadeUp 0.2s",
      },
    },
  },
  plugins: [],
};
export default config;
