import React, {useState} from "react";

const SearchForm = () => {
    return(
        <form>
            <input type="text" placeholder="Enter search term.." />
            <button>Search</button>
        </form>
    )
}

export default SearchForm;