/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#b8860b", // Dark Gold
          dark: "#996515",    // Darker Gold
          light: "#d4af37"    // Light Gold
        },
        secondary: {
          DEFAULT: "#1e3a8a", // Deep Navy Blue
          light: "#3b82f6"    // Lighter Blue
        },
        accent: "#c0392b",    // Rich Red
        neutral: {
          100: "#f8fafc",
          200: "#e2e8f0",
          800: "#1e293b",
          900: "#0f172a"
        },
        crypto: {
          bitcoin: "#f7931a",
          ethereum: "#627eea",
          binance: "#f3ba2f",
          forex: "#2c3e50"
        },
        trader: {
          profit: "#16a34a",   // Green for profits
          loss: "#dc2626",     // Red for losses
          neutral: "#6b7280"   // Gray for neutral
        }
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["Roboto Mono", "monospace"]
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(to right, #b8860b, #d4af37, #b8860b)',
        'blue-gradient': 'linear-gradient(to right, #1e3a8a, #3b82f6, #1e3a8a)',
        'hero-pattern': 'none',
        'trader-pattern': 'none'
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(184, 134, 11, 0.39)',
        'gold-hover': '0 6px 20px rgba(184, 134, 11, 0.5)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px -5px rgba(0, 0, 0, 0.2)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
