import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkConfig } from '../StoreProvider/config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  AppDispatch,
  ThunkConfig
};
