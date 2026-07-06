/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        'eb-blue': '#4353ff',
        'eb-dark': '#2b2b2b',
        'eb-grey': '#444444',
      },
      fontFamily: {
        sans: ['geomanist', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cardo', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
