const themes = [
  'Entrepreneurship & Job Creation Opportunities',
  'Tourism & Hospitality',
  'Finance & Investment',
  'Agriculture & Food Systems',
  'Health',
  'Digital Transformation & ICT',
  'Education System',
  'Creative Economy',
  'Media',
  'Infrastructure',
  'Transport & Logistics',
  'Governance & Public Relations'
]

export default function MonthlyThemes() {
  return (
    <div className="themes-grid">
      {themes.map((theme, i) => (
        <div className="theme-chip" key={theme}>
          <span className="theme-num">{String(i + 1).padStart(2, '0')}</span>
          <span className="theme-title">{theme}</span>
        </div>
      ))}
    </div>
  )
}
