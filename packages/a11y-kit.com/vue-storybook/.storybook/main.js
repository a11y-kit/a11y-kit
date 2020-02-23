module.exports = {
  stories: ['../stories/*.stories.js'],
  addons: [
    '@storybook/addon-a11y/register',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // Stories should be kept in their own file
          test: [/story\.jsx?$/]
        },
      },
    },
  ],
};
