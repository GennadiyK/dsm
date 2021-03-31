module.exports = {
  stories: ['../**/*.stories.jsx'],
  addons: [
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true
      }
    },
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@invisionapp/dsm-storybook'
  ]
};
