import React from "react";
import './SearchOptions.style.scss'; 

class SearchOptions extends React.Component {
    render () {
        return(
            <div className="searchOptions">
                <input className="searchOptions__input" type="text" placeholder="Name the product.."/>
                <button className="searchOptions__button">Search</button>
            </div>
        )
    }
}

export default SearchOptions;