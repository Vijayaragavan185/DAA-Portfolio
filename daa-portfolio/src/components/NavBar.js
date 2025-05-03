import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">DAA Portfolio</div>
        
        <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#experiments" onClick={closeMenu}>Lab Experiments</a></li>
          <li><a href="#project" onClick={closeMenu}>Project</a></li>
          <li><a href="#coding" onClick={closeMenu}>Coding Achievements</a></li>
        </ul>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
