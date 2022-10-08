import { create } from '@storybook/theming';

export default create({
    base: 'light',

    // colorPrimary: 'hotpink',
    // colorSecondary: 'deepskyblue',

    // UI
    appBg: 'white',
    appContentBg: '#f8f8f8',
    // appBorderColor: 'grey',
    // appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    // fontCode: 'monospace',

    // Text colors
    textColor: '#545454',
    // textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#5fb6ed',
    // barSelectedColor: 'black',
    barBg: '#daf1ff',

    // Form colors
    // inputBg: 'white',
    // inputBorder: 'silver',
    // inputTextColor: 'black',
    inputBorderRadius: 8,

    brandTitle: 'My Rocket Book',
    brandUrl: '',
    brandImage: '/assets/logo.svg',
    brandTarget: '_self'
})
