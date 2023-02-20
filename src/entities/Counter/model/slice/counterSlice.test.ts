import { counterReducer, counterSchema, counterActions } from '../../index';

describe('counterSlice.test', () => {
  test('decrement', () => {
    const state: counterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
});

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: counterSchema = { value: 10 };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });
});

describe('counterSlice.test', () => {
  test('work with initial state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
