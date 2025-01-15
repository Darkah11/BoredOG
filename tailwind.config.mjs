/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          5: "#F7B581",
          10: "#864D07",
        },
        background: {
          10: "#3F2A1A"
        },
        foreground: {
          10: "#FFFFFF"
        },
      },
    },
  },
  plugins: [],
};
