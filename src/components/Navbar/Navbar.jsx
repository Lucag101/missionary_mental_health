import React, {useState, useEffect} from 'react';
import './Navbar.css';
import '../../styles/sharedStyles.css'

function Navbar(){

    return(
        <div className="navbar-main">
            <div className="navbar-element">Resources</div>
            <div className="navbar-element">Exercises</div>
            <div className="navbar-element">Analytics</div>
            <div className="navbar-element">Resources</div>
        </div>
    )
}

export default Navbar;