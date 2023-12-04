import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="px-3 py-2 m-3 rounded-lg bg-white/60 animate-pulse [animation-delay:_0ms] hover:bg-white/80 cursor-pointer backdrop-blur-lg">
        <Link to="/">Home</Link>
      </div>
      <div className="px-3 py-2 m-3 rounded-lg bg-white/60 animate-pulse [animation-delay:_400ms] hover:bg-white/80 cursor-pointer backdrop-blur-lg">
        <Link to="/resources">Resources</Link>
      </div>
      <div className="px-3 py-2 m-3 rounded-lg bg-white/60 animate-pulse [animation-delay:_800ms] hover:bg-white/80 cursor-pointer backdrop-blur-lg">
        <Link to="/exercises">Exercises</Link>
      </div>
      <div className="px-3 py-2 m-3 rounded-lg bg-white/60 animate-pulse [animation-delay:_1200ms] hover:bg-white/80 cursor-pointer backdrop-blur-lg">
        <Link to="/analytics">Analytics</Link>
      </div>
    </div>
  );
}

export default Navbar;
