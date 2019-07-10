import React from 'react';
import { storiesOf } from '@storybook/react';

import EmployeeView from '../employeeView';
import data from '../dataForView.json';


storiesOf('features/EmployeeView', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('EmployeeListPage without data', () => (<EmployeeView />))
  .add('EmployeeListPage with data', () => (
    <EmployeeView
      data={data}
    />
  ));
