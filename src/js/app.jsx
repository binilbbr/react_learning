import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  { store } from './store';
import EmployeeList from './contaniers/employeeList';

ReactDOM.render(
  <Provider store={store}>
    <EmployeeList/>
  </Provider>, 
  document.getElementById('app'));
