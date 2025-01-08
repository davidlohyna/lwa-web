/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': {
        light: '#357ABD',
        DEFAULT: '#2C3E50',
        dark: '#15243D', // logo blue
      },
      'red': {
        light: '#E3B3AC', // pink
        DEFAULT: '#96271F', // logo red
        dark: '#7D1D17', // logo red-dark
      },
      'grey': '#C5BDBA', // logo grey
      'grey-light': '#EDEDED',
      'beige': '#F5EFEA',
      'green': '#A8D5BA',
      'orange': '#C49A6C',
    },
    extend: {},
  },
  plugins: [],
}
