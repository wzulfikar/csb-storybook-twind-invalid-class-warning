module.exports = {
  stories: ["../src/*.stories.jsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-console"],
  core: {
    builder: "webpack5"
  }
};
