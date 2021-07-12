import React, {Component} from "react";
import styles from "./Employee.module.css"

class Employee extends Component {

    constructor(props){
        super(props)

        console.log(this.props)
    }



    render(){
        return(
            <tr className={styles.employeeTable}>
                <td className={styles.employeeImage}>
                    <img src={this.props.employee.picture.thumbnail}></img>
                </td>
                <td className={styles.employeeName}>
                    {this.props.employee.name.first + " " + this.props.employee.name.last}
                </td>
                <td className={styles.employeeEmail}>
                    {this.props.employee.email}
                </td>
                <td className={styles.employeeAge}>
                    {this.props.employee.dob.age}
                </td>
            </tr>
        )
    }
}


export default Employee;