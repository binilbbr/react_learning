import { takeEvery } from 'redux-saga';

import fetchEmployee from '../containers/employeeView/sagas';
import fetchEmployees from '../containers/employeeList/sagas';

const sagas = [
  [takeEvery, 'EMPLOYEE_LIST:LIST:FETCH', fetchEmployees],
  [takeEvery, 'EMPLOYEE_VIEW:VIEW:FETCH', fetchEmployee]
];
//fetechEmployees is gen. fn

function* rootSaga() {debugger
  yield [
    sagas.map(saga => function* () {
      yield saga[0](saga[1], saga[2]);
    }).map(saga => saga.call())
  ];
}

export default rootSaga;
