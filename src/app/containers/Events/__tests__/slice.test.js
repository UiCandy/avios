import configureAppStore from 'store/configureStore';

import * as slice from '../slice';
import * as actions from '../actions';

const store = configureAppStore();

describe('fetchEvents slice', () => {
  let state;

  beforeEach(() => {
    // quick reset state
    store.dispatch(actions.eventsLoaded([]));
    state = slice.initialState;
  });

  it('should return the initial state', () => {
    expect(store.getState().events).toEqual(state);
  });

  it('should handle loadEvents', () => {
    store.dispatch(actions.loadEvents());
    expect(store.getState().events).toEqual({
      ...slice.initialState,
      meta: {
        ...slice.initialState.meta,
        loading: true,
      },
    });
  });

  it('should handle eventsLoaded', () => {
    const events = { index: [{ name: 'test' }] };
    store.dispatch(actions.eventsLoaded(events));
    expect(store.getState().events).toEqual({
      ...slice.initialState,
      all: events.index,
    });
  });

  it('should handle eventsError', () => {
    const eventError = 'Major Shizz!';
    store.dispatch(actions.eventsError('Major Shizz!'));
    expect(store.getState().events).toEqual({
      ...slice.initialState,
      meta: {
        ...slice.initialState.meta,
        error: eventError,
      },
    });
  });
});
