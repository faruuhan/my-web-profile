/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts,pug}",
    "./layouts/**/*.vue",
    "./pages/**/*.{vue,pug}",
    "./sources/**/*.{vue,pug}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
