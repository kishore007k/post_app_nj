module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		color: {
			lightBorder: "var(--lightBorder)",
			black: "var(--black)",
			lightGray: "var(--lightGray)",
			darkGray: "var(--darkGray)",
			border: "var(--border)",
		},
		fontFamily: {
			sourceCodePro: ["Source Code Pro", "monospace"],
			rampart: ["Rampart One", "cursive"],
			klee: ["Klee One", "cursive"],
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			keyframes: {
				slideIn: {
					"0%": {
						transform: "translateX(50%)",
						opacity: "0",
					},
					"50%": {
						transform: "translateX(25%)",
						opacity: "0.7",
					},
					"100%": {
						transform: "translateX(0%)",
						opacity: "1",
					},
				},
				slideOut: {
					"100%": {
						transform: "translateX(0%)",
						opacity: "0",
					},
					"50%": {
						transform: "translateX(25%)",
						opacity: "0.7",
					},
					"0%": {
						transform: "translateX(50%)",
						opacity: "1",
					},
				},
			},
			animation: {
				notificationOpen: "slideIn 3s linear ease-in-out",
				notificationClose: "slideOut 3s linear ease-in-out",
			},
			textColor: {
				skin: {
					base: "var(--black)",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar"), require("@tailwindcss/typography")],
};
