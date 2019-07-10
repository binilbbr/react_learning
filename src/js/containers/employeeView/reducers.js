import Immutable from 'seamless-immutable';

const defaultState = Immutable({
  employeeView: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:VIEW:INIT':debugger
      return state.set('employeeView', action.data);// accessed in index.js
    default:
      return state;
  }
};
