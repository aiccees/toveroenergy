/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgwhite: "#ffffff",
        btn: "#C10000",
        ltgreentext: "#40B76F",
        drkgreenbg: "#C5FDE9",
        drkgreencard: "#40B76F",
        redbg: "#9C0000",
        redtext: "#FF2727",
        Headertext: "#2B2424",
        primarytext: "#3F3F3F",
        prigreentext: "#0A4F25",
        cardbg: "#F9F9F9"
      },
      fontFamily: {
        "header": ['Bricolage Grotesque'],
        "aicess": ['Overlock SC']
      }
    },
  },
  plugins: [],
};
