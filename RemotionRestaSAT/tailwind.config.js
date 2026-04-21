/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // RestaSAT colors
        'restasat-blue': '#0056b3',
        'restasat-orange': '#FF6B35',
        // Limpy colors (extracted from HTML)
        'limpy-green': '#A1B318',
        'limpy-indigo': '#6366F1',
        'limpy-purple': '#9333EA',
      },
      fontFamily: {
        'display': ['Outfit', 'Playfair Display', 'system-ui', 'serif'],
        'body': ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
