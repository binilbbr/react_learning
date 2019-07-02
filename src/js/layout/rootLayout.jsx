import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Employees from '../contaniers/employeeList';
import AddEmployee from '../contaniers/addEmployee';

class RootLayout extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: 60, backgroundColor: '#8EA5D5' }} />
        <Switch>
          <Route exact={true} path="/" component={Employees} />
          <Route exact={true} path="/addEmployee" component={AddEmployee} />
        </Switch>
      </div>
    );
  }
}

export default RootLayout;
