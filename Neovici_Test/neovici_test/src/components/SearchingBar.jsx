import React, {useState} from "react";
import './SearchingBar.css';

const SearchingBar = (props) => {
    const cocktailFetcher = fetch();
    return <React.Fragment>
        <div>
            <form onSubmit={cocktailFetcher}>
                <input type="text">Type your cocktail</input>
            </form>
        </div>
    </React.Fragment>
}

export default SearchingBar;