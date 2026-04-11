import { useFadeIn } from '../../hooks/useFadeIn';
import './About.css';

export default function About() {
  const sectionRef = useFadeIn<HTMLElement>();

  return (
    <section id="about" ref={sectionRef}>
      <div className="section-inner">
        <h3 className="section-label">About Me</h3>
        <h2 className="section-title">A little about me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Master of Engineering student at the University of Auckland and a former
              front-end engineer at TikTok, where I spent four years building large-scale e-commerce
              and data platforms.
            </p>
            <p>
              My work ranged from shipping merchant-facing features and optimising bundle
              performance to leading Monorepo migrations and mentoring junior engineers through code
              reviews and knowledge-sharing sessions.
            </p>
            <p>
              I enjoy working at the intersection of clean architecture and great UX — writing code
              that's fast, maintainable, and a pleasure to read.
            </p>
            <p className="skills-hint">↓ tools I reach for</p>
            <div className="skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">JavaScript (ES6+)</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Webpack</span>
              <span className="skill-tag">Monorepo</span>
              <span className="skill-tag">Micro-frontends</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">HTML &amp; CSS</span>
            </div>
          </div>
          <div className="about-cards">
            <div className="info-card">
              <span className="card-icon">🎓</span>
              <div>
                <strong>Education</strong>
                <p>M.Eng — University of Auckland (2026–2027)</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">🎓</span>
              <div>
                <strong>Education</strong>
                <p>B.Eng Software Engineering — Harbin Uni (2016–2020)</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">💼</span>
              <div>
                <strong>Experience</strong>
                <p>4 yrs Front-End Engineer @ TikTok</p>
              </div>
            </div>
            <div className="info-card">
              <span className="card-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Auckland, New Zealand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
