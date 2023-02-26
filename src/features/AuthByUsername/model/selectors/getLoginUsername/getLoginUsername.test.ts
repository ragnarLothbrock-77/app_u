import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading.test', () => {
  test('must return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'John Wick',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('John Wick');
  });

  test('must return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
