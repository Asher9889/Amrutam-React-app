/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nexa: ["Nexa Light"],
        dinPro: ["DINPro-Bold"],
        dinProMedium: ["DINPro-Medium"],
        dinProRegular: ["DINPro-Regular"],
        inkNut: ["Inknut Antiqua Regular"],
        nunito: ["Nunito-Bold"],
        nunitoSemi: ["Nunito SemiBold"],
        mixed: ["Regular"],
        dmSans: ["DM Sans Bold"],
        dmSansRegular: ["DM Sans Regular"],
        gotham: ["Gotham Medium"]
      }
    },
    
  },
  plugins: [],
}

