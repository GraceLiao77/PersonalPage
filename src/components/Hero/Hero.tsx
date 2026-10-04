import { useEffect, useState } from 'react';
import './Hero.css';
import avatarImg from '../../static/img/new-avatar.jpeg';
import { EmailIcon, LinkedInIcon } from '../../static/content/Icon';

const SUBTITLE = 'Software Engineer · Full-Stack & AI · Auckland, NZ';

// Types the subtitle out one character at a time, like a terminal
function useTypewriter(text: string, startDelay = 700, speed = 38) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(text.length);
      return;
    }
    let timer = window.setTimeout(function tick() {
      setCount((c) => {
        if (c + 1 < text.length) timer = window.setTimeout(tick, speed);
        return c + 1;
      });
    }, startDelay);
    return () => window.clearTimeout(timer);
  }, [text, startDelay, speed]);

  return text.slice(0, count);
}

export default function Hero() {
  const typed = useTypewriter(SUBTITLE);

  return (
    <div className="hero" id="top">
      <div className="hero-avatar">
        <img src={avatarImg} alt="Grace Liao" />
      </div>
      <div className="hero-text">
        <h1>
          Hi, I'm Grace <span className="wave">👋</span>
        </h1>

        <p className="subtitle" aria-label={SUBTITLE}>
          {/* Invisible full text reserves the final width so the layout never shifts while typing */}
          <span className="subtitle-sizer" aria-hidden="true">
            {SUBTITLE}
            <span className="caret" />
          </span>
          <span className="subtitle-typed" aria-hidden="true">
            {typed}
            <span className="caret" />
          </span>
        </p>

        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/grace-liao-6723323a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="mailto:liaojin111@gmail.com">
            <EmailIcon />
            Email
          </a>
          <a href="#projects">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Portfolio
          </a>
        </div>
      </div>

      <div className="now">
        <span className="now-label">
          <span className="now-dot" />
          Now
        </span>
        <p>
          Master of Software Engineering at the University of Auckland (graduating November 2026),
          building full-stack web apps and AI-powered tools.
        </p>
      </div>
    </div>
  );
}
