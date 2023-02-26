import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  storeDecorator,
} from 'shared/config/storybook/storeDecorator/storeDecorator';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginModal',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [storeDecorator({
  login: { username: 'John Wick', password: '123456' },
})];

export const isError = Template.bind({});
isError.args = {};
isError.decorators = [storeDecorator({
  login: { username: 'John Wick', password: '123456', error: 'ERROR' },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [storeDecorator({
  login: { isLoading: true },
})];
