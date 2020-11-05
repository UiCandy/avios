/** @jsx jsx */
import { Component } from 'react';
import { jsx } from 'theme-ui';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import 'app/assets/fonts.css';

import Header from 'app/components/Header';
import Events from 'app/containers/Events';
import Wrapper from 'app/components/Wrapper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Wrapper>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Events}
            />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
