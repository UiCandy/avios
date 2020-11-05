import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'theme-ui';
import PropTypes from 'prop-types';

import 'sanitize.css/sanitize.css';
import theme from 'themes';

import configureAppStore from 'store/configureStore';
import App from 'App';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Component />
      </React.StrictMode>
    </ThemeProvider>
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
