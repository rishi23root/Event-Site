import React from 'react'
import "../Css/Header.css"

function Header() {
    return (

        <>
            <div className="Navbar">
                <div className="logo">
                    <img src="TechnoJam.png" alt="logo" />
                </div>

                <div className="Searchbar">
                    <input type="text" placeholder="search..... " />
                    <button type="submit">Search </button>
                </div>
                <div >
                    <button className="logout">Logout</button>
                </div>
            </div>
        </>
    )
}

export default Header
