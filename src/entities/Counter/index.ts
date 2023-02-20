import { counterActions, counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import { counterSchema } from './model/types/counterSchema';

export {
  Counter,
  counterReducer,
  counterSchema,
  counterActions,
};
