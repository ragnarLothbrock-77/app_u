import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;
export const getCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
