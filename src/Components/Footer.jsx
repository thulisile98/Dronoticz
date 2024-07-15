import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="fab" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fab" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faPinterest} className="fab" />
          </a>
        </div>
        <div className="contain">
          <div className="links">
            <a href="about-us">ABOUT US</a>
            <a href="articles">ARTICLES</a>
          </div>
          <button type="button" className="button2">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


