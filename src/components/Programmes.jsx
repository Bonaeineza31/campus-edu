import React, { useState } from 'react'

export default function Programmes({ isVisible }) {
  const [activeTab, setActiveTab] = useState('all')
  const [expandedProgram, setExpandedProgram] = useState(null)

  const programs = [
    {
      id: 'soft-skills',
      title: 'Soft Skills Lab',
      tag: 'Employability',
      description: 'Delivers practical, transferable skills like communication, collaboration, critical thinking, and workplace navigation that formal curricula often underserve.',
      format: 'Structured workshops and simulations delivered in partnership with institutions.',
      outcome: 'Learners gain confidence and competence in the interpersonal skills employers rank as their top hiring criteria.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 'mobile-campus',
      title: 'Mobile Campus',
      tag: 'Access',
      description: 'Takes education support directly to schools and communities, removing geographic barriers and bringing premium career resources outside urban zones.',
      format: 'A mobile unit that brings career resources, skill-building sessions, and mentorship to locations outside major urban centers.',
      outcome: 'Learners in underserved areas receive the same quality of exposure and support as those in Kigali.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    },
    {
      id: 'student-corner',
      title: 'Student Corner',
      tag: 'Dialogue & Network',
      description: 'Creates structured spaces for career dialogue, entrepreneurial thinking, and mentorship through a three-component framework.',
      components: [
        'Structured Career Dialogue — facilitated conversations connecting students with industry professionals.',
        'Entrepreneurial Innovation Challenge — a competition that develops problem-solving and business thinking.',
        'Exhibition-Mentorship Session — learners present work and receive direct feedback from mentors.'
      ],
      format: 'Interactive student forums, competitions, and mentor exhibitions.',
      outcome: 'Students develop career clarity and professional networks before graduation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      id: 'career-tour',
      title: 'Career Tour',
      tag: 'Exposure',
      description: 'A cohort-based programme where students visit their dream companies to see roles up close, meet teams, and understand the work they will do in the future.',
      format: 'Structured company visits with pre-visit preparation, on-site immersion, and post-visit reflection sessions.',
      whyItMatters: 'Students make better career decisions when they have seen—not just heard about—the realities of professional work. Career Tour replaces assumption with experience.',
      outcome: 'Learners gain practical exposure that directly informs their academic and career choices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    },
    {
      id: 'tvet-digital',
      title: 'TVET Digital Lab',
      tag: 'Digital Learning',
      description: 'An online practical lab across different TVET disciplines, giving learners a way to practise and build competence beyond the physical classroom.',
      format: 'A digital platform with guided practical exercises, simulations, and skill assessments aligned to TVET curricula.',
      whyItMatters: 'TVET learners often have limited workshop hours and no way to practise outside school. This lab extends their learning time without requiring physical infrastructure.',
      outcome: 'TVET students develop stronger technical competence through accessible, repeatable digital practice.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'campus-store',
      title: 'The Campus Store',
      tag: 'Access to Tools',
      description: 'Improves access to learning materials—like loaned laptops—through innovative agreements that lower upfront barriers for students.',
      format: 'A tool lending framework utilizing deferred-payment models.',
      modelExploration: 'We are actively researching approaches such as Income Share Agreements (ISA) and other deferred-payment models that align cost with future earning capacity.',
      whyItMatters: 'Many students cannot afford the tools they need to learn effectively. Traditional purchase models exclude them. The Campus Store creates pathways to access without immediate financial burden.',
      outcome: 'Students gain access to essential learning tools, enabling full participation in digital and academic life.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="prog-icon">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      )
    }
  ]

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.tag.toLowerCase().includes(activeTab) || p.title.toLowerCase().includes(activeTab))

  return (
    <section id="programmes" className={`programmes-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header text-center">
        <span className="section-pre">Initiatives</span>
        <h2 className="section-title">Our Programmes</h2>
        <div className="section-bar center"></div>
        <p className="section-desc">
          Each programme is a standalone project designed to address a specific gap in the learner journey.
        </p>
      </div>

      <div className="program-tabs">
        <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Projects</button>
        <button className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills & Training</button>
        <button className={`tab-btn ${activeTab === 'access' ? 'active' : ''}`} onClick={() => setActiveTab('access')}>Access & Tools</button>
        <button className={`tab-btn ${activeTab === 'exposure' ? 'active' : ''}`} onClick={() => setActiveTab('exposure')}>Exposure</button>
      </div>

      <div className="programs-grid">
        {filteredPrograms.map((prog) => {
          const isExpanded = expandedProgram === prog.id;
          return (
            <div key={prog.id} className={`program-card-detail ${isExpanded ? 'expanded' : ''}`}>
              <div className="card-top">
                <div className="card-icon-wrapper">
                  {prog.icon}
                </div>
                <span className="prog-tag-badge">{prog.tag}</span>
              </div>
              
              <h3 className="prog-title">{prog.title}</h3>
              <p className="prog-summary">{prog.description}</p>
              
              <div className="prog-collapsible-content">
                <div className="prog-detail-row">
                  <strong>Format:</strong>
                  <span>{prog.format}</span>
                </div>

                {prog.components && (
                  <div className="prog-detail-row components-row">
                    <strong>Components:</strong>
                    <ul>
                      {prog.components.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {prog.whyItMatters && (
                  <div className="prog-detail-row">
                    <strong>Why It Matters:</strong>
                    <span>{prog.whyItMatters}</span>
                  </div>
                )}

                {prog.modelExploration && (
                  <div className="prog-detail-row">
                    <strong>Model Exploration:</strong>
                    <span>{prog.modelExploration}</span>
                  </div>
                )}

                <div className="prog-detail-row outcome-row">
                  <strong>Expected Outcome:</strong>
                  <span>{prog.outcome}</span>
                </div>
              </div>

              <button 
                className="btn-card-toggle"
                onClick={() => setExpandedProgram(isExpanded ? null : prog.id)}
              >
                {isExpanded ? 'Read Less' : 'Learn More & Details'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`arrow-icon ${isExpanded ? 'up' : 'down'}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  )
}
