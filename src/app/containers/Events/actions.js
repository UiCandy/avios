export const LOAD_EVENTS = 'LOAD_EVENTS';
export const EVENTS_LOADED = 'EVENTS_LOADED';
export const EVENTS_ERROR = 'EVENTS_ERROR';

export const FILTER_EVENTS = 'FILTER_EVENTS';

export const loadEvents = () => {
  return {
    type: LOAD_EVENTS,
  };
};

export const eventsLoaded = events => {
  return {
    type: EVENTS_LOADED,
    payload: events,
  };
};

export const eventsError = error => {
  return {
    type: EVENTS_ERROR,
    payload: error,
  };
};

export const filterEvents = query => {
  return {
    type: FILTER_EVENTS,
    payload: query,
  };
};
