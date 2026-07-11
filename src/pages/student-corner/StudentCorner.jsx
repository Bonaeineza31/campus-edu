import { Link } from 'react-router-dom'
import './student-corner.css'

export default function StudentCorner() {
  return (
    <div className="sc-page">
      {/* Top navigation bar */}
      <nav className="sc-topbar">
        <a href="/" className="sc-topbar-brand">THE CAMPUS EDU</a>
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

      {/* Content area — ready for you to fill in */}
      <main className="sc-content">
        {/* 
          ┌─────────────────────────────────────────┐
          │  Your Student Corner content goes here   │
          │  Add components inside src/pages/        │
          │  student-corner/components/              │
          └─────────────────────────────────────────┘
        */}
        <div className="sc-placeholder">
          <h3>Content Coming Soon</h3>
          <p>This is your Student Corner page — ready for content!</p>
        </div>
      </main>
    </div>
  )
}
