import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/Logo.webp";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="Logo">
          <Link to = '/' ><img  src={Logo} alt="Logo" /></Link>
        </div>
        <div className={`menu-toggle ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#Home">About Me</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#ContactMe">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
