/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightAccent: "#F3FCFF",
        mediumAccent: "#2898FF",
        darkAccent: "#0C263E",
        statement: "#FF0000",
      },
      fontFamily: {
        ClashGrotesk: ["var(--font-clash)"],
      },
    },
  },
  plugins: [],
};
