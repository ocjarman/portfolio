/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'serif': ['Enriqueta', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#000000',
          hover: '#333333',
        },
        background: '#ffffff',
      },
    },
  },
  plugins: [],
}
