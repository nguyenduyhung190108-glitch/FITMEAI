/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f6f6f4',
          100: '#e9e8e4',
          200: '#d3d1ca',
          300: '#b1aea3',
          400: '#8c887c',
          500: '#6f6c61',
          600: '#575549',
          700: '#403e36',
          800: '#26251f',
          900: '#16150f',
          950: '#0c0b07',
        },
        rose: {
          50: '#fdf3f3',
          100: '#fce5e5',
          200: '#f9d0d0',
          300: '#f3aeae',
          400: '#ea7e7e',
          500: '#dd5454',
          600: '#c93636',
          700: '#a82828',
          800: '#8a2424',
          900: '#722222',
          950: '#3f0e0e',
        },
        sand: {
          50: '#faf8f3',
          100: '#f3eee0',
          200: '#e6dcc1',
          300: '#d6c598',
          400: '#c5a96d',
          500: '#b89352',
          600: '#a87e44',
          700: '#8b6438',
          800: '#735234',
          900: '#5f442e',
          950: '#342318',
        },
      },
      boxShadow: {
        soft: '0 2px 20px -4px rgba(22, 21, 15, 0.08)',
        card: '0 8px 40px -12px rgba(22, 21, 15, 0.18)',
        glow: '0 0 40px -8px rgba(184, 147, 82, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
