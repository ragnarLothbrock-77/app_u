import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string, extra: ThunkExtraArg}
>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<Profile>('/profile');

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Incorrect username or password');
    }
  },
);
