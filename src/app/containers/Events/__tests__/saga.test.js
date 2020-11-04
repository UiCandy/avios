import { put, takeLatest } from 'redux-saga/effects';
import fetchEventsSaga, { getEvents } from '../saga';
import * as actions from '../actions';

describe('getEvents Saga', () => {
  let getEventsIterator;

  // We setup the base of our calls in the beforeEach
  // We have to test twice, once for a successful load and once for an unsuccessful one

  beforeEach(() => {
    getEventsIterator = getEvents();
    const delayDescriptor = getEventsIterator.next().value;
    expect(delayDescriptor).toMatchSnapshot();

    const selectDescriptor = getEventsIterator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
  });

  it('should dispatch the eventsLoaded action if it requests the data successfully', () => {
    const events = [
      {
        name: 'Fan Mile',
      },
    ];
    const putDescriptor = getEventsIterator.next(events).value;
    expect(putDescriptor).toEqual(put(actions.eventsLoaded(events)));

    const iteration = getEventsIterator.next();
    expect(iteration.done).toBe(true);
  });

  it('should dispatch the eventsError action if it fails', () => {
    const error = 'API Down, please check your internet connection.';

    const requestDescriptor = getEventsIterator.next('').value;
    expect(requestDescriptor).toMatchSnapshot();

    const putDescriptor = getEventsIterator.throw({
      response: { status: 404 },
    }).value;
    expect(putDescriptor).toEqual(put(actions.eventsError(error)));
  });
});

describe('fetchEventsSaga Saga', () => {
  const fetchEventsSagaIterator = fetchEventsSaga();
  it('should start task to watch for loadEvents action', () => {
    const takeLatestDescriptor = fetchEventsSagaIterator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest('LOAD_EVENTS', getEvents));
  });
});
