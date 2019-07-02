import { connect } from 'react-redux';
import EmployeeList from './employeeList';

function mapStateToProps(state) {
  return {
    data: state.employeeList.get('employeeList')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchEmployeeList: () => {
      dispatch({ type: 'EMPLOYEE_LIST:LIST:FETCH' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
