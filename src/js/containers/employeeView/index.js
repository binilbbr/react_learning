import { connect } from 'react-redux';
import EmployeeView from './employeeView.jsx';

function mapStateToProps(state) {debugger // compoent state as prop to component
//   console.log("inside maptoprops value: " + state.employeeList.employeeList)
  return {
    data: state.employeeView.employeeView
              //statename//data from reducer
  };
}

function mapDispatchToProps(dispatch) { // dispatch action to store
  console.log("inside dispatch")
  return {
    fetchEmployee: () => {debugger
      dispatch({ type: 'EMPLOYEE_VIEW:VIEW:FETCH' });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeView);
