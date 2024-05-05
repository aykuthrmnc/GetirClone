module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ts",
          ".tsx",
          ".js",
          ".jsx",
          ".json",
          ".ios.ts",
          ".ios.tsx",
          ".android.ts",
          ".android.tsx",
        ],
        alias: {
          "~": "./src/",
        },
      },
    ],
  ],
};
