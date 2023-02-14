import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageForErrorBoundary } from './PageForErrorBoundary';

export default {
  title: 'widgets/PageForErrorBoundary',
  component: PageForErrorBoundary,
  argTypes: {
  },
} as ComponentMeta<typeof PageForErrorBoundary>;

const Template: ComponentStory<typeof PageForErrorBoundary> = (args) => <PageForErrorBoundary {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK)];
