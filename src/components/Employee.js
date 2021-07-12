import React, {Component} from "react";


class Employee extends Component {

    constructor(props){
        super(props)

        console.log(this.props)
    }



    render(){
        return(
            <tr>
                <td>
                    <img src={this.props.employee.picture.thumbnail}></img>
                </td>
                <td>
                    {this.props.employee.name.first + " " + this.props.employee.name.last}
                </td>
                <td>
                    {this.props.employee.email}
                </td>
                <td>
                    {this.props.employee.dob.age}
                </td>
            </tr>
        )
    }
}


export default Employee;