import React from 'react'

export default function Hero({ isVisible }) {
  return (
    <section id="hero" className={`hero-section ${isVisible ? 'active' : ''}`}>
      <div className="hero-content">
        <div className="badge-banner animate-fade-in">
          <span className="badge-pulsar"></span>
          <span className="badge-label">THE CAMPUS EDU • Rwanda</span>
        </div>

        <h1 className="hero-title animate-slide-up">
          Room For <span className="text-gradient">Education</span>
        </h1>

        <p className="hero-lead animate-slide-up">
          An Education Support Organization designing innovative, complementary projects that work alongside schools, universities, and TVET institutions to strengthen learner outcomes.
        </p>

        <div className="hero-buttons animate-slide-up">
          <a href="#programmes" className="btn-primary" id="btn-explore-programmes">Explore Programmes</a>
          <a href="#who-we-are" className="btn-secondary" id="btn-learn-identity">Who We Are</a>
        </div>

        <div className="hero-years animate-fade-in">
          <span>Focus Period: <strong>2025 - 2026</strong></span>
        </div>
      </div>

      <div className="hero-image-panel animate-float">
        <div className="glowing-border">
          <div className="inner-display img-container">
            <img src="/happy_students.png" alt="Happy Rwandan students collaborating" className="hero-photo" />
            <div className="floating-badge fb-1">
              <span className="fb-icon">🎓</span>
              <div className="fb-text">
                <strong>Practical</strong>
                <span>Exposure</span>
              </div>
            </div>
            <div className="floating-badge fb-2">
              <span className="fb-icon">💼</span>
              <div className="fb-text">
                <strong>Career</strong>
                <span>Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
