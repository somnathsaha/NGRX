import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';

export const selectCounterFeature =
  createFeatureSelector<counterState>('count');

export const getCount = createSelector(
  selectCounterFeature,
  (state: counterState) => state.counter
);

export const getChannel = createSelector(
  selectCounterFeature,
  (state: counterState) => state.channelName
);
