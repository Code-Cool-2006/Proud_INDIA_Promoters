import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <a href="#" className="footer-logo">Proud India<span className="logo-accent">Promoters</span></a>
          <p className="footer-desc">
            Building excellence since 1995. We are committed to delivering high-quality construction solutions for residential and commercial clients.
          </p>
          <div className="social-links">
            <a href="#">FB</a>
            <a href="#">TW</a>
            <a href="#">IN</a>
            <a href="#">LK</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">General Contracting</a></li>
            <li><a href="#">Design & Build</a></li>
            <li><a href="#">Renovations</a></li>
            <li><a href="#">Project Management</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Apex Construct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
