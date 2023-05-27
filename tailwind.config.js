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
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
          300: "#F0F0F0",
          400: "#EBEBEB",
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
