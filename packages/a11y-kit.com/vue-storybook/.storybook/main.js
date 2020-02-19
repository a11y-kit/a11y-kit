module.exports = {
  stories: ['../stories/*.stories.js'],
  addons: [
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // Look for all .js files as .stories files are split out
          test: [/\.jsx?$/]
        },
      },
    },
  ],
};
