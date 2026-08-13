import { Fragment } from 'react'

const pillars = [
  {
    num: '01',
    title: 'Career Dialogue Series',
    subtitle: 'Monthly on the 3rd Thursday',
    description: 'A guest speaker who is an active professional in that edition\'s sector addresses participants, sharing practical insights and career pathways. This is complemented by a short presentation from the Student Corner Professional team giving a broader overview of the sector, its opportunities, and its trends.',
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
    subtitle: 'Monthly pitching competition',
    description: 'The shortlisted top 5 finalists pitch their business ideas to a panel of judges in a structured competition, assessed on innovation, feasibility, and quality of presentation. The winning idea is awarded a prize by the guest speaker, linking sector expertise to the recognition of student talent.',
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
    title: 'Exhibition',
    subtitle: 'Sector-specific showcase',
    description: 'Exhibitors drawn from the sector of focus showcase their work to participants and the guest speaker, giving students hands-on exposure to how the sector functions in practice and creating space for networking with industry players.',
    accent: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Mentorship Cohort',
    subtitle: 'Sector-specific ongoing support',
    description: 'At the close of each event, registration opens for a mentorship cohort tied to that edition\'s sector. Participants, particularly those with promising ideas from the BIC, enrol in a structured mentorship process where their ideas are shaped and developed further.',
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
            <p className="pillar-desc">{p.description}</p>
          </div>
          {i < pillars.length - 1 && (
            <div className="pillar-flow-arrow" aria-hidden="true">⇄</div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
