import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "#4F4F4F",
        Stroke: "#79A1BD",
        BtnBG: "#D6F1FF",
        BlueBG: "#F6FCFF",
        GreyBG: "#F7F8F9",
        White: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
