import Immutable from 'seamless-immutable';

const defaultState = Immutable({
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
