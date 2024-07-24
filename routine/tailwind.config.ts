import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px rgba(255, 255, 255, 0.1)', // 흰색 그림자
        'custom-hover': '0 6px 12px rgba(255, 255, 255, 0.3)', // 호버 시 더 강한 흰색 그림자
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dung: ["DungGeunMo"],
      },
    },
  },
  plugins: [],
};
export default config;
