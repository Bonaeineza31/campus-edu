import React from 'react'

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#" className="logo-container">
          <div className="logo-wrapper">
            <img src="/logo.jpg" alt="The Campus EDU Logo" className="header-logo" />
          </div>
          <div className="logo-text">
            <span className="logo-title">THE CAMPUS <span className="logo-highlight">EDU</span></span>
            <span className="logo-subtitle">ROOM FOR EDUCATION</span>
          </div>
        </a>

        <nav className="main-nav">
          <a href="#who-we-are">Who We Are</a>
          <a href="#problems">The Problem</a>
          <a href="#approach">Our Approach</a>
          <a href="#programmes">Programmes</a>
          <a href="#impact">Impact</a>
          <a href="#sustainability">Sustainability</a>
        </nav>

        <div className="header-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Toggle light and dark mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            id="btn-theme-toggle"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="theme-icon">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="theme-icon">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn-primary header-cta" id="link-header-contact">Connect With Us</a>
        </div>
      </div>
    </header>
  )
}
