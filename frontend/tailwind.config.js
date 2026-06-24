/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbfaf4',
          100: '#f7f4e5',
          200: '#eee9c4',
          300: '#e5dda0',
          400: '#e2d689',
          500: '#e1cf7c',
          600: '#cab557',
          700: '#b39b40',
          800: '#9c832c',
          900: '#81691c',
        },
        emerald: {
          50: 'rgba(29, 70, 49, 0.06)',
          100: '#dbede1',
          200: '#b7d8c4',
          300: '#90bf9e',
          400: '#66a378',
          500: '#3d7a54',
          600: '#316344',
          700: '#274f37',
          800: '#1d4631',
          900: '#143022',
        },
        clinic: {
          white: '#FFFFFF',
          cream: '#f9f1e7',
          dark: '#121f18',
          gray: '#718279',
          light: '#f5eae0',
        },
      },
      fontFamily: {
        serif: ['"Google Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Google Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'hair-grow': 'hairGrow 3s ease-out forwards',
        'particle': 'particle 8s ease-in-out infinite',
        'counter': 'counter 2s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(225, 207, 124, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(225, 207, 124, 0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hairGrow: {
          '0%': { height: '0%', opacity: '0' },
          '100%': { height: '100%', opacity: '1' },
        },
        particle: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0.3' },
          '25%': { transform: 'translate(10px, -20px) rotate(90deg)', opacity: '0.6' },
          '50%': { transform: 'translate(-5px, -40px) rotate(180deg)', opacity: '0.3' },
          '75%': { transform: 'translate(15px, -20px) rotate(270deg)', opacity: '0.6' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e1cf7c 0%, #bda54d 50%, #e1cf7c 100%)',
        'emerald-gradient': 'linear-gradient(135deg, #1d4631 0%, #153223 50%, #10271b 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 30px rgba(225, 207, 124, 0.15)',
        'gold-lg': '0 10px 60px rgba(225, 207, 124, 0.2)',
        'emerald': '0 4px 30px rgba(29, 70, 49, 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'premium': '0 10px 40px -12px rgba(29, 70, 49, 0.08)',
      },
      borderRadius: {
        sm: '8px',
        md: '14px',
        lg: '28px',
        xl: '28px',
        '2xl': '28px',
      },
    },
  },
  plugins: [],
};
