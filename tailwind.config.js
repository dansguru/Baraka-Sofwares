/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                orange: {
                    50: '#fff7ed',
                    100: '#ffedd5',
                    200: '#fed7aa',
                    300: '#fdba74',
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                    700: '#c2410c',
                    800: '#9a3412',
                    900: '#7c2d12',
                    950: '#431407',
                },
                black: {
                    900: '#000000',
                    800: '#0a0a0a',
                    700: '#1a1a1a',
                    600: '#2a2a2a',
                }
            },
            animation: {
                'shine': 'shine 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                shine: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                glow: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-barber': 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
            },
            boxShadow: {
                'glow-orange': '0 0 20px rgba(249, 115, 22, 0.5)',
                'glow-orange-lg': '0 0 40px rgba(249, 115, 22, 0.3)',
                'inner-glow': 'inset 0 0 20px rgba(249, 115, 22, 0.1)',
            },
            backdropBlur: {
                xs: '2px',
            },
            borderWidth: {
                '3': '3px',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms',
            },
            scale: {
                '102': '1.02',
                '105': '1.05',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Montserrat', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}