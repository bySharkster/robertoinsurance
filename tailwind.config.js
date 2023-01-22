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
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#c0c607",
                
        "secondary": "#1ba5b5",
                
        "accent": "#078e4a",
                
        "neutral": "#1D1924",
                
        "base-100": "#F9F9FB",
                
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