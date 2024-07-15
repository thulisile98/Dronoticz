import React, { useState } from 'react';


const ToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-container ${isMenuOpen ? 'open' : ''}`}>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span> 
      </div>
      <div class="logo">
          <span class="first-letter">D</span>
          <span class="second-letter">Z</span>
        </div>
      
      <div className={`menu-links ${isMenuOpen ? 'show' : ''}`}>
        <a href="about-us">ABOUT</a>
        <a href="articles">ARTICLES</a>
        <button type="button" className="button1">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default ToggleMenu;
