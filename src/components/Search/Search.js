import React, {Component} from "react";

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form>
                    <input
                    onChange={event => this.props.handleSearch(event)}
                    >
                    </input>
                </form>
                </div>
        )
    }
}


export default Search;