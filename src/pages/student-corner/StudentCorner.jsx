import { Link } from 'react-router-dom'
import ThreePillars from './components/ThreePillars'
import BicWorkflow from './components/BicWorkflow'
import Stakeholders from './components/Stakeholders'
import campusImage from '../../assets/slide2.png'
import bicImage from '../../assets/slide3.png'
import workshopImage from '../../assets/slide4.png'
import stakeholderImage from '../../assets/slide6.png'
import ctaImage from '../../assets/slide1.png'
import './student-corner.css'

export default function StudentCorner() {
  return (
    <div className="sc-page">
      {/* Top navigation bar */}
      <nav className="sc-topbar">
        <a href="/" className="sc-topbar-brand">
          <img src="/logo.png" alt="The Campus EDU Logo" className="sc-topbar-logo" />
          THE CAMPUS EDU
        </a>
        <Link to="/" className="sc-topbar-back">← Back to Home</Link>
      </nav>

      {/* Hero */}
      <header className="sc-hero">
        <span className="sc-hero-badge">Programme</span>
        <h1 className="sc-hero-title">
          Student <span>Corner</span>
        </h1>
        <p className="sc-hero-desc">
          Structured spaces for career dialogue, entrepreneurial thinking, 
          and mentorship through a three-component framework.
        </p>
      </header>

      {/* Banner collage */}
      <div className="sc-banner">
        <div className="sc-collage">
          <div className="sc-collage-main">
            <img src="/happy_students.png" alt="Students collaborating at a career readiness and innovation session" />
          </div>
          <div className="sc-collage-accent accent-right">
            <img src={campusImage} alt="Students walking across the innovation hub campus" />
          </div>
          <span className="sc-collage-caption">Career readiness &amp; innovation, in session</span>
        </div>
      </div>

      <main className="sc-content">
        {/* Methodology intro */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">Methodology</span>
            <h2 className="sc-section-title">
              One Ecosystem, Three Pillars, <span>One Monthly Cycle</span>
            </h2>
            <div className="sc-section-bar"></div>
            <p className="sc-section-desc">
              Every month, Student Corner fuses career exposure, entrepreneurship competition,
              and continuous mentorship into a single, self-renewing innovation cycle for
              university students.
            </p>
          </div>
        </section>

        {/* Three pillars */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">The Three Pillars</span>
            <h2 className="sc-section-title">How it all fits together</h2>
            <div className="sc-section-bar"></div>
          </div>
          <ThreePillars />
        </section>

        {/* BIC workflow */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">Pillar 02</span>
            <h2 className="sc-section-title">Business Innovation Challenge — Workflow</h2>
            <div className="sc-section-bar"></div>
          </div>
          <BicWorkflow />
          <div className="sc-inline-banner">
            <div className="sc-collage sc-collage-sm">
              <div className="sc-collage-main">
                <img src={bicImage} alt="A student exploring an innovation challenge with immersive tech" />
              </div>
              <div className="sc-collage-accent accent-left">
                <img src={workshopImage} alt="Students receiving pitch coaching and mentorship during a bootcamp" />
              </div>
              <span className="sc-collage-caption">Bootcamp week — pitch coaching &amp; mentorship for the Top 5</span>
            </div>
          </div>
        </section>

        {/* Stakeholder engagement */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">Stakeholder Engagement</span>
            <h2 className="sc-section-title">Invited each month, by theme</h2>
            <div className="sc-section-bar"></div>
          </div>
          <div className="sc-split reverse">
            <div className="sc-split-media">
              <div className="sc-collage sc-collage-sm">
                <div className="sc-collage-main">
                  <img src={stakeholderImage} alt="Stakeholders networking at a mentorship symposium" />
                </div>
                <div className="sc-collage-accent accent-right">
                  <img src={ctaImage} alt="Students and mentors reviewing data during a design session" />
                </div>
              </div>
            </div>
            <div className="sc-split-content">
              <Stakeholders />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="sc-cta" style={{ backgroundImage: `url(${ctaImage})` }}>
          <div className="sc-cta-overlay"></div>
          <div className="sc-cta-inner">
            <h3>Ready to be part of the next cycle?</h3>
            <p>Applications open every month — bring your idea, your voice, or your network.</p>
            <Link to="/#contact" className="sc-cta-btn">Connect With Us</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
