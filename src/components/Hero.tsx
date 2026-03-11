export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="greeting">Hi, I'm</p>
          <h1>Jin</h1>
          <h2 className="subtitle">Software Engineer &amp; Builder</h2>
          <p className="bio">
            I craft fast, thoughtful software — from sleek frontends to robust backends.
            Passionate about clean code, great UX, and tools that make life easier.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span>J</span>
            </div>
          </div>
          <div className="status-badge">
            <span className="dot"></span>
            Available for work
          </div>
        </div>
      </div>
    </section>
  )
}
