import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
      },
    },
  },
  plugins: [],
};
