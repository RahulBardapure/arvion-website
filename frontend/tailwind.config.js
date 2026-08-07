/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070B14',
          900: '#0A1220',
          800: '#121A2B',
          700: '#1C2740',
          600: '#2A3654',
          500: '#4A5672',
          400: '#7B849C',
          300: '#A8B0C0',
          200: '#D4D8E2',
          100: '#EBEEF4',
          50: '#F6F7FA',
        },
        brand: {
          950: '#1A0F3D',
          900: '#2A1A5E',
          800: '#3B2A8A',
          700: '#4C35B0',
          600: '#5B3CC4',
          500: '#6E4AE2',
          400: '#8B6CF0',
          300: '#B09AF5',
          200: '#D4C8FA',
          100: '#ECE6FD',
          50: '#F6F3FF',
        },
        indigo: {
          600: '#3D4FE0',
          500: '#4F5FE8',
          400: '#7280F0',
        },
        cyan: {
          400: '#5BC8E8',
          300: '#8DD9F0',
          200: '#C5ECF7',
          100: '#E8F7FC',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#FAFBFF',
          muted: '#F4F2FB',
          lavender: '#EEEDF8',
        },
        success: {
          DEFAULT: '#059669',
          soft: '#ECFDF5',
        },
        warning: {
          DEFAULT: '#D97706',
          soft: '#FFFBEB',
        },
        danger: {
          DEFAULT: '#E11D48',
          soft: '#FFF1F2',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.25rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
        'display-lg': ['3.25rem', { lineHeight: '1.08', letterSpacing: '-0.035em', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.12', letterSpacing: '-0.03em', fontWeight: '650' }],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(91, 60, 196, 0.08), 0 18px 50px -20px rgba(61, 79, 224, 0.35)',
        elev: '0 1px 1px rgba(10,18,32,0.04), 0 8px 24px -8px rgba(10,18,32,0.12)',
        card: '0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 40px -18px rgba(26,15,61,0.22)',
        soft: '0 4px 24px -10px rgba(10,18,32,0.1)',
        glass: '0 8px 32px rgba(10,18,32,0.08)',
      },
      backgroundImage: {
        'mesh-hero':
          'radial-gradient(ellipse 70% 55% at 75% 15%, rgba(110, 74, 226, 0.14), transparent 55%), radial-gradient(ellipse 50% 45% at 10% 70%, rgba(91, 200, 232, 0.1), transparent 50%), radial-gradient(ellipse 40% 35% at 50% 100%, rgba(61, 79, 224, 0.06), transparent 55%)',
        'mesh-dark':
          'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(110, 74, 226, 0.28), transparent 55%), radial-gradient(ellipse 45% 40% at 15% 80%, rgba(91, 200, 232, 0.12), transparent 50%)',
        'btn-primary': 'linear-gradient(135deg, #5B3CC4 0%, #3D4FE0 100%)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
        spring: 'cubic-bezier(0.34, 1.3, 0.64, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.5s ease both',
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
