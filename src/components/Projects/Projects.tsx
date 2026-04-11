import { useFadeIn } from '../../hooks/useFadeIn';
import './Projects.css';

export default function Projects() {
  const sectionRef = useFadeIn<HTMLElement>();

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">
        <h3 className="section-label">Projects</h3>
        <h2 className="section-title">Things I've built</h2>
        <div className="projects-grid">
          <div className="project-card">coming soon...</div>

          {/* <div className="project-card">
            <div className="project-header">
              <span className="project-icon">🤖</span>
              <div className="project-links">
                <a href="#" aria-label="GitHub"><GitHubIcon /></a>
                <a href="#" aria-label="Live Demo"><ExternalLinkIcon /></a>
              </div>
            </div>
            <h3>AI Chat Assistant</h3>
            <p>A real-time chat application powered by Claude API. Features streaming responses, conversation history, and a clean, minimal UI.</p>
            <div className="project-tags">
              <span>React</span><span>TypeScript</span><span>Claude API</span>
            </div>
          </div>

          <div className="project-card featured">
            <div className="featured-badge">Featured</div>
            <div className="project-header">
              <span className="project-icon">📊</span>
              <div className="project-links">
                <a href="#" aria-label="GitHub"><GitHubIcon /></a>
                <a href="#" aria-label="Live Demo"><ExternalLinkIcon /></a>
              </div>
            </div>
            <h3>DevMetrics Dashboard</h3>
            <p>A developer analytics dashboard that aggregates GitHub activity, code quality metrics, and deployment stats into one unified view.</p>
            <div className="project-tags">
              <span>Next.js</span><span>PostgreSQL</span><span>GitHub API</span><span>Recharts</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <span className="project-icon">⚡</span>
              <div className="project-links">
                <a href="#" aria-label="GitHub"><GitHubIcon /></a>
                <a href="#" aria-label="Live Demo"><ExternalLinkIcon /></a>
              </div>
            </div>
            <h3>FastAPI Starter Kit</h3>
            <p>A production-ready FastAPI boilerplate with JWT auth, PostgreSQL integration, Docker setup, and automated tests out of the box.</p>
            <div className="project-tags">
              <span>Python</span><span>FastAPI</span><span>Docker</span><span>PostgreSQL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <span className="project-icon">🗂️</span>
              <div className="project-links">
                <a href="#" aria-label="GitHub"><GitHubIcon /></a>
              </div>
            </div>
            <h3>Notion Clone</h3>
            <p>A collaborative note-taking app with rich text editing, nested pages, real-time sync, and a beautiful block-based editor.</p>
            <div className="project-tags">
              <span>React</span><span>Node.js</span><span>WebSockets</span><span>MongoDB</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
