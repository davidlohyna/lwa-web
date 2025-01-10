const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f4f4f5",
      blue: "#15243D", // logo blue
      red: "#96271F", // logo red
      zinc: colors.zinc,
      slate: colors.slate,
      green: colors.emerald,
      yellow: colors.amber,
      sky: colors.sky,
    },
    extend: {},
  },
  plugins: [],
};
