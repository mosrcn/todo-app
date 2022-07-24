import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { color: 'primary', size: 'md', children: 'Button' };

export const Secondary = Template.bind({});
Secondary.args = { color: 'secondary', size: 'md', children: 'Button' };
