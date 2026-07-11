import { Link } from 'react-router-dom'
import ThreePillars from './components/ThreePillars'
import BicWorkflow from './components/BicWorkflow'
import MonthlyCycle from './components/MonthlyCycle'
import MonthlyThemes from './components/MonthlyThemes'
import Stakeholders from './components/Stakeholders'
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
        </section>

        {/* Monthly cycle wheel */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">The Rhythm</span>
            <h2 className="sc-section-title">Monthly Innovation Cycle</h2>
            <div className="sc-section-bar"></div>
          </div>
          <MonthlyCycle />
        </section>

        {/* Monthly themes */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">12 Themes, 12 Months</span>
            <h2 className="sc-section-title">Monthly Themes for Career Dialogues</h2>
            <div className="sc-section-bar"></div>
            <p className="sc-section-desc">
              One theme drives Career Dialogue &amp; BIC focus each month, maximizing
              stakeholder relevance and national alignment.
            </p>
          </div>
          <MonthlyThemes />
        </section>

        {/* Stakeholder engagement */}
        <section className="sc-section">
          <div className="sc-section-header text-center">
            <span className="sc-section-pre">Stakeholder Engagement</span>
            <h2 className="sc-section-title">Invited each month, by theme</h2>
            <div className="sc-section-bar"></div>
          </div>
          <Stakeholders />
        </section>

        {/* Closing CTA */}
        <section className="sc-cta">
          <h3>Ready to be part of the next cycle?</h3>
          <p>Applications open every month — bring your idea, your voice, or your network.</p>
          <Link to="/#contact" className="sc-cta-btn">Connect With Us</Link>
        </section>
      </main>
    </div>
  )
}
