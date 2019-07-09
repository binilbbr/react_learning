import React from 'react';
import { storiesOf } from '@storybook/react';

import EmployeeList from '../employeeList';
import data from '../data.json';


storiesOf('features/EmployeeList', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('EmployeeListPage without data', () => (<EmployeeList />))
  .add('EmployeeListPage with data', () => (
    <EmployeeList
      data={data}
    />
  ));
