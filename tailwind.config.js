/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New calm cheerful color palette
        'muted-purple': '#635B86',
        'dusty-blue': '#7295A5',
        'soft-rose': '#C17C94',
        'warm-blush': '#FCD1B4',
        'pure-white': '#FFFFFF',
        
        // Enhanced variations
        'muted-purple-light': '#7A7299',
        'muted-purple-dark': '#4D4768',
        'dusty-blue-light': '#8BAAB8',
        'dusty-blue-dark': '#5A7684',
        'soft-rose-light': '#D493A9',
        'soft-rose-dark': '#A6657B',
        'warm-blush-light': '#FFE4D1',
        'warm-blush-dark': '#F9BE97',
        
        // Keep primary colors for compatibility
        primary: {
          50: '#F5F3F7',
          100: '#E6E4ED',
          200: '#CBC6DB',
          300: '#B1A9C9',
          400: '#968BB7',
          500: '#635B86',
          600: '#544D72',
          700: '#46405F',
          800: '#37324C',
          900: '#292538',
        },
        secondary: {
          50: '#F1F6F8',
          100: '#E3EDF1',
          200: '#C6DBE3',
          300: '#AAC9D5',
          400: '#8DB7C7',
          500: '#7295A5',
          600: '#60818F',
          700: '#506B78',
          800: '#405660',
          900: '#304048',
        },
        accent: {
          50: '#F9ECF0',
          100: '#F3D9E1',
          200: '#E7B3C3',
          300: '#D88EA5',
          400: '#CF8A9E',
          500: '#C17C94',
          600: '#A6657B',
          700: '#8B5367',
          800: '#704252',
          900: '#55313E',
        },
        neutral: {
          50: '#FEF5EF',
          100: '#FEEADE',
          200: '#FDD5BE',
          300: '#FCD1B4',
          400: '#F9BE97',
          500: '#F7AB7A',
          600: '#F4985D',
          700: '#F08540',
          800: '#ED7223',
          900: '#D65E11',
        }
      },
      fontFamily: {
        'display': ['Comfortaa', 'cursive'],
        'body': ['Work Sans', 'sans-serif'],
        'sans': ['Work Sans', 'sans-serif'], // Default sans-serif
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pop': 'pop 0.3s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(99, 91, 134, 0.15)',
        'soft-lg': '0 8px 30px rgba(99, 91, 134, 0.2)',
        'rose': '0 4px 20px rgba(193, 124, 148, 0.15)',
        'rose-lg': '0 8px 30px rgba(193, 124, 148, 0.2)',
        'blue': '0 4px 20px rgba(114, 149, 165, 0.15)',
        'blue-lg': '0 8px 30px rgba(114, 149, 165, 0.2)',
        'blush': '0 4px 20px rgba(252, 209, 180, 0.15)',
        'blush-lg': '0 8px 30px rgba(252, 209, 180, 0.2)',
      },
    },
  },
  plugins: [],
}