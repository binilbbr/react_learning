import { put } from 'redux-saga/effects';

export default function* fetchEmployees() {
  try {
    const data = yield fetch(' http://www.mocky.io/v2/5d15d2c40e00000b41a11517')
      .then(res => res.json());
    yield put({ type: 'EMPLOYEE:LIST:INIT', data });
  } catch {
    yield put({ type: 'EMPLOYEE:LIST:FAIL' });
  }
}
