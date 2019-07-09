import Immutable from 'seamless-immutable';

describe('containers/employeeList/index.js', () => {
  let wrapWithConnect;
  let connect;
  const expectedContainerElement = {};
  beforeEach(() => {
    jest.resetModules();
    jest.unmock('seamless-immutable');
    wrapWithConnect = jest.fn(() => expectedContainerElement);
    connect = jest.fn(() => wrapWithConnect);
    jest.doMock('react-redux', () => ({ connect }));
  });
  it('should call connect', () => {
    require('../index'); // eslint-disable-line global-require
    expect(connect).toBeCalled();
  });
  describe('connect function', () => {
    describe('mapStateToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapStateToProps = connect.mock.calls[0][0];

        expect(mapStateToProps).toBeDefined();
        expect(mapStateToProps).toBeInstanceOf(Function);
      });
      it('should be fired', () => {
        const mapStateToProps = connect.mock.calls[0][0];
        const state = {
          employeeList: Immutable({
            employeeList: []
          })
        };
        const result = mapStateToProps(state);
        expect(result).toEqual({
          data: []
        });
      });
    });
  });
  describe('connect function', () => {
    describe('mapDispatchToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapDispatchToProps = connect.mock.calls[0][1];

        expect(mapDispatchToProps).toBeDefined();
        expect(mapDispatchToProps).toBeInstanceOf(Function);
        expect(mapDispatchToProps.name).toBe('mapDispatchToProps');
      });
      it('should be fired on fetchEmployeeList', () => {
        const mapDispatchToProps = connect.mock.calls[0][1];
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);

        expect(props).toBeDefined();
        expect(props.fetchEmployeeList).toBeDefined();
        expect(props.fetchEmployeeList).toBeInstanceOf(Function);

        props.fetchEmployeeList();

        expect(dispatch).toHaveBeenCalledWith({
          type: 'EMPLOYEE_LIST:LIST:FETCH'
        });
      });
    });
  });
});
