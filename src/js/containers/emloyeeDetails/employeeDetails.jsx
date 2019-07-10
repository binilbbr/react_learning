import React from 'react';
import './employeeDetails.css'
// import PropTypes from 'prop-types';?

class EmployeeDetails extends React.Component{
    render(){

        return(
           <form action="">
                <div class="outerDiv">
                    <div>
                    Name: <input type="text"/> <br/>
                    Gender:
                    <select id = "genderTypes">
                    <option value = "1">male</option>
                    <option value = "2">female</option>
                    <option value = "3">other</option>             
                    </select> <br/>
                    Addrress:<input type="text"/> <br/>
                    Phone: <input type="text"/> <br/>
                    Department:<input type="text"/> <br/>
                    <input type="submit" value="submit"/>
                    </div>
                </div>
        
           </form>
        );
    }
}

export default EmployeeDetails;