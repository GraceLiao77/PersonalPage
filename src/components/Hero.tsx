import avatarImg from '../static/img/avatar.jpeg'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="greeting">Hi, I'm</p>
          <h1>Grace</h1>
          <h2 className="subtitle">Front-End Engineer &amp; M.Eng Student</h2>
          <p className="bio">
            Master of Engineering student at the University of Auckland.
            Previously 4 years as a front-end engineer at TikTok — building
            large-scale systems, optimising performance, and mentoring junior devs.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <img src={avatarImg} alt="Grace Liao" className="avatar-img" />
          </div>
          <div className="status-badge">
            <span className="dot"></span>
            Open to opportunities
          </div>
        </div>
      </div>
    </section>
  )
}
