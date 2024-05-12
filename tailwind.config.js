import { colors, nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        'rose': "#FEE7E6",
        'mint': '#ECFDF1',
        'yellow': '#F9EAC2',
        'orange': '#FFD898'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
//adding new colors
module.exports = {
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],

  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        cyan: {
          50: "#F0FCFF",
          800: "#0E8AAA",
          900: "#053B48",
        }
      },
    },
  },
};
