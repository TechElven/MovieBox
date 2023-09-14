import React from "react";
import {FaSearch} from "react-icons/fa"
import "./searchBar.css"

export const SearchBar = () => {
    return (
    
        <div className="input-wrapper">
            <input placeholder="What do you want to watch" />
            <FaSearch  id="search-icon"/>

        </div>

    )
} 