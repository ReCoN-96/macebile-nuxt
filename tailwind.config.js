/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      display: ['Oswald'],
      body: ['Work Sans'],
    },
    colors: {
      primary: '#a22c0c',
      secondary: '#2c5bb3',
      tertiary: '#627576',
      white: '#ffffff',
      black: '#000000',
    },
  },
  plugins: [],
}
