/** @type {import('tailwindcss').Config} */

import forms from "@tailwindcss/forms";

export default {
    content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            sans: ["Noto sans", "system-ui", "sans-serif"],
            display: ["poppins", "system-ui", "sans-serif"],
        },
        extend: {
            colors: {
                gdcgreen: "#017758",
                gdcgreen2: "#22ac87",
                black: "#1a1a1a",
                white: "#ffffff",
            },
        },
    },
    plugins: [forms()],
};
