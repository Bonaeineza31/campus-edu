import { useState } from 'react'
import '../student-corner.css'

/* ─── Role configuration ─────────────────────────────────────────────────── */
const ROLE_CONFIG = {
  Mentor: {
    emoji: '🎓',
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
    emoji: '⚖️',
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
    emoji: '🎤',
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
    emoji: '🚀',
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
    emoji: '🤝',
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
    emoji: '💡',
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
      <div className="sc-modal-content rm-modal" onClick={e => e.stopPropagation()}>
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
              <span className="rm-emoji">{config.emoji}</span>
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
