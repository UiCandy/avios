import { all } from 'redux-saga/effects';

export const loadSaga = () => {
  console.log("Sagas comin' up! >_>");
};

export default function* rootSaga() {
  yield all([loadSaga()]);
}
