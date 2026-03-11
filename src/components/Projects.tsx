import { useFadeIn } from '../hooks/useFadeIn'

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

export default function Projects() {
  const sectionRef = useFadeIn<HTMLElement>()

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-inner">
        <h3 className="section-label">Projects</h3>
        <h2 className="section-title">Things I've built</h2>
        <div className="projects-grid">

          <div className="project-card">
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
          </div>

        </div>
      </div>
    </section>
  )
}
