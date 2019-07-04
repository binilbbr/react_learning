/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import renderer from 'react-test-renderer';


describe('containers/employeeList', () => {
  it('with url and user id', () => {
    const EmployeeList = require('../employeeList.jsx').default; // eslint-disable-line global-require

    const component = renderer.create(
      <EmployeeList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('With out url and user id', () => {
    const EmployeeList = require('../employeeList.jsx').default; // eslint-disable-line global-require

    const component = renderer.create(
      <EmployeeList />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
