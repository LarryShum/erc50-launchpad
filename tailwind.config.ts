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
    },
  },
  plugins: [],
};
export default config;
