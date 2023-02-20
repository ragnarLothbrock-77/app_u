import { createSelector } from '@reduxjs/toolkit';
import { counterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: counterSchema) => counter.value,
);
