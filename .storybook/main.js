const path = require("path");

module.exports = {
  stories: ["./../stories/**/**.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, "..")],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")],
            },
          },
          require.resolve("react-docgen-typescript-loader"),
        ],
      },
    ]),
      config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  babel: {
    plugins: [["babel-plugin-jsx-auto-test-id", { attributeName: "data-qa" }]],
  },
};
