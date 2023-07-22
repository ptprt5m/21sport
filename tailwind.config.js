/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '1340px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      },
      animation: {
        'open': 'open 0.2s linear',
      },
      keyframes: {
        open: {
          from: {
            opacity: 0,
            transform: 'scale(0)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1)'
          },
        }
      }
    },
  },
  plugins: [],
}
