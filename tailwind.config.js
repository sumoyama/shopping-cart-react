/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'fundo-login': "url('./src/img/fundo-login.avif')",
      }
    },
  },
  plugins: [],
}

