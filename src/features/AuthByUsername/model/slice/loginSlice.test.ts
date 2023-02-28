import { LoginSchema } from 'features/AuthByUsername';
import {
  loginActions,
  loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'John' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('John'),
    )).toEqual({ username: 'John' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '1234' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('1234'),
    )).toEqual({ password: '1234' });
  });
});
