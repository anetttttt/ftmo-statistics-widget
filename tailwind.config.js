/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Figma colors naming
      colors: {
        content: {
          primary: '#262729',
          secondary: '#36373B',
          tertiary: '#737A86',
        },
        bcg: {
          primary: '#F4F4F4',
          secondary: '#FFFFFF',
        },
        border: {
          primary: '#EAEAEA',
          secondary: '#EAEAEA',
          tertiary: '#9B9C9D',
        },
        dark: {
          content: {
            primary: '#FFFFFF',
            secondary: '#E9E9E9',
            tertiary: '#C1C7D3',
          },
          bcg: {
            primary: '#1E1E1E',
            secondary: '#262729',
          },
          border: {
            primary: '#36373B',
            secondary: '#36373B',
            tertiary: '#535456'
          },
        },
        primary: {
          DEFAULT: '#0781FE',
          10: '#0781FE1A',
        },
        success: {
          DEFAULT: '#03C7B4',
          10: '#03C7B41A',
        },
        danger: {
          DEFAULT: '#FF3648',
          10: '#FF36481A',
        },
      },
    },
  },
  plugins: [],
};
