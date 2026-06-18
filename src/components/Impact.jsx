import React from 'react'

export default function Impact({ isVisible }) {
  return (
    <section id="impact" className={`impact-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header text-center">
        <span className="section-pre accent-secondary">Measurement</span>
        <h2 className="section-title">Our Impact Model</h2>
        <div className="section-bar center"></div>
        <p className="section-desc">
          The Campus EDU creates impact at three distinct levels, reinforcing both the individual learner and the wider system.
        </p>
      </div>

      <div className="impact-grid">
        <div className="impact-column">
          <div className="impact-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h3>Learner Level</h3>
          <div className="impact-divider blue"></div>
          <p>
            Students gain practical exposure, employability skills, career clarity, and access to tools—outcomes that directly improve their readiness for work and life after school.
          </p>
        </div>

        <div className="impact-column">
          <div className="impact-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3>Institutional Level</h3>
          <div className="impact-divider orange"></div>
          <p>
            Schools, universities, and TVET centers benefit from complementary programming that strengthens their graduates' outcomes without adding burden to their systems.
          </p>
        </div>

        <div className="impact-column">
          <div className="impact-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h3>System Level</h3>
          <div className="impact-divider blue"></div>
          <p>
            By documenting gaps and testing solutions, we contribute evidence and models that can inform education policy and practice across Rwanda.
          </p>
        </div>
      </div>
    </section>
  )
}
