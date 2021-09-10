module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			 colors: {
				'twitter-blue': '#1DA1F2',
				'linkedin-blue': '#2867b2'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
