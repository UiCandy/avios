import * as actions from './actions';

export const initialState = {
  all: [],
  meta: {
    query: '',
    loading: false,
    error: null,
  },
};

const events = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_EVENTS:
      return {
        ...state,
        meta: {
          ...state.meta,
          loading: true,
        },
      };
    case actions.EVENTS_LOADED:
      return {
        ...state,
        all: action.payload.index ? action.payload.index : [],
        meta: {
          ...state.meta,
          ...action.payload.results,
          loading: false,
        },
      };
    case actions.EVENTS_ERROR:
      return {
        ...state,
        meta: {
          ...state.meta,
          error: action.payload,
        },
      };
    case actions.FILTER_EVENTS:
      return {
        ...state,
        meta: {
          ...state.meta,
          query: action.payload,
        },
      };
    default:
      return state;
  }
};

export default events;
