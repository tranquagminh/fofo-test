/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'foso-green': '#4CD3A4', // Primary green color seen in the FOSO logo
        'foso-blue': '#2864ED',  // Blue color from the community section
        'foso-dark': '#333333',  // Dark text color
        'foso-gray': '#F5F5F5',  // Light gray background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'foso-gradient': 'radial-gradient(circle, #54ABB1 0%, #54ABB1 40%, #85EEB3 71%, #54ABB1 100%)'
      }
    },
  },
  plugins: [],
}