import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
class EmployeList extends React.Component {
  componentDidMount() {
    if (this.props.init) {
      this.props.init();
    }
  }
  render() {
    const { data } = this.props;
    return (
      <div>
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
    );
  }
}

EmployeList.propTypes = {
  data: PropTypes.shape({})
};

EmployeList.defaultProps = {
  data: []
};

export default EmployeList;
