import React from "react";
import { SearchBar } from "./searchBar";
import "./header.css"

export const  Header = () => {
    return (
        <>
        
        <div className="header">
            <div>
                <h1>MovieBox</h1>
            </div>

            <div>
                <SearchBar />
            </div>

            <div className="nav">
                <p className="nav-text">Sign in</p>
            </div>
        </div>

        </>
    )
}