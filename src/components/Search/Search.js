import React, {Component} from "react";
import styles from "./Search.module.css"

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={styles.searchForm}>
                <form>Search by Last Name:
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