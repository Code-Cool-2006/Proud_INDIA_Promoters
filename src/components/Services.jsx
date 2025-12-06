import React from 'react';
import './Services.css';

const services = [
  {
    title: 'General Contracting',
    icon: '🏗️',
    description: 'Comprehensive construction services for commercial and residential projects, managing every detail from start to finish.'
  },
  {
    title: 'Design & Build',
    icon: '📐',
    description: 'Integrated design and construction services to streamline your project, saving time and costs while ensuring quality.'
  },
  {
    title: 'Renovation',
    icon: '🔨',
    description: 'Transforming existing spaces into modern, functional environments. Expert remodeling for homes and offices.'
  },
  {
    title: 'Project Management',
    icon: '📋',
    description: 'Professional project oversight ensuring your build stays on time, within budget, and meets the highest standards.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <span className="section-subtitle reveal">What We Do</span>
        <h2 className="section-title reveal delay-100">Premium Construction Services</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className={`service-card reveal delay-${(index + 2) * 100}`} key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
