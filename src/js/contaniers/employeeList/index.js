import { connect } from 'react-redux';
import EmployeeList from './employeeList.jsx';

export { default as reducers } from './reducers';

const mapStateToProps = state => ({
  data: state.employeeList.get('employeeList')
});

const mapDispatchToProps = dispatch => ({
  init: () => {
    dispatch({ type: 'EMPLOYEE:LIST:INIT' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
