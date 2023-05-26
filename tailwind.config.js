/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.html",
  "./src/**/*.vue",
  "./public/**/*.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      "pastel-blue": "#add6cf",
      "laurel-green": "#9fb693",
      "lemon-meringue": "#f8e8c4",
      "pastel-pink": "#f0af9e",
      "copper-orange": "#e48364",
      "grey-text": "#AFABA8",
      "background-color": "#F9F5F2",
      "small-grey": "#ECEDE8",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    boxShadow: {
      "equal-shadow": "0 0 6px 0 rgba(0, 0, 0, 0.2)",
    },
    borderRadius: {
      "round-shadow": "50px",
      "half-round": "40px",
    },

    
  },
};
export const plugins = [];
