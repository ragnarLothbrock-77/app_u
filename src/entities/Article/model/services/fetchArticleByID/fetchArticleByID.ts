import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ThunkConfig,
  ThunkExtraArg,
} from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from '../../types/article';

export const fetchArticleByID = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticleByID',
  async (articleID, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI;
    try {
      const response = await extra.api.get<Article>(`/articles/${articleID}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
