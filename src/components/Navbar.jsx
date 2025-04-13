import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed to NavLink for active styling
import { FaBars, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "../styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <h2 className="logo">Lepakshi Sodi</h2>
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        <FaBars />
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
            <FaUser /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
            <FaCode /> Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
            <FaProjectDiagram /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")} onClick={toggleMenu}>
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;