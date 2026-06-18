import React from 'react'

export default function Problems({ isVisible }) {
  const problems = [
    {
      title: 'Lack of Practical Exposure',
      desc: 'Graduates enter the job market without practical exposure to real workplaces, industries, or professional expectations.',
      badge: 'Exposure'
    },
    {
      title: 'Underdeveloped Soft Skills',
      desc: 'Soft skills—communication, collaboration, critical thinking—are underdeveloped despite being the top demand from employers.',
      badge: 'Interpersonal'
    },
    {
      title: 'Limited Career Guidance',
      desc: 'Career guidance is limited, leaving students to make uninformed decisions about their academic and professional futures.',
      badge: 'Direction'
    },
    {
      title: 'TVET Practical Gaps',
      desc: 'TVET learners lack accessible platforms for hands-on digital practice beyond physical workshop hours.',
      badge: 'Practice'
    },
    {
      title: 'Resource Barriers',
      desc: 'Access to basic learning tools (laptops, materials) remains a key barrier for many students.',
      badge: 'Tools'
    }
  ]

  return (
    <section id="problems" className={`problems-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header text-center">
        <span className="section-pre">The Challenge</span>
        <h2 className="section-title">The Problem We Are Solving</h2>
        <div className="section-bar center"></div>
        <p className="section-desc">
          Rwanda's education system has made remarkable progress. Yet, key structural gaps hinder the transition from school to employment.
        </p>
      </div>

      <div className="problems-card">
        <div className="problems-grid">
          {problems.map((prob, idx) => (
            <div key={idx} className="problem-card">
              <div className="problem-num">0{idx + 1}</div>
              <div className="problem-badge">{prob.badge}</div>
              <h3 className="problem-title">{prob.title}</h3>
              <p className="problem-desc-text">{prob.desc}</p>
            </div>
          ))}
        </div>

        <div className="problem-footer-note text-center">
          <p>
            <strong>Note:</strong> These are not failures of the education system—they are structural gaps that require dedicated, complementary interventions.
          </p>
        </div>
      </div>
    </section>
  )
}
