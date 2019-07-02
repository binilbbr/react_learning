import { connect } from 'react-redux';
import AddEmployee from './addEmployee';

function mapStateToProps(state) {
  return {
    data: state.employeeList.get('employeeList')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addEmployee: (data) => {
      dispatch({ type: 'ADD_EMPLOYEE:ADD', data });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
