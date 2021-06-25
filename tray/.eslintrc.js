module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    quotes: ["error", "double"],
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 1 }],
    "indent": ["error", 2],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-unused-vars": 0,
    "no-undef": 0
  },
};
