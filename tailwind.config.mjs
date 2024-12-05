import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Space Grotesk Variable", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          DEFAULT: "#ACD0F4",
          darker: "#1B73CB",
        },
      },
    },
  },
  plugins: [],
};
