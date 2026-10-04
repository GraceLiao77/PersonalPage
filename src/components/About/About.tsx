import type { ReactNode } from 'react';
import './About.css';

type Role = {
  company: string;
  when: string;
  intro: ReactNode;
  points: ReactNode[];
};

// Chronological: earliest role first
const EXPERIENCE: Role[] = [
  {
    company: 'TikTok (ByteDance)',
    when: '2020.7 - 2024.4',
    intro: (
      <>
        <code>TikTok</code> is ByteDance’s short-video platform and one of the world’s most popular
        apps, with over 1 billion monthly active users.
      </>
    ),
    points: [
      <>
        Built <strong>stale-while-revalidate caching</strong> in a Service Worker for the order
        page, returning data in about <strong>20 ms</strong>; the “slow page” feedback stopped.
      </>,
      <>
        Improved order page <strong>LCP from 3.5 s to 2.6 s</strong> (about 25%) with code splitting
        and lazy loading.
      </>,
      <>
        Owned core components of the <strong>EcopUI</strong> library; within about three months,{' '}
        <strong>all new table pages</strong> on Industry 360 used it.
      </>,
      <>
        Led the move to a <strong>pnpm workspace monorepo</strong>, and was frontend lead across two
        product lines with <strong>6+ backend engineers</strong>.
      </>,
    ],
  },
  {
    company: 'New Oriental',
    when: '2024.5 - 2026.1',
    intro: (
      <>
        <code>New Oriental</code> is China’s largest private education provider, with a presence in
        50 cities across the country, covering test preparation, language training, K-12 tutoring
        and online learning.
      </>
    ),
    points: [
      <>
        Built a <strong>shared component library</strong> published to npm, used by{' '}
        <strong>4+ campaign teams</strong> and cutting duplicate development by an estimated{' '}
        <strong>30%</strong>.
      </>,
      <>
        Reduced JS bundle size by about <strong>20%</strong> through Lighthouse analysis, code
        splitting, DNS prefetch and preconnect.
      </>,
      <>
        Built a proof of concept generating API types with <code>openapi-typescript</code> in a few
        hours, which led the new project to adopt <strong>TypeScript</strong>.
      </>,
      <>
        Introduced <strong>ESLint and Git Hooks</strong> to a team with no code standards.
      </>,
    ],
  },
  {
    company: 'WDCC, University of Auckland',
    when: '2026.4 - Present',
    intro: (
      <>
        <code>WDCC</code> is a student-run club at the University of Auckland, founded in 2019,
        where students build real-world software projects for campus clubs and groups.
      </>
    ),
    points: [
      <>
        Wrote a <strong>backfill script</strong> that restored several months of missing commit and
        PR history, reusing the weekly job’s metrics logic; merged after two rounds of code review.
      </>,
      <>
        Fixed a bug where <strong>late-pushed commits were silently dropped</strong> by author-date
        filtering, and added unit and integration tests.
      </>,
      <>
        Cut redundant <strong>GitHub API calls</strong> by checking each commit SHA against the
        database before fetching details.
      </>,
      <>
        Built the <strong>Weekly Leaderboard</strong>, trend charts, an admin role page and profile
        photo upload with <strong>Supabase Storage + RLS</strong>.
      </>,
    ],
  },
];

const EDUCATION = [
  {
    school: 'University of Auckland',
    when: '2026.2 - 2026.11',
    degree: 'Master of Software Engineering (expected November 2026)',
  },
  {
    school: 'Harbin University of Science and Technology',
    when: '2016.9 - 2020.7',
    degree: 'Bachelor of Software Engineering',
  },
];

const STACK = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL (Supabase)',
  'Claude API',
  'Zod',
  'Service Worker',
  'Core Web Vitals',
  'pnpm monorepo',
  'Vitest',
  'CI/CD',
];

export default function About() {
  return (
    <div className="about">
      <section className="stagger">
        <h2>Hello! 👋</h2>
        <p>
          I’m <code>Grace Liao</code>.
        </p>
        <ul>
          <li>
            I’m a <strong>software engineer</strong> building web applications with{' '}
            <strong>React, TypeScript and Node.js</strong>, with experience at{' '}
            <strong>TikTok (ByteDance)</strong> and <strong>New Oriental</strong>.
          </li>
          <li>
            I start performance work from <strong>how people actually use a product</strong>, and I
            like turning repeated team work into <strong>shared tools</strong>, such as component
            libraries and generated API types.
          </li>
          <li>
            Now completing a <strong>Master of Software Engineering</strong> at the University of
            Auckland, building <strong>full-stack</strong> features for WDCC and{' '}
            <strong>AI tools</strong> on the Claude API.
          </li>
        </ul>
      </section>

      <section className="stagger">
        <h2>💻 Working Experience</h2>
        {EXPERIENCE.map((role) => (
          <article key={role.company}>
            <h4>
              {role.company} <span className="when">({role.when})</span>
            </h4>
            <blockquote>{role.intro}</blockquote>
            <ul>
              {role.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="stagger">
        <h2>🎓 Education</h2>
        {EDUCATION.map((e) => (
          <article key={e.school}>
            <h4>
              {e.school} <span className="when">({e.when})</span>
            </h4>
            <ul>
              <li>{e.degree}</li>
            </ul>
          </article>
        ))}
      </section>

      <section className="stagger">
        <h2>🛠 Tech Stack</h2>
        <div className="skills">
          {STACK.map((s) => (
            <code key={s}>{s}</code>
          ))}
        </div>
      </section>
    </div>
  );
}
