import { combineReducers } from '@reduxjs/toolkit';

import events from 'app/containers/Events/slice';

const applicationReducer = combineReducers({
  events,
});

const rootReducer = (state, action) => applicationReducer(state, action);

export default rootReducer;
