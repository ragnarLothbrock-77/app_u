import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/consants/localStorage';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUserNameProps,
  {rejectValue: string, extra: ThunkExtraArg}
>(
  'login/loginByUsername',
  async (autData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.post<User>('/login', autData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Incorrect username or password');
    }
  },
);
