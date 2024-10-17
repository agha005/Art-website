import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(-20%)" },
          "50%": { transform: "translateY(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        bounce: "bounce 1s ease-in-out",
        spin: "spin 1s linear infinite",
      },
      width: {
        "custom-2/3": "66.666667%", // Example for 2/3 width
        "custom-1/3": "33.333333%", // Example for 1/3 width
        "custom-full": "100%", // Example for full width
      },
      screens: {
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x Extra large screens
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
