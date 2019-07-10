import React from 'react'
import PropTypes from 'prop-types'
// import './employeeView.css'

class EmployeeView extends React.Component{
    static contextTypes = {
        router: PropTypes.shape()
      };
    
    componentDidMount() {debugger
        const { fetchEmployee } = this.props;
        if (fetchEmployee) {
          fetchEmployee();
        }
      }
    
    render(){
        const { data } = this.props;
        return(
            <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td> {data.name}</td>
                </tr>
                <tr>
                    <td> Gender</td>
                    <td> {data.gender}</td>
                </tr>
                <tr>
                    <td> Address</td>
                    <td> {data.address}</td>
                </tr>
                <tr>
                    <td> Phone</td>
                    <td> {data.phone}</td>
                </tr>
                <tr>
                    <td> Department</td>
                    <td> {data.department}</td>
                </tr>
            </table>
            </div>
        );
    }
}

EmployeeView.propTypes = {
    data: PropTypes.shape({})
  };
  
  EmployeeView.defaultProps = {
    data: {}
  };
export default EmployeeView;