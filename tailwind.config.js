/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'tamil': ['Noto Sans Tamil', 'sans-serif'],
      },
      colors: {
        'baby-pink': '#FFB6C1',
        'baby-blue': '#87CEEB',
        'baby-yellow': '#FFFFE0',
        'baby-green': '#98FB98',
        'baby-purple': '#DDA0DD',
        'baby-orange': '#FFDAB9',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 182, 193, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 182, 193, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
