import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">DAA Portfolio</div>
          <p className="footer-tagline">B.Tech CSE Core | SRM University</p>
          
          <div className="footer-contact">
            <div className="contact-item">
              <FaEnvelope />
              <span>your.email@srmist.edu.in</span>
            </div>
          </div>
          
          <div className="footer-social">
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} | Design and Analysis of Algorithms Portfolio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
