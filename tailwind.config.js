/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Sora is excellent for headings, Outfit for body text
        sans: ['Outfit', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      colors: {
        // The specific neon cyan/blue from the reference
        primary: '#0ea5e9', 
        secondary: '#64748b',
        dark: '#0f172a',
      }
    },
  },
  plugins: [],
}
