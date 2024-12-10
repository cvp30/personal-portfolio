/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import animated from "tailwindcss-animated"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing: {
				'88': '22rem',
				'100': '25rem',
				'112': '28rem',
				'124': '31rem',
				'184': '46rem',
				'228': '57rem',
			},
			dropShadow: {
				'text': '0px 0px 4px #f2f2f2',
				'title': '0px 0px 4px #ff6400'
			},
			animation: {
				'border-spin': 'border-spin 1.5s linear infinite',
				"loop-scroll": "loop-scroll 30s linear infinite",
			},
			keyframes: {
				'border-spin': {
					from: { '--angle': '0deg' },
					to: { '--angle': '360deg' },
				},
				"loop-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				}
			},
			fontFamily: {
				sans: ['"Syne Variable"', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				darkBlue: '#13171C',
				base: '#f2f2f2',
				accent: '#ff6400',
				neutral: '#393e46',
				background: '#0b0e11',

				secondary: '#470000',
				// accent: '#616161',
				foreground: '#f2f2f2'
			}
		},
	},
	plugins: [animated],
}
