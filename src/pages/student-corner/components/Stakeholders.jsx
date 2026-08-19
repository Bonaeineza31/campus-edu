import { useState } from 'react'
import RegistrationModal from './RegistrationModal'

const groups = [
  {
    title: 'Government institutions & TVETs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="22" x2="21" y2="22" />
        <line x1="6" y1="18" x2="6" y2="11" />
        <line x1="10" y1="18" x2="10" y2="11" />
        <line x1="14" y1="18" x2="14" y2="11" />
        <line x1="18" y1="18" x2="18" y2="11" />
        <polygon points="12 2 20 7 4 7" />
      </svg>
    )
  },
  {
    title: 'Universities & innovation hubs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    )
  },
  {
    title: 'Private sector, companies & startups',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    )
  },
  {
    title: 'Development partners & NGOs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    )
  },
  {
    title: 'Investors & professional bodies',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    )
  }
]

const roles = [
  {
    label: 'Mentor', color: '#4d90e8', desc: 'Guide young innovators',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 3 2 8 12 13 22 8 12 3" />
        <path d="M6 10v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
        <line x1="22" y1="8" x2="22" y2="14" />
      </svg>
    )
  },
  {
    label: 'Judge', color: '#7c3aed', desc: 'Evaluate the best ideas',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 2h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    )
  },
  {
    label: 'Speaker', color: '#e53e3e', desc: 'Inspire with your story',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    )
  },
  {
    label: 'Exhibitor', color: '#38a169', desc: 'Showcase what you\'ve built',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    )
  },
  {
    label: 'Partner', color: '#ed8936', desc: 'Grow together with us',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    label: 'Innovator', color: '#fbb03b', desc: 'Bring your big idea',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    )
  },
]

export default function Stakeholders() {
  const [selectedRole, setSelectedRole] = useState(null)

  return (
    <div className="stakeholders-block">

      {/* Who we invite */}
      <div className="stakeholders-groups">
        {groups.map((g) => (
          <div className="stakeholder-card" key={g.title}>
            <div className="stakeholder-icon">{g.icon}</div>
            <span>{g.title}</span>
          </div>
        ))}
      </div>

      {/* Participation CTA */}
      <div className="sh-participate">
        <div className="sh-participate-header">
          <span className="sh-participate-spark">✨</span>
          <div>
            <h4 className="sh-participate-title">Want to participate?</h4>
            <p className="sh-participate-sub">
              Roles vary depending on the month's sector — pick yours and let's connect!
            </p>
          </div>
        </div>

        <div className="sh-role-grid">
          {roles.map((r) => (
            <button
              key={r.label}
              className="sh-role-card"
              style={{ '--role-color': r.color }}
              onClick={() => setSelectedRole(r.label)}
            >
              <span className="sh-role-icon">{r.icon}</span>
              <span className="sh-role-label">{r.label}</span>
              <span className="sh-role-desc">{r.desc}</span>
              <span className="sh-role-arrow">→</span>
            </button>
          ))}
        </div>
      </div>

      {selectedRole && (
        <RegistrationModal
          role={selectedRole}
          onClose={() => setSelectedRole(null)}
        />
      )}
    </div>
  )
}
