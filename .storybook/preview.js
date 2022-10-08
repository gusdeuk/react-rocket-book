// import { themes } from '@storybook/theming'
import rocketTheme from './carlex-theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    docs: {
        // theme: themes.dark
        theme: rocketTheme
    }
}
