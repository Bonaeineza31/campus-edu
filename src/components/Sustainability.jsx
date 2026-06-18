import React from 'react'
import {
  MdHandshake,
  MdPublic,
  MdCreditCard,
  MdBarChart,
  MdLightbulb
} from 'react-icons/md'

export default function Sustainability({ isVisible }) {
  const sustainabilityItems = [
    {
      title: 'Partnerships & Services',
      desc: 'Institutional partnerships and service contracts with schools, colleges, and universities.',
      icon: <MdHandshake />
    },
    {
      title: 'Project Funding',
      desc: 'Project-based funding from development organizations, foundations, and education partners.',
      icon: <MdPublic />
    },
    {
      title: 'Participant Contributions',
      desc: 'Affordable, subsidized student contributions where appropriate and feasible for specialized tracks.',
      icon: <MdCreditCard />
    },
    {
      title: 'Consultancy Services',
      desc: 'Advisory, implementation design, and capacity-building consultancy for education stakeholders.',
      icon: <MdBarChart />
    },
    {
      title: 'Grants & Innovation Funding',
      desc: 'Grant funding specifically designated for academic research, digital lab development, and innovation models.',
      icon: <MdLightbulb />
    }
  ]

  return (
    <section id="sustainability" className={`split-section ${isVisible ? 'active' : ''}`}>
      <div className="split-grid">
        
        {/* Target Beneficiaries */}
        <div className="beneficiaries-card-block">
          <div className="section-header">
            <span className="section-pre">Demographics</span>
            <h2 className="section-title">Target Beneficiaries</h2>
            <div className="section-bar"></div>
          </div>

          <div className="beneficiary-groups">
            <div className="ben-group">
              <h5>Primary Audience</h5>
              <ul>
                <li>Secondary school students preparing for higher education or work</li>
                <li>University students seeking career exposure and employability skills</li>
                <li>TVET learners needing digital practice platforms and workplace readiness</li>
                <li>Recent graduates navigating the transition to employment</li>
              </ul>
            </div>

            <div className="ben-group">
              <h5>Secondary Audience</h5>
              <ul>
                <li>Education institutions seeking complementary support for their learners</li>
                <li>Employers looking for work-ready graduates</li>
                <li>Education partners and policymakers interested in evidence-based interventions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sustainability Model */}
        <div className="sustainability-card-block">
          <div className="section-header">
            <span className="section-pre">Resiliency</span>
            <h2 className="section-title">Sustainability Model</h2>
            <div className="section-bar"></div>
          </div>

          <p className="sust-desc">
            The Campus EDU operates a hybrid sustainability model to ensure long-term, independent delivery of our core programmes:
          </p>

          <div className="sustainability-grid">
            {sustainabilityItems.map((item, idx) => (
              <div key={idx} className="sust-item">
                <div className="sust-icon-wrapper">
                  {item.icon}
                </div>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
