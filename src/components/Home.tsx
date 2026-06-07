import './css/Home.css'

const experience = [
  {
    period: '2024 — Present',
    role: 'Software Engineer',
    company: 'Company Name',
    description: 'Brief description of responsibilities and impact.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Developer',
    company: 'Company Name',
    description: 'Brief description of responsibilities and impact.',
  },
  {
    period: '2021 — 2022',
    role: 'Junior Developer',
    company: 'Company Name',
    description: 'Brief description of responsibilities and impact.',
  },
]

export default function Home() {
  return (
    <main className="home">
      <section className="timeline">
        <div className="timeline-axis" />
        {experience.map((item, i) => {
          const isLeft = i % 2 === 0
          return (
            <div className={`timeline-entry ${isLeft ? 'left' : 'right'}`} key={i}>
              <div className="timeline-content">
                <h2 className="timeline-role">{item.role}</h2>
                <span className="timeline-company">{item.company}</span>
                <p className="timeline-desc">{item.description}</p>
              </div>
              <div className="timeline-connector">
                <div className="timeline-dot" />
              </div>
              <span className="timeline-period">{item.period}</span>
            </div>
          )
        })}
      </section>
    </main>
  )
}
