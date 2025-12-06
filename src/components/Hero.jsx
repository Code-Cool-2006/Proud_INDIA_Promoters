import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <span className="hero-subtitle">Building The Future</span>
        <h1 className="hero-title">
          Excellence in <br />
          <span className="text-highlight">Construction</span>
        </h1>
        <p className="hero-description">
          Proud India Promoters delivers premium construction services with a focus on quality, innovation, and sustainability. We build structures that stand the test of time.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Our Work</a>
          <a href="#contact" className="btn btn-outline hero-btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
