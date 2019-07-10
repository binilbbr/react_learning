import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Employees from '../containers/employeeList';
import EmployeeView from '../containers/employeeView'

class RootLayout extends React.Component {
  render() {debugger
    return (
      <div>
        <div style={{ height: 60, backgroundColor: '#8EA5D5' }} />
        <Switch>
        <Route exact={true} path="/" component={Employees} />
        <Route exact={true} path="/show" component={EmployeeView} />
        </Switch>
      </div>
    );
  }
}

export default RootLayout;
