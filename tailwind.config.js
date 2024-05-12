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
        'rose': "#FEE7E6",
        'mint': '#ECFDF1',
        'yellow': '#F9EAC2',
        'Orange': '#FFD898',
        'cyan': '#F0FCFF',
        'cyanDark': '#0E8AAA',

      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}