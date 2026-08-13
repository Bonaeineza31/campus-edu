import { useState } from 'react'
import '../student-corner.css'

export default function RegistrationModal({ role, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now, simulate submission
    setSubmitted(true)
    setTimeout(() => {
      onClose()
    }, 2500)
  }

  return (
    <div className="sc-modal-overlay" onClick={onClose}>
      <div className="sc-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="sc-modal-close" onClick={onClose}>×</button>
        
        {submitted ? (
          <div className="sc-modal-success">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h3>Application Received!</h3>
            <p>Thank you for your interest in the {role} role. Our team will be in touch shortly.</p>
          </div>
        ) : (
          <form className="sc-modal-form" onSubmit={handleSubmit}>
            <div className="sc-modal-header">
              <h3>Apply to {role}</h3>
              <p>Join the next edition of The Campus EDU events.</p>
            </div>
            
            <div className="sc-form-group">
              <label>Full Name</label>
              <input type="text" required placeholder="Jane Doe" />
            </div>
            
            <div className="sc-form-group">
              <label>Email Address</label>
              <input type="email" required placeholder="jane@example.com" />
            </div>
            
            <div className="sc-form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+250 780 000 000" />
            </div>
            
            <div className="sc-form-group">
              <label>Organization / Company (Optional)</label>
              <input type="text" placeholder="Your organization name" />
            </div>
            
            <div className="sc-form-group">
              <label>Why are you interested in this role?</label>
              <textarea rows="4" required placeholder={`Briefly tell us how you'd like to contribute as a ${role}...`}></textarea>
            </div>
            
            <button type="submit" className="sc-modal-submit">Submit Application</button>
          </form>
        )}
      </div>
    </div>
  )
}
