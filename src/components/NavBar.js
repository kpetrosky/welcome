// src/components/Navbar.js
import React from "react";
import "./NavBar.css"; // Use the correct file name with a capital 'N'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/expectations">Expectations</a>
        </li>
        <li className="navbar-item">
          <a href="/GetToKnow">Get To know</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
