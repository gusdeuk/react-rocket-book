import React from 'react';

import { ButtonTest } from './ButtonTest';

// More on default export: https://storybook.js.org/docs/preact/writing-stories/introduction#default-export
export default {
    title: 'Component Library/Button New',
    component: ButtonTest,
    // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
    argTypes: {
        primary: { control: 'boolean', default: false },
        size: {
            control: 'select',
            options: ['medium', 'small', 'large'],
            default: 'medium'
        },
        backgroundColor: { control: 'color' },
        onClick: { action: 'onClick' }
    }
}

// More on component templates: https://storybook.js.org/docs/preact/writing-stories/introduction#using-args
const Template = (args) => <ButtonTest {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button'
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
    label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
    size: 'small',
    label: 'Button'
}
