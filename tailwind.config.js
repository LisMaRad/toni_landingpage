/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'orange-accent': '#fc7d22',
      'primary-color-dm': '#D9FBDE',
      'primary-color-lm': '#0A585C',
      'white': '#fff',
      'background-dm': '#172621',
      'black': '#000',
    },
    fontFamily: {
      atkinsonRegular: 'Atkinson Hyperlegible, sans-serif',
      generalSansSemi: 'General Sans, sans-serif',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        'button': '100px',
      }
    }
  },
  plugins: [],
}