module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#0A192F", secondary: "#E6F1FF" },
      borderRadius: {
        button: "8px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        full: "9999px",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        pacifico: ["'Pacifico'", "cursive"],
      },
    },
  },
  plugins: [],
};
