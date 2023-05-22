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
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    
  },
};
export const plugins = [];

