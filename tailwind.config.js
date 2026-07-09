/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0B6E4F",
          light: "#E4F1EC",
          dark: "#084F39",
        },
        ink: "#1C2321",
        bg: "#F7F6F3",
        clay: {
          DEFAULT: "#C97A3D",
          light: "#FBEEE1",
        },
        danger: {
          DEFAULT: "#B3432B",
          light: "#FBEAE6",
        },
        border: "#E4E1DA",
        muted: "#7A7568",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        card: "10px",
      },
    },
  },
  plugins: [],
};
