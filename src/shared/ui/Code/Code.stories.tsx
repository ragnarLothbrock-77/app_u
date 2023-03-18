import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Base = Template.bind({});
Base.args = {
  text: `
    export default {
      title: 'shared/Code',
      component: Code,
      argTypes: {},
    } as ComponentMeta<typeof Code>;
  
    const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />
  `,
};
