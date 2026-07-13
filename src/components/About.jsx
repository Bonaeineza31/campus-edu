import React from 'react'

export default function About({ isVisible }) {
  return (
    <section id="about" className={`about-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header">
        <span className="section-pre">Our Story</span>
        <h2 className="section-title">About The Campus EDU</h2>
        <div className="section-bar"></div>
      </div>

      <div className="about-grid">
        <div className="about-stats">
          <div className="about-stat-card">
            <span className="about-stat-number">1,074</span>
            <span className="about-stat-label">Students onboarded</span>
          </div>
          <div className="about-stat-card">
            <span className="about-stat-number">21</span>
            <span className="about-stat-label">Countries represented</span>
          </div>
          <div className="about-stat-card">
            <span className="about-stat-number">2021</span>
            <span className="about-stat-label">Founded in Rwanda</span>
          </div>
        </div>

        <div className="about-timeline">
          <div className="about-milestone">
            <div className="about-milestone-marker"></div>
            <div className="about-milestone-content">
              <span className="about-milestone-tag">2021 — The Beginning</span>
              <p>
                Founded in Rwanda, <strong>The Campus EDU</strong> began as an education consultancy
                firm dedicated to supporting international student recruitment and facilitating
                access to higher education opportunities in Rwanda.
              </p>
            </div>
          </div>

          <div className="about-milestone">
            <div className="about-milestone-marker"></div>
            <div className="about-milestone-content">
              <span className="about-milestone-tag">Building a Track Record</span>
              <p>
                Since its establishment, the organization has successfully onboarded
                <strong> 1,074 students from 21 countries</strong> into Rwandan universities and
                higher learning institutions, building extensive experience and networks across
                the education sector.
              </p>
            </div>
          </div>

          <div className="about-milestone">
            <div className="about-milestone-marker"></div>
            <div className="about-milestone-content">
              <span className="about-milestone-tag">A Strategic Shift</span>
              <p>
                Through this journey, The Campus EDU gained a deep understanding of the
                opportunities and challenges facing students, institutions, and the broader
                education ecosystem — inspiring a transition from a traditional education
                consultancy to an <strong>education support organization</strong> focused on
                designing and implementing transformative educational initiatives.
              </p>
            </div>
          </div>

          <div className="about-milestone">
            <div className="about-milestone-marker about-milestone-marker-current"></div>
            <div className="about-milestone-content">
              <span className="about-milestone-tag">Today</span>
              <p>
                The Campus EDU develops innovative projects that bridge the gap between
                <strong> students, education stakeholders, and the employment market</strong> —
                creating practical solutions that enhance student success, strengthen
                institutional collaboration, and improve graduate readiness for the future of work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
