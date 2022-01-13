module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "gray-1": "#B2B2B2",
      "gray-2": "#DDDDDD",
      "gray-3": "#D9D9D9",
      "gray-4": "#494949",
      "gray-8": "#292929",
      "red": "#E31E30",
      "white": "#FFFFFF",
    },
    extend: {},
    fontSize: {
      sm: ['12px', {
        lineHeight: '30px',
      }],
    },
    spacing: {
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "6": "24px",
      "7": "28px",
      "9": "36px",
    },
  },
  plugins: [],
}
