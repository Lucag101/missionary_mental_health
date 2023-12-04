import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center min-h-100">
      <div className="navbar-element animate-pulse">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-element animate-pulse" data-delay="400">
        <Link to="/resources">Resources</Link>
      </div>
      <div className="navbar-element animate-pulse" data-delay="800">
        <Link to="/exercises">Exercises</Link>
      </div>
      <div className="navbar-element animate-pulse" data-delay="1200">
        <Link to="/analytics">Analytics</Link>
      </div>
    </div>
  );
}

export default Navbar;
