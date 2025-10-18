/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // เพิ่มส่วนนี้เข้าไป
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 0.2 },
        }
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}