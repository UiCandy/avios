import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectSlice = state => state.events || initialState;
const filterSlice = state => state.events.meta.query;
export const selectLoading = createSelector(
  [selectSlice],
  state => state.meta.loading
);

export const selectError = createSelector(
  [selectSlice],
  state => state.meta.error
);

export const selectEvents = createSelector(
  [selectSlice, filterSlice],
  (state, filter) => {
    if (filter === '') {
      return state.all;
    }
    return state.all.filter(event => {
      return event.bezeichnung.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
