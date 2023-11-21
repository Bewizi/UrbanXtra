/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: [{ min: "100px", max: "640px" }],
        md: [{ min: "640px", max: "768px" }],
        lg: [{ min: "768px", max: "1024px" }],
        xl: [{ min: "1025px", max: "1280px" }],
        "2xl": "1281px",
      },
    },
  },
  plugins: [],
};
