import React, {Component} from "react";
import API from '../utils/API'
import Search from '../components/Search'
import Employee from '../components/Employee'
class Home extends Component {
    state = {
        employees: [],
        searchedEmps: [],
        sorted: false
    }

    componentDidMount(){
        API.getRandomEmployees().then((response)=>
        {
            // console.log(response.data.results)
            this.setState({
                employees: response.data.results,
                searchedEmps: response.data.results
            })
        })
    }

    handleSearch = (event) => {
        const input = event.target.value;

        const filtered = this.state.employees.filter((employee) => {
            return employee.name.last.toLowerCase().includes(input);
        })
        
        console.log(filtered)

        this.setState({
            searchedEmps:filtered
        })

    }

    handleSort = (event) => {

        if(!this.state.sorted){
          const sortedList = this.state.searchedEmps.sort(function(a, b){
            if ( a.dob.age < b.dob.age ){
                return -1;
              }
              if ( a.dob.age > b.dob.age){
                return 1;
              }
              return 0;
          } );

          this.setState({
              searchedEmps: sortedList,
              sorted: true
          })
        }
        else{

            const sortedList = this.state.searchedEmps.sort(function(a, b){
                if ( a.dob.age > b.dob.age ){
                    return -1;
                  }
                  if ( a.dob.age < b.dob.age){
                    return 1;
                  }
                  return 0;
              } );
    
              this.setState({
                  searchedEmps: sortedList,
                  sorted: false
              })

        }
    }

    render(){
        return(
            <div>
                <Search handleSearch={this.handleSearch}></Search>
                <table>
                    <tr>
                        <td>
                            Image
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Email
                        </td>
                        <td onClick={this.handleSort}>
                            Age
                        </td>
                    </tr>
                {this.state.searchedEmps ? this.state.searchedEmps.map((employee) => <Employee employee={employee}></Employee>) : <></>}
                </table>
                </div>
        )
    }
}


export default Home;