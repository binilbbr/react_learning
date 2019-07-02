import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { store } from './store';
import RootLayout from './layout/rootLayout';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootLayout />
    </Router>
  </Provider>,
  document.getElementById('app')
);
