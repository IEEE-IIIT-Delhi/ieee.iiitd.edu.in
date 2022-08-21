/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            //fonts
            fontFamily: {
                sofia: ["Sofia-pro", "sans-serif"],
            },
        },
    },
    plugins: [],
};
