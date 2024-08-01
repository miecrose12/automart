/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        secondary: "#2E2E2E"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1Rem",
        }
      }
    },
  },
  plugins: [],
}

