module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",

          verbose: false,
        },
      ],
      [
        "module-resolver",
        {
          alias: {
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@typings": "./src/typings",
            "@contexts": "./src/contexts",
            "@services": "./src/services",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@components": "./src/components",
            "@constants": "./src/constants",
          },
        },
      ],
    ],
  };
};
