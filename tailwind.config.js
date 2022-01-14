module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "black": "#000000",
      "blue": "#EDF6FC",
      "gray": {
        "1": "#B2B2B2",
        "2": "#DDDDDD",
        "3": "#D9D9D9",
        "300": "#C3C3C2",
        "4": "#494949",
        "8": "#292929",
      },
      "green": "#08AA5E",
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
      "0": "0px",
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "12": "48px",
    },
  },
  plugins: [],
}
