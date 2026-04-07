import { useFadeIn } from '../hooks/useFadeIn'
import { EmailIcon, GitHubContactIcon, LinkedInIcon } from '../static/content/Icon'

export default function Contact() {
  const sectionRef = useFadeIn<HTMLElement>()

  return (
    <section id="contact" ref={sectionRef}>
      <div className="section-inner contact-inner">
        <h3 className="section-label">Contact</h3>
        <h2 className="section-title">Let's connect</h2>
        <p className="contact-desc">
          I'm always open to interesting conversations, collaborations, or just a friendly chat.
          Drop me a message — I'll get back to you.
        </p>
        <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--muted)', fontStyle: 'italic' }}>
          ↓ pick your favourite channel
        </p>
        <div className="contact-links">
          <a href="mailto:liaojin111@gmail.com" className="contact-card">
            <EmailIcon />
          </a>
          <a href="https://github.com/GraceLiao77" target="_blank" className="contact-card">
            <GitHubContactIcon />
          </a>
          <a href="https://www.linkedin.com/in/grace-liao-6723323a7/" target="_blank" className="contact-card">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
