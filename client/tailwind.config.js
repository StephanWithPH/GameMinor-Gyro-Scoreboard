/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            // Add custom colors here
            colors: {
                gyroblue: '#5cf3b4',
                gyropurple: '#6D2C91'
            },
            fontFamily: {
                sans: ['"Moby"', 'sans-serif']
            }
        },
        plugins: [],
    }
};
