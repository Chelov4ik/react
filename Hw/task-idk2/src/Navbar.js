import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Shakespeare</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shakespeare">About Shakespeare</Link></li>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/globe-theatre">Globe Theatre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
