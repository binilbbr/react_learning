import { put } from 'redux-saga/effects';

export default function* fetchEmployee() {debugger
  try { //http://localhost:3000/v1/employees
    const data = yield fetch('http://www.mocky.io/v2/5d242f9a2f000048002416e5')
      .then(res => res.json());
      
    console.log("inside saga.js: "+ data)  
    yield put({ type: 'EMPLOYEE:VIEW:INIT', data });//disaptch to store
  } catch {
    yield put({ type: 'EMPLOYEE:LIST:FAIL' });
  }
}
