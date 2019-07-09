import { takeEvery } from 'redux-saga';

import fetchEmployees from '../containers/employeeList/sagas';

const sagas = [
  [takeEvery, 'EMPLOYEE_LIST:LIST:FETCH', fetchEmployees]
];

function* rootSaga() {
  yield [
    sagas.map(saga => function* () {
      yield saga[0](saga[1], saga[2]);
    }).map(saga => saga.call())
  ];
}

export default rootSaga;
