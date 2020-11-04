import { call, put, takeLatest, delay } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from './actions';

/**
 * Events request/response handler
 */
export function* getEvents() {
  yield delay(500);

  // For demo purposes only - so that there won't be any need to add an .env file while running this app locally for evaluation
  const requestURL =
    process.env.REACT_APP_API_ADDRESS ||
    'https://www.berlin.de/sen/web/service/maerkte-feste/strassen-volksfeste/index.php/index/all.json?q=';

  try {
    const events = yield call(request, requestURL);
    yield put(actions.eventsLoaded(events));
  } catch (err) {
    yield put(
      actions.eventsError('API Down, please check your internet connection.')
    );
  }
}

/**
 * Root saga
 */
export default function* fetchEventsSaga() {
  yield takeLatest(actions.LOAD_EVENTS, getEvents);
}
