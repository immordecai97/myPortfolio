/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  },
  plugins: [],
}

