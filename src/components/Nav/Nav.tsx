import { useEffect, useState } from 'react';
import { GitHubIcon } from '../../static/content/Icon';
import { TAB_IDS, type TabId } from '../../hooks/useActiveTab';
import './Nav.css';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
  const forced = document.documentElement.dataset.theme;
  if (forced === 'light' || forced === 'dark') return forced;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function Nav({ active }: { active: TabId }) {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#top" className="brand">
          <span className="brand-tilde">~/</span>grace
          <span className="brand-caret" />
        </a>
        <nav className="header-links" aria-label="Main">
          {TAB_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${id === active ? ' active' : ''}`}
              aria-current={id === active ? 'true' : undefined}
            >
              {id}
            </a>
          ))}
          <span className="divider" aria-hidden="true" />
          <a
            href="https://github.com/GraceLiao77"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <button
            type="button"
            className="icon-link theme-toggle"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
