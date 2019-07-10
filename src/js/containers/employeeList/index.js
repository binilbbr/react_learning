import { connect } from 'react-redux';
import EmployeeList from './employeeList';

function mapStateToProps(state) { // compoent state as prop to component
  console.log("inside maptoprops value: " + state.employeeList.employeeList)
  return {
    data: state.employeeList.employeeList
              //statename//data from reducer
  };
}

function mapDispatchToProps(dispatch) { // dispatch action to store
  console.log("inside dispatch")
  return {
    fetchEmployeeList: () => {
      dispatch({ type: 'EMPLOYEE_LIST:LIST:FETCH' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
