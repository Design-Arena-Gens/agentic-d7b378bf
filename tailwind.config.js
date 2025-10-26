/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff4d4d',
        secondary: '#ffad33',
        dark: '#1a1a1a',
        light: '#fff7f0'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      boxShadow: {
        glow: '0 25px 50px -12px rgba(255, 77, 77, 0.35)'
      }
    }
  },
  plugins: []
};
