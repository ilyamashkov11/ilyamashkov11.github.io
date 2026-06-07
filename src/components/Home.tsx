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
  }
]

export default function Home() {
  return (
    <main className="home">
      <section className="page-section">
        <h3 className="section-label">About Me</h3>
        <p className="about-text">
          A brief introduction about yourself goes here. Talk about who you are,
          what you care about, and what drives your work.
        </p>
      </section>

      <section className="page-section">
        <h3 className="section-label">Experience</h3>
        <div className="timeline">
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
                  <div className={`timeline-dot${i === 0 ? ' present' : ''}`} />
                </div>
                <span className="timeline-period">{item.period}</span>
              </div>
            )
          })}
          <img src="/root-stem.png" alt="" className="timeline-illustration" />
        </div>
      </section>
    </main>
  )
}
