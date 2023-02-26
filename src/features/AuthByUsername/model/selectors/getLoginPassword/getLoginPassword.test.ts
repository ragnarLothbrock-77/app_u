import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading.test', () => {
  test('must return password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '1234',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('1234');
  });

  test('must return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
