import React, {useState, useEffect} from 'react';
import '../../styles/sharedStyles.css'
import { Link } from 'react-router-dom';

function Navbar(){

    return(
        <div className="navbar-main">
            <div className="navbar-element"><Link to="/">Home</Link></div>
            <div className="navbar-element"><Link to="/resources">Resources</Link></div>
            <div className="navbar-element"><Link to="/exercises">Exercises</Link></div>
            <div className="navbar-element"><Link to="/analytics">Analytics</Link></div>
        </div>
    )
}

export default Navbar;