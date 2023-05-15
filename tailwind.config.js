/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'dirty-black': '#2D2D2D',
                'logo-black': '#2D2E2D',
            },
            fontFamily: {
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
                'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
