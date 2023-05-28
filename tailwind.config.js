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
          200: "#F8F8F8",
          300: "#F5F5F5",
          400: "#F0F0F0",
          500: "#646464",
          600: "#434343",
          700: "#3A3A3A",
          800: "#303030",
          900: "#222222",
          950: "#111111",
        },
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "48rem",
      },
      minHeight: {
        128: "32rem",
      },
      maxWidth: {
        112: "28rem",
      },
    },
    screens: {
      md: "768px",
      lg: "1152px",
    },
  },
  plugins: [],
};
