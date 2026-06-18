import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Footer & Contact */}
      <footer id="contact" className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-wrapper">
                <img src="/logo.jpg" alt="The Campus EDU Logo" className="footer-logo" />
              </div>
              <div className="logo-text">
                <span className="logo-title">THE CAMPUS <span className="logo-highlight">EDU</span></span>
                <span className="logo-subtitle">ROOM FOR EDUCATION</span>
              </div>
            </div>
            <p className="footer-tagline">
              Bridging classroom and careers through innovative, complementary projects in Rwanda.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#who-we-are">Who We Are</a></li>
              <li><a href="#problems">The Problem</a></li>
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#programmes">Programmes</a></li>
              <li><a href="#impact">Our Impact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Kigali, Rwanda</span>
            </p>
            <p className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <a href="https://www.thecampusedu.com" target="_blank" rel="noopener noreferrer">www.thecampusedu.com</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Campus EDU. All rights reserved.</p>
          <p className="footer-credit">Designed to Complement Education Systems in Rwanda • 2025 - 2026</p>
        </div>
      </footer>
    </>
  )
}
