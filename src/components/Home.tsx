import './Home.css'

export default function Home() {
  return (
    <main className="home" id="home">
      <section className="hero">
        <h1>Hi, I'm Ilya 👋</h1>
        <p>I build things for the web.</p>
        <a className="btn" href="#projects">See my work</a>
      </section>

      <section className="section" id="about">
        <h2>About</h2>
        <p>A little bit about me goes here.</p>
      </section>

      <section className="section" id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Project One</h3>
            <p>Short description of the project.</p>
            <a href="#">View →</a>
          </div>
          <div className="project-card">
            <h3>Project Two</h3>
            <p>Short description of the project.</p>
            <a href="#">View →</a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Reach me at <a href="mailto:you@email.com">you@email.com</a></p>
      </section>
    </main>
  )
}
