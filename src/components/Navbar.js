import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Univox</div>
      <ul className="navbar-menu">
        <li><a href="/train">Train</a></li>
        <li><a href="/test">Test</a></li>
        <li><a href="/past">Past</a></li>
        <li><a href="/help">Help</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
