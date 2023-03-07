import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { storeDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/john.jpeg';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [storeDecorator({
  profile: {
    form: {
      username: 'Dove_guy',
      age: 44,
      country: Country.USA,
      lastname: 'Wick',
      first: 'John',
      city: 'Boston',
      currency: Currency.USD,
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({
  profile: {
    form: {
      username: 'Dove_guy',
      age: 44,
      country: Country.USA,
      lastname: 'Wick',
      first: 'John',
      city: 'Boston',
      currency: Currency.USD,
      avatar,
    },
  },
})];
