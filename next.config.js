/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  theme: {
    extend: {
      colors: {
        primary: "#fee7e6",
        secondary: "#ecfdf1",
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
      },
    },
  },
};

module.exports = nextConfig;
