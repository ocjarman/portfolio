/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        serif: ['Enriqueta', 'serif'],
      },
      colors: {
        // Text colors that adapt to light/dark mode
        text: 'var(--gray-9)',
        'text-primary': 'var(--gray-12)',
        'text-secondary': 'var(--gray-11)',
        'text-muted': 'var(--gray-10)',
        'text-accent': 'var(--accent-11)',
        'text-destructive': 'var(--red-11)',
        'text-success': 'var(--green-11)',
        'text-warning': 'var(--yellow-11)',
        'text-info': 'var(--blue-11)',
        // Blue accent
        'accent-bg': 'var(--blue-3)',
        'accent-border': 'var(--blue-7)',
        'accent-solid': 'var(--blue-9)',
        'accent-hover': 'var(--blue-10)',
        'accent-contrast': 'var(--blue-12)',
      },
    },
  },
  plugins: [],
};
