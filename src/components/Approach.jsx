import React from 'react'
import {
  MdAutoAwesome,
  MdTravelExplore,
  MdLockOpen,
  MdQueryStats,
  MdBiotech
} from 'react-icons/md'

export default function Approach({ isVisible }) {
  const approaches = [
    {
      title: 'Complementary',
      tagline: 'Reinforcement, Not Replacement',
      desc: 'We reinforce what institutions already do. We never duplicate or compete with schools, universities, or TVET centers.',
      icon: <MdAutoAwesome />
    },
    {
      title: 'Problem-driven',
      tagline: 'Evidence-based Gaps',
      desc: 'Each project responds to a documented, evidence-based gap in Rwanda\'s education-to-employment pipeline.',
      icon: <MdBiotech />
    },
    {
      title: 'Exposure-centered',
      tagline: 'Real-world Contact',
      desc: 'We prioritize real-world contact: workplace visits, industry mentors, hands-on practice, and professional dialogue.',
      icon: <MdTravelExplore />
    },
    {
      title: 'Access-focused',
      tagline: 'Removing Barriers',
      desc: 'We remove barriers to tools, information, and opportunities that learners need but systems don\'t always provide.',
      icon: <MdLockOpen />
    },
    {
      title: 'Outcome-oriented',
      tagline: 'Measurable Success',
      desc: 'Every project is designed with measurable indicators tied to employability, skill acquisition, or career clarity.',
      icon: <MdQueryStats />
    }
  ]

  return (
    <section id="approach" className={`approach-section ${isVisible ? 'active' : ''}`}>
      <div className="section-header text-center">
        <span className="section-pre approach-pre">Framework</span>
        <h2 className="section-title">Our Approach</h2>
        <div className="section-bar center"></div>
        <p className="section-desc">
          We operate through the <strong>Education Support Project Model</strong>, designing targeted interventions that address specific gaps in the learner journey.
        </p>
      </div>

      <div className="approach-card">
        {/* Timeline roadmap */}
        <div className="approach-timeline">
          {/* The flowing animated line behind everything */}
          <div className="timeline-rail">
            <div className="timeline-rail-fill"></div>
          </div>

          {approaches.map((app, idx) => (
            <div
              key={idx}
              className={`timeline-step ${idx % 2 === 0 ? 'step-up' : 'step-down'}`}
            >
              {/* Content card — above or below the line */}
              <div className="timeline-card">
                <span className="timeline-tagline">{app.tagline}</span>
                <h3 className="timeline-card-title">{app.title}</h3>
                <p className="timeline-card-desc">{app.desc}</p>
              </div>

              {/* The connector tail from card to dot */}
              <div className="timeline-tail"></div>

              {/* Center dot on the rail */}
              <div className="timeline-dot">
                <span className="timeline-dot-icon">{app.icon}</span>
                <span className="timeline-dot-num">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
