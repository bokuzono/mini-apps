module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // lightだけに固定
    darkTheme: "light", // ← ダーク設定でもlightを使わせる
  },
}
