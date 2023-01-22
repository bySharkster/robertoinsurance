/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        "wa": "#25D366",

        "fb":"#39569c",

        "ig":"#C13584",

        "tprimary":"#e6efe9",

        "tsecondary":"#111",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#005A7C",
                
        "secondary": "#00B7C9",
                
        "accent": "#013148",
                
        "neutral": "#8f8389",
                
        "base-100": "#e6efe9",
                
        "info": "#92A9ED",
                
        "success": "#198642",
                
        "warning": "#C19F06",
                
        "error": "#F94D6F",


                },
      },
    ],

  },
  plugins: [require("daisyui")],
}