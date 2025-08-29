
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./global.css"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    corePlugins: {
      container: false,
    },
    // screens: {
    //   sm: "320px",
    //   md: "375px",
    //   lg: "480px",
    //   xl: "575px",
    // },
    extend: {
      colors: {
        primary: "#ff6347",
        secondary: "#008000",
        white: "#FFFFFF",
        black: "#1C2434",
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
      fontSize: {
        "title-1": ["44px", "56px"],
        "title-2": ["40px", "50px"],
        "title-3": ["36px", "44px"],
        "title-4": ["32px", "40px"],
        "title-5": ["28px", "36px"],
        "title-6": ["26px", "34px"],
        "title-7": ["24px", "30px"],
        "title-8": ["20px", "26px"],
        "title-9": ["18px", "24px"],
        "title-10": ["16px", "22px"],
        "title-11": ["14px", "20px"],
        "title-12": ["12px", "18px"],
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        5: "5",
        4: "4",
        3: "3",
        2: "2",
        1: "1",
      },
      backgroundImage: {
        // video: "url('../images/video/video.png')",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
        card: "0px 1px 3px rgba(0, 0, 0, 0.12)",
        "card-2": "0px 1px 2px rgba(0, 0, 0, 0.05)",
        switcher:
          "0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        1: "0px 1px 3px rgba(0, 0, 0, 0.08)",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
        3: "0px 1px 5px rgba(0, 0, 0, 0.14)",
        4: "0px 4px 10px rgba(0, 0, 0, 0.12)",
        5: "0px 1px 1px rgba(0, 0, 0, 0.15)",
        6: "0px 3px 15px rgba(0, 0, 0, 0.1)",
        7: "-5px 0 0 #313D4A, 5px 0 0 #313D4A",
        8: "1px 0 0 #313D4A, -1px 0 0 #313D4A, 0 1px 0 #313D4A, 0 -1px 0 #313D4A, 0 3px 13px rgb(0 0 0 / 8%)",
      },
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     ".container": {
    //       width: "100%",
    //       margin: "0 auto",
    //       padding: "0 16px",
    //     },
    //   });
    // },
  ],

}



