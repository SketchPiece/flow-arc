import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
  	extend: {
  		container: {
  			screens: {
  				'2xl': '1360px'
  			},
  			padding: '2.5rem'
  		},
  		borderRadius: {
  			'smooth-large': '45px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		screens: {
  			xs: {
  				max: '374px'
  			},
  			sm: '375px',
  			md: '768px',
  			lg: '1024px'
  		},
  		fontFamily: {
  			serif: [
  				'Space Grotesk Variable',
                    ...defaultTheme.fontFamily.serif
                ]
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#ACD0F4',
  				darker: '#1B73CB'
  			},
  			gray: {
  				dark: '#333333',
  				obsidian: '#191A23'
  			},
  			grey: {
  				DEFAULT: '#898989',
  				darkest: '#000000',
  				darker: '#191A23',
  				dark: '#333333',
  				lighter: '#F3F3F3',
  				light: '#FFFFFF'
  			}
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [tailwindAnimate],
};
