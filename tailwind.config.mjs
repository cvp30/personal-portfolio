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
				'border-spin': 'border-spin 10s linear infinite alternate',
				'stroke-dash': 'stroke-dash 10s ease-in-out infinite alternate',
				'float': 'float 4s ease-in-out infinite',
				"loop-scroll": "loop-scroll 30s linear infinite",
			},
			keyframes: {
				'border-spin': {
					from: { transform: "rotate(120deg)" },
					to: { transform: "rotate(360deg)" },
				},
				'stroke-dash': {
					'0%': { strokeDasharray: '15 120 25 25' },
					'50%': { strokeDasharray: '16 25 92 72' },
					'100%': { strokeDasharray: '4 250 22 22' },
				},
				'float': {
					'0%,100%': {
						transform: "translateY(0)"
					},
					'50%': {
						transform: "translateY(-10px)"
					}
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
			}
		},
	},
	plugins: [animated],
}
