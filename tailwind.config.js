/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFFFFF",
          200: "#F5F5F5",
          500: "#646464",
          600: "#434343",
          700: "#3A3A3A",
          800: "#303030",
          900: "#222222",
        },
      },
    },
  },
  plugins: [],
};
