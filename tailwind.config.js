/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dream: {
          bg: '#EAF5FF',
          bgSecondary: '#F5FAFF',
          baby: '#D6EBFF',
          pastel: '#B8D8F5',
          primary: '#80B9E8',
          deep: '#477FAF',
          heading: '#35658F',
          body: '#60778C',
          card: '#FFFFFF',
          lavender: '#F0F4FF',
        },
      },
      fontFamily: {
        romantic: ['"Dancing Script"', 'cursive', 'serif'],
        handwritten: ['"Caveat"', 'cursive', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Quicksand"', '"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-blue': '0 10px 30px -5px rgba(86, 145, 190, 0.14), 0 4px 12px -2px rgba(86, 145, 190, 0.08)',
        'soft-glow': '0 0 25px rgba(128, 185, 232, 0.35)',
        'btn-shadow': '0 8px 20px -3px rgba(71, 127, 175, 0.28), 0 4px 8px -2px rgba(71, 127, 175, 0.16)',
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-medium': 'floatMedium 4.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'drift': 'drift 18s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1.5deg)' },
        },
        floatMedium: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.85', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        drift: {
          '0%': { transform: 'translateX(-5%)' },
          '50%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(-5%)' },
        },
      },
    },
  },
  plugins: [],
}

