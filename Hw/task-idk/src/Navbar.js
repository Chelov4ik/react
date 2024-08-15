import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Baku</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">City</Link></li>
        <li><Link to="/famous-landmark">Landmark</Link></li>
        <li><Link to="/other-landmarks">landmarks</Link></li>
        <li><Link to="/photos">City's photos</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
