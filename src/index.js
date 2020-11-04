import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import App from 'App';

import configureAppStore from 'store/configureStore';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  </Provider>
);

const render = Component => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // so they have to be constants at compile-time
  module.hot.accept(['./App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // eslint-disable-next-line global-require
    const FreshHotApp = require('./App').App;
    render(FreshHotApp);
  });
}

ConnectedApp.propTypes = {
  Component: PropTypes.element.isRequired,
};

render(App);
