import { Fragment } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Career Dialogue',
    subtitle: 'Monthly flagship event',
    lines: ['3rd Thursday', 'Keynotes · exhibitions · networking'],
    accent: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Business Innovation Challenge',
    short: 'BIC',
    subtitle: 'Monthly startup competition',
    lines: ['Idea → Seed → MVP tracks', 'Pitch · judge · award'],
    accent: 'gold',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0z" />
        <path d="M17 4h3a2 2 0 0 1-2 4" />
        <path d="M7 4H4a2 2 0 0 0 2 4" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Career Exhibition and mentorship',
    short: 'Online Course',
    subtitle: 'Year-round, for all applicants',
    lines: ['Coaching · training · community', 'Wraps around pillars 1 & 2'],
    accent: 'wrap',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    )
  }
]

export default function ThreePillars() {
  return (
    <div className="pillars-flow">
      {pillars.map((p, i) => (
        <Fragment key={p.title}>
          <div className={`pillar-card accent-${p.accent}`}>
            <span className="pillar-num">{p.num}</span>
            <div className="pillar-icon">{p.icon}</div>
            <h3 className="pillar-title">
              {p.title}
              {p.short && <span className="pillar-short"> ({p.short})</span>}
            </h3>
            <p className="pillar-subtitle">{p.subtitle}</p>
            <div className="pillar-lines">
              {p.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
          {i < pillars.length - 1 && (
            <div className="pillar-flow-arrow" aria-hidden="true">⇄</div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
