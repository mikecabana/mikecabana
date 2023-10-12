import { type Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class' or false
    theme: {
        extend: {
            animation: {
                'bounce-slow': 'bounce 6s infinite',
            },
            colors: {
                'twitter-blue': '#1DA1F2',
                'linkedin-blue': '#2867b2',
                accent: {
                    DEFAULT: '#00CC99',
                    50: '#B3FFEC',
                    100: '#99FFE6',
                    200: '#66FFD9',
                    300: '#33FFCC',
                    400: '#00FFBF',
                    500: '#00CC99',
                    600: '#009973',
                    700: '#00664D',
                    800: '#003326',
                    900: '#000000',
                },
                primary: {
                    DEFAULT: '#001733',
                    50: '#1A81FF',
                    100: '#0073FF',
                    200: '#005CCC',
                    300: '#004599',
                    400: '#002E66',
                    500: '#001733',
                    600: '#000000',
                    700: '#000000',
                    800: '#000000',
                    900: '#000000',
                },
                background: {
                    DEFAULT: '#F3F3F3',
                    50: '#FFFFFF',
                    100: '#FFFFFF',
                    200: '#FFFFFF',
                    300: '#FFFFFF',
                    400: '#FFFFFF',
                    500: '#F3F3F3',
                    600: '#D9D9D9',
                    700: '#C0C0C0',
                    800: '#A6A6A6',
                    900: '#8D8D8D',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
