const weeks = [
  {
    label: 'Week 1',
    title: 'Call for Applications',
    desc: 'Opens · closes Thursday of the 2nd week',
    pos: 'top'
  },
  {
    label: 'Week 2',
    title: 'Application Review',
    desc: 'Top 20 → Short Pitch on Wednesday of the 3rd week',
    pos: 'right'
  },
  {
    label: 'Week 3 (Wed)',
    title: 'Bootcamp',
    desc: 'Pitch coaching & mentorship on Wednesday of the 4th week',
    pos: 'bottom'
  },
  {
    label: 'Week 4 (Thu)',
    title: 'Career Dialogue + BIC Final',
    desc: 'Plus institutional exhibition, Thursday of the 1st week',
    pos: 'left'
  }
]

export default function MonthlyCycle() {
  return (
    <div className="cycle-wheel-wrap">
      <div className="cycle-ring" aria-hidden="true"></div>
      <div className="cycle-hub">
        <span className="cycle-hub-icon" aria-hidden="true">↻</span>
        <strong>Continuous Mentorship</strong>
        <span>runs throughout</span>
      </div>
      {weeks.map((w) => (
        <div className={`cycle-node cycle-node-${w.pos}`} key={w.label}>
          <span className="cycle-node-label">{w.label}</span>
          <h4>{w.title}</h4>
          <p>{w.desc}</p>
        </div>
      ))}
      <p className="cycle-footnote">
        ↻ Friday onward: next cycle launches · Continuous Mentorship runs throughout ↻
      </p>
    </div>
  )
}
