/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        32: "repeat(32, minmax(0, 1fr))",
        64: "repeat(64, minmax(0, 1fr))",
        128: "repeat(128, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
