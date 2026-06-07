import './css/Home.css'

const experience = [
  {
    period: 'Jun 2026 - Present',
    role: 'Techincal Consultant',
    company: 'DXC Technologies',
    description: '',
  },
  {
    period: 'Dec 2024 - Jun 2026',
    role: 'Application Engineer',
    company: 'Ministry of Justice, New Zealand',
    description: '',
  },
  {
    period: 'Dec 2023 - Dec 2024',
    role: 'Software Engineer',
    company: 'BAINZ Consulting Ltd.',
    description: '',
  },
  {
    period: 'Mar 2021 - May 2024',
    role: 'Student',
    company: 'Victoria University',
    description: '',
  },
  {
    period: 'Mar 2019 - Oct 2020',
    role: 'Student',
    company: 'The University of Auckland',
    description: `
    I started out with a major interest in physics and biology, so I did a double major with those. 
    However, after the first Covid 19 pandemic I realised that sadly this interest would not provide me with the career I wanted, 
    so after having done 2 full years I made the switch to Computer Science.`,
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
                  <div className="timeline-trigger">
                    <h2 className="timeline-role">{item.role}</h2>
                    <span className="timeline-company">{item.company}</span>
                    <p className="timeline-desc">{item.description}</p>
                  </div>
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

      <section className="page-section">
        <h3 className="section-label">Projects</h3>
        <p className="about-text">
          A collection of personal projects I have worked on.
        </p>
      </section>
    </main>
  )
}
