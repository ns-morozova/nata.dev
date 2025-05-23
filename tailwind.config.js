/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src//*.{html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                'xs': '400px',
            },
        },
    },
    plugins: [],
};