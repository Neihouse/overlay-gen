const flowbite = require('flowbite/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      colors: {
        pigmentIndigo: '#4A0072',
        navyBlue: '#120078',
        // Add other custom colors here
      },
    },
  },
  plugins: [
    flowbite,
    // ...
  ],
};
