module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@react-native",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    quotes: "off",
  },
  parser: "@typescript-eslint/parser",
};
