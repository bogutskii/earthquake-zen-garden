import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div>
                <NavLink to='/'><img src="../../realtor-com.png" className="logo" alt="logo"/></NavLink>
            </div>
            <div>
                <h1 className="header-title">
                    Earthquake Zen Garden
                </h1>
            </div>
            <div className="header-link">
                <NavLink to='/profile' className="bold link">Welcome Sally</NavLink>
            </div>
        </div>
    )
}

export default Header;