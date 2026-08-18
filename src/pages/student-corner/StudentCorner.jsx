import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThreePillars from './components/ThreePillars'
import Stakeholders from './components/Stakeholders'
import BicApplicationForm from './components/BicApplicationForm'
import stakeholderImage from '../../assets/slide6.png'
import ctaImage from '../../assets/slide1.png'
import './student-corner.css'

export default function StudentCorner() {
  const [isBicFormOpen, setIsBicFormOpen] = useState(false)

  return (
    <div className="sc-page">
      {/* Top navigation bar */}
      <nav className="sc-topbar">
        <a href="/" className="sc-topbar-brand">
          <img src="/logo.png" alt="The Campus EDU Logo" className="sc-topbar-logo" />
          THE CAMPUS EDU
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button 
            className="bic-btn bic-btn-primary glowing-btn" 
            onClick={() => setIsBicFormOpen(true)}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            Apply Now for BIC
          </button>
          <Link to="/" className="sc-topbar-back">← Back to Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="sc-hero">
        <span className="sc-hero-badge">Programme</span>
        <h1 className="sc-hero-title">
          Student <span>Corner</span>
        </h1>
        <h2 className="sc-hero-slogan">From Campus to Career</h2>
        <p className="sc-hero-desc">
          Student Corner initiative by The Campus EDU, which aims to bridge the gap between Rwandan university education and professional readiness. The initiative features four core pillars—Career Dialogue Series, Business Innovation Challenge, Exhibition, and Mentorship.
        </p>
        <div style={{ marginTop: '30px' }}>
          <button 
            className="bic-btn bic-btn-primary" 
            onClick={() => setIsBicFormOpen(true)}
            style={{ padding: '14px 32px', fontSize: '1.1rem' }}
          >
            Apply for BIC Challenge
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="sc-banner">
        <div className="sc-collage sc-collage-single">
          <div className="sc-collage-main">
            <img src="/happy_students.png" alt="Students collaborating at a career readiness and innovation session" />
          </div>
        </div>
      </div>

      <main className="sc-content">
        {/* Methodology intro */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">Methodology</span>
            <h2 className="sc-section-title">
              One Ecosystem, Four Pillars, <span>One Monthly Cycle</span>
            </h2>
            <div className="sc-section-bar"></div>
            <p className="sc-section-desc">
              Every month, Student Corner fuses career exposure, entrepreneurship competition,
              and Career Exhibition and Mentorship into a single, self-renewing innovation cycle for
              university students.
            </p>
          </div>
        </section>

        {/* Three pillars */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">The Four Pillars</span>
            <h2 className="sc-section-title">How it all fits together</h2>
            <div className="sc-section-bar"></div>
          </div>
          <ThreePillars />
        </section>

        {/* Event Highlights (Campus Quiz) */}
        <section className="sc-section">
          <div className="sc-inline-banner">
            <div className="sc-collage sc-collage-sm">
              <div className="sc-collage-main">
                <img src="/campus_quiz_1.jpg" alt="Students engaging at The Campus Quiz 2025 event" />
              </div>
              <div className="sc-collage-accent accent-left">
                <img src="/campus_quiz_2.jpg" alt="A speaker addressing students at The Campus Quiz 2025" />
              </div>
            </div>
            <div className="sc-event-desc">
              <h4>Event Highlight: The Campus Quiz</h4>
              <p>Creating an informed and intellectually driven student community.</p>
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
      {/* Render the BIC Form Modal */}
      {isBicFormOpen && (
        <BicApplicationForm onClose={() => setIsBicFormOpen(false)} />
      )}
    </div>
  )
}
