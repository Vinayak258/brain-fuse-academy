export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#233554'
        },
        gold: {
          300: '#FDE047',
          400: '#FACC15',
          500: '#D4AF37',
          600: '#B8962E'
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(to bottom, #0A192F, #112240)'
      }
    },
  },
  plugins: [],
}
