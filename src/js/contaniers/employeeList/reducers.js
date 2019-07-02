import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
  employeeList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:LIST:INIT':
      return state.set('employeeList', action.data);
    default:
      return state;
  }
};
