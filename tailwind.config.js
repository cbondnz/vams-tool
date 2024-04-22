/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg: "url('/background.svg')",
        bgHalf: "url('/background-half-opacity.svg')",
      },
      colors: {
        primary: "black",
        secondary: "#5DC6C5",
        bgAccentDark: "#fce2ec",
        bgAccentLight: "#ffeff5",
        bgAccentHover: "#B51742",
        secondaryHover: "#007aa7",
        link: "#0000ff",
        accent: "#EE1953",
        error: "#ff0000",
        lightGray: "rgb(148, 148, 148)",
      },
      borderRadius: {
        full: "60px",
        half: "30px",
      },
      fontSize: {
        "4.5xl": "44px",
      },
      backgroundSize: {
        half: "50%",
        quarter: "25%",
      },
      gridTemplateColumns: {
        radio: "1em auto",
        text: "4em auto",
      },
      width: {
        75: "300px",
        50: "200px",
      },
      height: {
        75: "300px",
        50: "200px",
      },
      boxShadow: {
        box: "10px 10px 5px rgba(78, 78, 78, 0.5)",
      },
      padding: {
        62: "254px",
      },
      maxWidth: {
        "8xl": "1600px",
      },
    },
  },
  plugins: [],
};
