import { put } from 'redux-saga/effects';

export default function* fetchEmployees() {
  try { //http://localhost:3000/v1/employees
    const data = yield fetch(' http://www.mocky.io/v2/5d15d2c40e00000b41a11517')
      .then(res => res.json());
      
    console.log("inside saga.js: "+ data)  
    yield put({ type: 'EMPLOYEE:LIST:INIT', data });//disaptch to store
  } catch {
    yield put({ type: 'EMPLOYEE:LIST:FAIL' });
  }
}
