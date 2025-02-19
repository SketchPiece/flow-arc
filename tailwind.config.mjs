import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";
import tailwindTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "110ch", // add required value here
          },
        },
      },
      // TODO: remove this
      // > why past me?
      boxShadow: {
        straight: "0px 6px 0px 0px rgba(0, 0, 0, 1)",
        "straight-reduced": "0px 6px 10px 0px rgba(0, 0, 0, 1)",
      },
      fontSize: {
        "5xl": "40px",
      },
      margin: {
        25: "100px",
      },
      padding: {
        13: "52px",
      },
      container: {
        screens: {
          "2xl": "1360px",
        },
        padding: "2.5rem",
      },
      borderRadius: {
        "smooth-large": "45px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        serif: ["SpaceGrotesk", ...defaultTheme.fontFamily.serif],
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
        gray: {
          DEFAULT: "#898989",
          darkest: "#000000",
          darker: "#191A23",
          dark: "#333333",
          lighter: "#F3F3F3",
          light: "#FFFFFF",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate, tailwindTypography],
};
