import React from 'react'

export default function WhoWeAre({ isVisible }) {
  return (
    <section id="who-we-are" className={`who-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header">
        <span className="section-pre">Identity</span>
        <h2 className="section-title">Who We Are</h2>
        <div className="section-bar"></div>
      </div>

      <div className="who-grid">
        <div className="who-info">
          <h3 className="who-heading">Strengthening learner outcomes without duplicating existing systems.</h3>
          <p className="who-body">
            Based in Rwanda, <strong>The Campus EDU</strong> designs and implements innovative, complementary projects that work alongside schools, universities, and TVET institutions to reinforce learner outcomes.
          </p>
          <blockquote className="who-quote">
            "Our framework is built on one conviction: education systems don't need replacement—they need reinforcement through practical exposure, employability tools, and structured pathways that connect classrooms to careers."
          </blockquote>
        </div>

        <div className="identity-cards">
          <div className="identity-card what-we-are-not">
            <div className="card-header-status">
              <span className="status-indicator gray"></span>
              <h4>What We Are Not</h4>
            </div>
            <ul>
              <li>
                <span className="not-icon">✕</span>
                <div>
                  <strong>Not a school</strong>
                  <span>We do not replace standard classroom teaching or award academic diplomas.</span>
                </div>
              </li>
              <li>
                <span className="not-icon">✕</span>
                <div>
                  <strong>Not a training center</strong>
                  <span>We do not duplicate existing technical course operations.</span>
                </div>
              </li>
              <li>
                <span className="not-icon">✕</span>
                <div>
                  <strong>Not a lifelong learning institution</strong>
                  <span>Our operations are targeted specifically for transition milestones.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="identity-card what-we-are">
            <div className="card-header-status">
              <span className="status-indicator green"></span>
              <h4>What We Are</h4>
            </div>
            <p className="are-body">
              We are an <strong>Education Innovation Partner</strong>.
            </p>
            <p className="are-details">
              We design projects that fill the crucial space between what formal systems deliver and what the labor market demands in Rwanda.
            </p>
            <div className="are-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
