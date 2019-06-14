import React from 'react';

import styles from './styles';

class AddEmployee extends React.Component {

  handleSubmit = (event) => {
  }

  render() {
    return (
      <div style={styles.rootStyle}>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div style={styles.fieldStyle}><div style={styles.fieldNameStyle}>Name</div><input type="text" name="name" style={styles.inputStyle} /></div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Gender</div>
            <select id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Address</div>
            <input type="text" name="name" style={styles.inputStyle} />
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Phone</div>
            <input type="text" name="name" style={styles.inputStyle} />
          </div>
          <div style={styles.fieldStyle}>
            <div style={styles.fieldNameStyle}>Department</div>
            <input type="text" name="name" style={styles.inputStyle} />
          </div>
          <button style={styles.buttonStyle} type="submit">Submit</button>
        </form>   
      </div>
    );
  }
}

export default AddEmployee;
