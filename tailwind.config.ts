import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7C7B", // deep teal
          light: "#4DA8A7",
          dark: "#0A5C5B",
        },
        secondary: {
          DEFAULT: "#FF6B5B", // warm coral
          light: "#FF9284",
          dark: "#E24E3F",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
