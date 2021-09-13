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
