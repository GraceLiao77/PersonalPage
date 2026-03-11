import { useFadeIn } from '../hooks/useFadeIn'

export default function About() {
  const sectionRef = useFadeIn<HTMLElement>()

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-inner">
        <h3 className="section-label">About Me</h3>
        <h2 className="section-title">A little about me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a software engineer with a love for building things that matter.
              I enjoy working across the full stack — designing interfaces that feel natural
              and architecting systems that scale.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech, reading, or hunting
              for the perfect cup of coffee.
            </p>
            <div className="skills">
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Git</span>
            </div>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <span className="card-icon">🎓</span>
              <div>
                <strong>Education</strong>
                <p>B.S. Computer Science</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">💼</span>
              <div>
                <strong>Experience</strong>
                <p>3+ years in software development</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">🌐</span>
              <div>
                <strong>Languages</strong>
                <p>English, Chinese</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
