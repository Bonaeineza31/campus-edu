import { Link } from 'react-router-dom'
import './ComingSoon.css'

export default function ComingSoon({ programName }) {
  return (
    <div className="coming-soon-page">
      <span className="coming-soon-badge">The Campus EDU</span>
      <h1 className="coming-soon-title">Coming Soon</h1>
      <p className="coming-soon-program">{programName}</p>
      <p className="coming-soon-desc">
        We are currently building something great for this programme.
        Stay tuned — it will be worth the wait!
      </p>
      <Link to="/" className="coming-soon-back">
        ← Back to Home
      </Link>
      <div className="coming-soon-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
