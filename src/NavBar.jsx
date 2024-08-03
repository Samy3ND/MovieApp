// src/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Movies Hub</div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="menu-icon-line"></span>
        <span className="menu-icon-line"></span>
        <span className="menu-icon-line"></span>
      </label>
      <ul className="navbar-links">
        <li><a href="#Genre">Genre</a></li>
        <li><a href="#Country">Country</a></li>
        <li><a href="#Year">Year</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
