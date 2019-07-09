import Immutable from 'seamless-immutable';
import reducer from '../reducers';

const defaultState = Immutable({
  employeeList: []
});


describe('containers/employeeList/reducers', () => {
  describe('state', () => {
    it('should export `reducer`', () => {
      expect(reducer)
        .toBeDefined();
    });

    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('should return the same state', () => {
      const startState = Immutable.set(defaultState, 'anotherValue', 'someValue');
      const expectedState = startState;
      expect(reducer(startState, {})).toEqual(expectedState);
    });
  });
  describe('actions', () => {
    it('should handle EMPLOYEE:LIST:INIT', () => {
      const data = [
        {
          name: 'John Doe',
          gender: 'male',
          address: 'Address 1',
          phone: '99989898',
          department: 'IT-Department'
        }
      ];
      const resultState = reducer(defaultState, { type: 'EMPLOYEE:LIST:INIT', data });
      expect(resultState.employeeList)
        .toEqual(data);
    });
  });
});
