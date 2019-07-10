import React from 'react';
import { storiesOf } from '@storybook/react';

import EmployeeDetails from '../employeeDetails';
// import data from '../data.json';


storiesOf('features/EmployeeDetails', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('EmployeeListPage without data', () => (<EmployeeDetails />));
//   .add('EmployeeListPage with data', () => (
//     <EmployeeList
//       data={data}
//     />
//   ));
