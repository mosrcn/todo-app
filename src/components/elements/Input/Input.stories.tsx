import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Label', helperText: 'Message' };
