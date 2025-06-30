import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}', 
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB703',    // 따뜻한 레몬톤
        accent: '#FAEDCD',     // 포인트 컬러
        dark: '#1A1A1A',       // 다크 모드 배경
        lightGray: '#F5F5F7',  // 밝은 배경
        textPrimary: '#333333',
        textSecondary: '#666666',
      },
      borderRadius: {
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};

export default config;