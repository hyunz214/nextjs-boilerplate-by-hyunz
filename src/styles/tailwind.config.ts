import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAEDCD",    // 따뜻한 레몬톤
        accent: "#FFB703",     // 포인트 컬러
        dark: "#1A1A1A",       // 다크 모드 배경
        lightGray: "#F5F5F7",  // 밝은 배경
        textPrimary: "#333333",
        textSecondary: "#666666",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.06)",
      },
      gridTemplateColumns: {
        "masonry": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};

export default config;