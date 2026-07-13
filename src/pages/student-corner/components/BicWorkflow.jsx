const steps = [
  { week: 'Wk 1', title: 'Open Call', desc: 'Applications open (1 week)' },
  { week: 'Wk 2', title: 'Selection', desc: 'Review → Top 20 shortlisted' },
  { week: 'Wk 3', title: 'Pitch', desc: 'Short pitch session · Top 5 finalists chosen' },
  { week: 'Wk 4', title: 'Bootcamp', desc: 'Mentorship & pitch coaching for Top 5' },
  { week: 'Thu (Wk 3)', title: 'Final', desc: 'Live competition at Career Dialogue', final: true }
]

export default function BicWorkflow() {
  return (
    <div className="bic-workflow">
      <div className="bic-steps">
        {steps.map((s, i) => (
          <div className="bic-step-group" key={s.title}>
            <div className={`bic-step ${s.final ? 'bic-step-final' : ''}`}>
              <span className="bic-step-week">{s.week}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="bic-step-arrow" aria-hidden="true">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="bic-loop">
        <span className="bic-loop-icon" aria-hidden="true">↻</span>
        <div>
          <h4>Next Cycle</h4>
          <p>Winners announced — new call launches the same day</p>
        </div>
      </div>
    </div>
  )
}
