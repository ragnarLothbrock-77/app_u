import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  themeDecorator,
} from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Base = Template.bind({});
Base.args = {
  width: '100%',
  height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
  border: '50%',
  height: 100,
  width: 100,
};

export const BaseDark = Template.bind({});
BaseDark.args = {
  width: '100%',
  height: 200,
};
BaseDark.decorators = [themeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: '50%',
  height: 100,
  width: 100,
};
CircleDark.decorators = [themeDecorator(Theme.DARK)];
