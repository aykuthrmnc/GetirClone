module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "@react-native",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: "off",
    "prettier/prettier": ["error", {endOfLine: "auto"}],
  },
  parser: "@typescript-eslint/parser",
};
