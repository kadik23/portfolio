import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'lg:order-1',
    'lg:order-2',
    'lg:order-3',
    'lg:order-4',
    'lg:order-5',
    'lg:order-6',
    'lg:order-7',
    'lg:order-8',
    'lg:order-9',
    'lg:order-10',
    'lg:order-11',
    'lg:order-12',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "dark-gray": "#2D2E32",
        "light-gray": "#54545C",
        "green": "#11F7D0",
      }
    },
  },
  plugins: [],
};

export default config;
