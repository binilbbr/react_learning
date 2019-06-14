import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
class EmployeeList extends React.Component {
  static contextTypes = {
    router: PropTypes.shape()
  };

  componentDidMount() {
    if (this.props.init) {
      this.props.init();
    }
  }

  handleAddEmployeeButton  = ()  => {
    this.context.router.history.push('/addEmployee');
  }

  render() {
    const { data } = this.props;
    return (
      <div style={{ marginTop: 20}}>
        <button style={{ margin: 20 }} onClick={this.handleAddEmployeeButton}>Add Employee</button>
        <div style={{ margin: 20 }}>
          <table style={{ border: '1px solid',width: '100%' }}>
            <tr style={{ border: '1px solid', height: 50, backgroundColor: '#8FA7DA' }}>
              <th>Name</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Department</th>
            </tr>
            {data.map(item => (
              <tr
                key={`${item.name}_${item.department}`}
              >
                <td align="center" style={{ height: 50, textColor: '#326DEA' }}>
                <font color="#326DEA">
                {item.name}
                </font>
                </td>
                <td align="center">
                  {item.gender}
                </td>
                <td align="center">
                  {item.address}
                </td>
                <td align="center">
                  {item.phone}
                </td>
                <td align="center">
                  {item.department}
                </td>
              </tr>))}
          </table>
        </div>
      </div>
    );
  }
}

EmployeeList.propTypes = {
  data: PropTypes.shape({})
};

EmployeeList.defaultProps = {
  data: []
};

export default EmployeeList;
