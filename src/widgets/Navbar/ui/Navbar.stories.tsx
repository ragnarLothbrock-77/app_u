import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
