import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });
  sagaMiddleware.run(rootSaga);

  // Enable HMR
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const newRootReducer = require('./reducers').default;
      store.replaceReducer(newRootReducer);
    });
  }

  return store;
}

export default configureAppStore;
