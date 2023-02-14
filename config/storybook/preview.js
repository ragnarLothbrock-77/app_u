import { addDecorator } from '@storybook/react';
import { stylesDecorator } from '../../src/shared/config/storybook/stylesDecorator/stylesDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from '../../src/shared/config/storybook/routerDecoratot/routerDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(stylesDecorator);
addDecorator(themeDecorator(Theme.PRIMARY));
addDecorator(routerDecorator);
