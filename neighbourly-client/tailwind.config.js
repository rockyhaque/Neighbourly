/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["'Nunito Sans',sans-serif"],
        roboto: ["'Roboto',sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 8s infinite ease-in-out",
        "bounce-reverse": "bounce 10s infinite ease-in-out reverse",
        "bounce-fast": "bounce 6s infinite ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
