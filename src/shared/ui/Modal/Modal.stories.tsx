import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpened: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id ipsum, minima molestiae nesciunt quae quaerat quam sint suscipit! Aut deserunt distinctio eligendi error eveniet nihil soluta! Fugiat, illo, ut?',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpened: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id ipsum, minima molestiae nesciunt quae quaerat quam sint suscipit! Aut deserunt distinctio eligendi error eveniet nihil soluta! Fugiat, illo, ut?',
};
Dark.decorators = [themeDecorator(Theme.DARK)];
