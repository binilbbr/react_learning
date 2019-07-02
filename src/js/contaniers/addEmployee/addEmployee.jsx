import React from 'react';

import styles from './styles';

class AddEmployee extends React.Component {
  state = {
    name: '',
    gender: '',
    address: '',
    phone: '',
    department: ''
  }

  handleSubmit = (event) => {
    const { name, address, gender, phone, department } = this.state;
    const { addEmployee } = this.props;
    const data = {
      name,
      gender,
      address,
      phone,
      department
    };
    addEmployee(data);
    event.preventDefault();
  }

  handleOnchange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { name, address, gender, phone, department } = this.state;
    return (
      <div style={styles.rootStyle}>
        <form method="POST" onSubmit={event => this.handleSubmit(event)}>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Name</div>
            <input value={name} onChange={this.handleOnchange} type="text" name="name" style={styles.inputStyle} />
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Gender</div>
            <select id="gender" onChange={this.handleOnchange} value={gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Address</div>
            <input type="text" name="address" style={styles.inputStyle} onChange={this.handleOnchange} value={address} />
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Phone</div>
            <input type="text" name="phone" style={styles.inputStyle} onChange={this.handleOnchange} value={phone} />
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Department</div>
            <input type="text" name="department" style={styles.inputStyle} onChange={this.handleOnchange} value={department} />
          </div>
          <button style={styles.buttonStyle} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddEmployee;
