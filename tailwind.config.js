/** @type {import('tailwindcss').Config} */
export default {
 // tailwind.config.js
content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#08011D",          // Phantom Blue
        secondary: "#F4F6F8",        // Light Gray (card bg)
        background: "#FFFFFF",       // White
        text: {
          primary: "#2B2B2B",        // Charcoal
          muted: "#6B6B6B",          // Muted gray
        },
        accent: {
          red: "#FF3B30",            // Bright red CTA (example)
          green: "#00C48C",          // Pantone green (example)
        },
      },
        animation: {
        'gradient-move': 'gradientMove 3s ease infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

