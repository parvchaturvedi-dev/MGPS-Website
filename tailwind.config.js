export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      custom: "1075px", // 🔥 important
    },
    extend: {},
  },
  plugins: [],
}