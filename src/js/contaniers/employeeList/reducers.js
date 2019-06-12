import Immutable from 'immutable';
import page1 from './data.json';

const defaultState = Immutable.fromJS({
  employeeList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:LIST:INIT':
      return state.set('employeeList', page1);
    default:
      return state;
  }
};
