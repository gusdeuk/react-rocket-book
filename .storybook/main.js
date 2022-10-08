module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public-sb'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        'storybook-css-modules'
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    }
}
