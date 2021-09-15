module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class' or false
    theme: {
        extend: {
            colors: {
                'twitter-blue': '#1DA1F2',
                'linkedin-blue': '#2867b2',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
