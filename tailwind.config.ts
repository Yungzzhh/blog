import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   "gradient-start": "#11998e",
      //   "gradient-end": "#38ef7d",
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-linear":
      //     "linear-gradient(to right, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwindcss-textshadow"),
  ],
};
export default config;
