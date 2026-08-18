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
  { label: 'Mentor',     emoji: '🎓', color: '#4d90e8', desc: 'Guide young innovators' },
  { label: 'Judge',      emoji: '⚖️', color: '#7c3aed', desc: 'Evaluate the best ideas' },
  { label: 'Speaker',    emoji: '🎤', color: '#e53e3e', desc: 'Inspire with your story' },
  { label: 'Exhibitor',  emoji: '🚀', color: '#38a169', desc: 'Showcase what you\'ve built' },
  { label: 'Partner',    emoji: '🤝', color: '#ed8936', desc: 'Grow together with us' },
  { label: 'Innovator',  emoji: '💡', color: '#fbb03b', desc: 'Bring your big idea' },
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
              <span className="sh-role-emoji">{r.emoji}</span>
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
