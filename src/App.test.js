import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import App from './App';

const shallowRenderer = createRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    shallowRenderer.render(<App />);
    const renderedOutput = shallowRenderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
