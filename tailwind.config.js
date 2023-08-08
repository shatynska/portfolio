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
          400: "#BBBBBB",
          500: "#888888",
          600: "#606060",
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
        288: "72rem",
      },
      minHeight: {
        16: "4rem",
        24: "6rem",
        128: "32rem",
      },
      maxWidth: {
        96: "24rem",
        112: "28rem",
        288: "72rem",
      },
      minWidth: {
        96: "24rem",
      },
    },
    screens: {
      md: "768px",
      lg: "1152px",
    },
  },
  plugins: [],
};
