/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "meu-vermelho": "#FF0000",
      },
    },
  },
  plugins: [],
};
