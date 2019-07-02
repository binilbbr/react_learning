import { put } from 'redux-saga/effects';

export default function* addEmployee(action) {
  const { data } = action;
  try {
    yield fetch(' http://www.mocky.io/v2/5d15d2c40e00000b41a11517',
      {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => res.json());
    yield put({ type: 'ADD_EMPLOYEE:ADD:SUCCESS' });
  } catch {
    yield put({ type: 'EMPLOYEE:LIST:FAIL' });
  }
}
