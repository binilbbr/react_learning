import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { store } from './store';
import { HashRouter as Router } from 'react-router-dom';
import RootLayout from './layout/rootLayout.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RootLayout/>
    </Router>
  </Provider>, 
  document.getElementById('app'));
