import { useState } from 'react'
import '../student-corner.css'

/* ─── Role configuration ─────────────────────────────────────────────────── */
const ROLE_CONFIG = {
  Mentor: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 3 2 8 12 13 22 8 12 3" />
        <path d="M6 10v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
        <line x1="22" y1="8" x2="22" y2="14" />
      </svg>
    ),
    color: '#4d90e8',
    tagline: 'Share your wisdom. Shape the next generation.',
    fields: [
      { id: 'expertise', label: 'Area of Expertise', type: 'text', placeholder: 'e.g. Tech, Finance, Healthcare', required: true },
      { id: 'experience', label: 'Years of Professional Experience', type: 'number', placeholder: 'e.g. 8', required: true, min: 1 },
      { id: 'availability', label: 'Preferred Mentorship Style', type: 'select', options: ['1-on-1 sessions', 'Group mentoring', 'Both'], required: true },
      { id: 'linkedin', label: 'LinkedIn / Portfolio URL', type: 'url', placeholder: 'https://linkedin.com/in/yourname' },
    ]
  },
  Judge: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
    color: '#7c3aed',
    tagline: 'Evaluate boldly. Elevate the best ideas.',
    fields: [
      { id: 'expertise', label: 'Judging Expertise / Sector', type: 'text', placeholder: 'e.g. Business, Innovation, Engineering', required: true },
      { id: 'pastJudging', label: 'Have you judged before?', type: 'select', options: ['Yes, multiple times', 'Yes, once or twice', 'No, first time'], required: true },
      { id: 'affiliation', label: 'Current Organization / Title', type: 'text', placeholder: 'e.g. CEO at XYZ Ltd', required: true },
      { id: 'criteria', label: 'What criteria matter most to you?', type: 'textarea', placeholder: 'e.g. Feasibility, market impact, team potential...', required: true },
    ]
  },
  Speaker: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
    color: '#e53e3e',
    tagline: 'Your voice can ignite a thousand ideas.',
    fields: [
      { id: 'topic', label: 'Proposed Talk Topic', type: 'text', placeholder: 'e.g. How I built my startup from zero', required: true },
      { id: 'format', label: 'Preferred Format', type: 'select', options: ['Keynote (30–45 min)', 'Panel discussion', 'Lightning talk (10 min)', 'Workshop'], required: true },
      { id: 'pastSpeaking', label: 'Previous speaking experience', type: 'textarea', placeholder: 'List events or conferences you\'ve spoken at...', required: false },
      { id: 'linkedin', label: 'LinkedIn / Portfolio / Bio URL', type: 'url', placeholder: 'https://...' },
    ]
  },
  Exhibitor: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    color: '#38a169',
    tagline: 'Show the world what you\'ve built.',
    fields: [
      { id: 'projectName', label: 'Project / Product Name', type: 'text', placeholder: 'e.g. AgroConnect App', required: true },
      { id: 'stage', label: 'Stage of Development', type: 'select', options: ['Idea / Concept', 'Prototype / MVP', 'Launched & growing', 'Scaling'], required: true },
      { id: 'sector', label: 'Industry / Sector', type: 'text', placeholder: 'e.g. Agri-tech, EdTech, FinTech', required: true },
      { id: 'teamSize', label: 'Team Size', type: 'number', placeholder: 'e.g. 3', min: 1 },
      { id: 'needs', label: 'What support do you need?', type: 'textarea', placeholder: 'e.g. Feedback, investors, media coverage...' },
    ]
  },
  Partner: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: '#ed8936',
    tagline: 'Build something bigger — together.',
    fields: [
      { id: 'orgName', label: 'Organization / Company Name', type: 'text', placeholder: 'Your organization', required: true },
      { id: 'partnerType', label: 'Partnership Type', type: 'select', options: ['Sponsor', 'Strategic partner', 'Media partner', 'Community partner', 'Other'], required: true },
      { id: 'contribution', label: 'What can you contribute?', type: 'textarea', placeholder: 'e.g. Funding, resources, networks, platforms...', required: true },
      { id: 'website', label: 'Organization Website', type: 'url', placeholder: 'https://yourorg.com' },
    ]
  },
  Innovator: {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: '#fbb03b',
    tagline: 'Got an idea? This is your stage.',
    fields: [
      { id: 'ideaName', label: 'Your Idea / Project Name', type: 'text', placeholder: 'e.g. SmartFarm Rwanda', required: true },
      { id: 'problemStatement', label: 'Problem you are solving', type: 'textarea', placeholder: 'Describe the problem in 2-3 sentences...', required: true },
      { id: 'sector', label: 'Sector / Industry', type: 'text', placeholder: 'e.g. Agriculture, Health, Education', required: true },
      { id: 'stage', label: 'Current Stage', type: 'select', options: ['Just an idea', 'Research phase', 'Building MVP', 'Already tested'], required: true },
      { id: 'teamStatus', label: 'Are you applying as a team?', type: 'select', options: ['Solo', 'Team of 2', 'Team of 3+'], required: true },
    ]
  }
}

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function RegistrationModal({ role, onClose }) {
  const config = ROLE_CONFIG[role] || {}
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors(prev => ({ ...prev, [id]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    // Base fields
    if (!formData.fullName?.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    // Role-specific required fields
    ;(config.fields || []).forEach(field => {
      if (field.required && !formData[field.id]?.trim?.()) {
        newErrors[field.id] = `${field.label} is required`
      }
    })
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const renderField = (field) => {
    const val = formData[field.id] || ''
    const err = errors[field.id]
    const baseClass = `sc-form-group${err ? ' has-error' : ''}`

    if (field.type === 'select') {
      return (
        <div className={baseClass} key={field.id}>
          <label htmlFor={field.id}>{field.label}{field.required && <span className="req-star"> *</span>}</label>
          <select
            id={field.id}
            value={val}
            onChange={e => handleChange(field.id, e.target.value)}
          >
            <option value="">Select…</option>
            {field.options.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          {err && <span className="form-error-msg">{err}</span>}
        </div>
      )
    }

    if (field.type === 'textarea') {
      return (
        <div className={baseClass} key={field.id}>
          <label htmlFor={field.id}>{field.label}{field.required && <span className="req-star"> *</span>}</label>
          <textarea
            id={field.id}
            rows={3}
            placeholder={field.placeholder}
            value={val}
            onChange={e => handleChange(field.id, e.target.value)}
          />
          {err && <span className="form-error-msg">{err}</span>}
        </div>
      )
    }

    return (
      <div className={baseClass} key={field.id}>
        <label htmlFor={field.id}>{field.label}{field.required && <span className="req-star"> *</span>}</label>
        <input
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
          value={val}
          min={field.min}
          onChange={e => handleChange(field.id, e.target.value)}
        />
        {err && <span className="form-error-msg">{err}</span>}
      </div>
    )
  }

  return (
    <div className="sc-modal-overlay" onClick={onClose}>
      <div className="sc-modal-content rm-modal" style={{ '--role-color': config.color }} onClick={e => e.stopPropagation()}>
        <button className="sc-modal-close" onClick={onClose} aria-label="Close">×</button>

        {submitted ? (
          <div className="sc-modal-success">
            <div className="rm-success-icon" style={{ color: config.color }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3>You're in! 🎉</h3>
            <p>
              Thanks for expressing your interest as a <strong>{role}</strong>.<br />
              We'll reach out before the next cycle begins.
            </p>
          </div>
        ) : (
          <form className="sc-modal-form" onSubmit={handleSubmit} noValidate>

            {/* Header */}
            <div className="rm-header" style={{ borderTop: `4px solid ${config.color}` }}>
              <span className="rm-icon" style={{ '--role-color': config.color }}>{config.icon}</span>
              <div>
                <h3 className="rm-title">Join as a <span style={{ color: config.color }}>{role}</span></h3>
                <p className="rm-tagline">{config.tagline}</p>
              </div>
            </div>

            {/* Base fields */}
            <div className="rm-section-label">Your Details</div>

            <div className={`sc-form-group${errors.fullName ? ' has-error' : ''}`}>
              <label htmlFor="rm-fullName">Full Name <span className="req-star">*</span></label>
              <input
                id="rm-fullName"
                type="text"
                placeholder="Jane Doe"
                value={formData.fullName || ''}
                onChange={e => handleChange('fullName', e.target.value)}
              />
              {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
            </div>

            <div className={`sc-form-group${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="rm-email">Email Address <span className="req-star">*</span></label>
              <input
                id="rm-email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email || ''}
                onChange={e => handleChange('email', e.target.value)}
              />
              {errors.email && <span className="form-error-msg">{errors.email}</span>}
            </div>

            <div className="sc-form-group">
              <label htmlFor="rm-phone">Phone Number</label>
              <input
                id="rm-phone"
                type="tel"
                placeholder="+250 780 000 000"
                value={formData.phone || ''}
                onChange={e => handleChange('phone', e.target.value)}
              />
            </div>

            {/* Role-specific fields */}
            {config.fields && config.fields.length > 0 && (
              <>
                <div className="rm-section-label" style={{ color: config.color }}>
                  {role} Details
                </div>
                {config.fields.map(renderField)}
              </>
            )}

            <button
              type="submit"
              className="sc-modal-submit"
              style={{ background: config.color }}
            >
              Submit My Interest →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
