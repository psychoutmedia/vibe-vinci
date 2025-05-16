/** @type {import("prettier").Config} */
module.exports = {
  // ✔️ Load the two companion plug-ins
  plugins: ["prettier-plugin-tailwindcss", "@ianvs/prettier-plugin-sort-imports"],

  // 👉 Import-sorting rules
  importOrder: ["^react$", "^next", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // ✨ General Prettier style preferences
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
};
