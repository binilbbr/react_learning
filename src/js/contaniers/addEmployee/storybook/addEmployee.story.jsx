import React from 'react';
import { storiesOf } from '@storybook/react';

import  AddEmployee  from '../addEmployee';



storiesOf('features/AddEmployee', module)
  .addDecorator(story => (
    <div style={{ padding: '3rem' }}>{story()}</div>
  ))
  .add('Default Addemployee form', () =>
    (<AddEmployee/>));
