import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info reveal-left">
            <span className="section-subtitle" style={{textAlign: 'left'}}>Contact Us</span>
            <h2 className="section-title" style={{textAlign: 'left', color: '#fff'}}>Let's Build Your Vision</h2>
            <p className="contact-text">
              Ready to start your next project? Get in touch with us today for a free consultation and quote.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Head Office</h4>
                  <p>123 Construction Blvd, Build City, BC 90210</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Call Us</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email Us</h4>
                  <p>info@proudindiapromoters.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper reveal-right delay-200">
             <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
               <h3>Send us a message</h3>
               <div className="form-group">
                 <input type="text" placeholder="Your Name" required />
               </div>
               <div className="form-group">
                 <input type="email" placeholder="Your Email" required />
               </div>
               <div className="form-group">
                 <select>
                   <option>Select Service</option>
                   <option>General Contracting</option>
                   <option>Renovation</option>
                   <option>Design & Build</option>
                   <option>Other</option>
                 </select>
               </div>
               <div className="form-group">
                 <textarea rows="4" placeholder="Project Details" required></textarea>
               </div>
               <button type="submit" className="btn btn-primary btn-block">Send Message</button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
