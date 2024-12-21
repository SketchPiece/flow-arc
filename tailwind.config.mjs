import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "5xl": "40px",
      },
      margin: {
        25: "100px",
      },
      borderRadius: {
        "smooth-large": "45px",
      },
      screens: {
        xs: { max: "374px" },
        sm: "375px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        serif: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          DEFAULT: "#ACD0F4",
          darker: "#1B73CB",
        },
        gray: {
          dark: "#333333",
          obsidian: "#191A23",
        },
        grey: {
          DEFAULT: "#898989",
          darkest: "#000000",
          darker: "#191A23",
          dark: "#333333",
          lighter: "#F3F3F3",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
