import './Projects.css';
import rcEvents from '../../assets/repair-cafe/events.png';
import rcOverview from '../../assets/repair-cafe/overview.png';
import rcImpact from '../../assets/repair-cafe/impact.png';

type Project = {
  title: string;
  description: string;
  cta: string;
  href?: string;
  tags: string[];
  /** When the project was started, e.g. '2026.4' (from the repo's first commit) */
  created?: string;
  /** Your role, for team projects */
  role?: string;
  Preview?: () => React.JSX.Element;
};

// A tiny terminal replaying one run of the skill
function LecturePreview() {
  return (
    <div className="stage stage-terminal" aria-hidden="true">
      <div className="term">
        <div className="term-bar">
          <i />
          <i />
          <i />
          <span>claude</span>
        </div>
        <div className="term-body">
          <p>
            <span className="prompt">&gt;</span> summarize Week3-slides.pdf Week3-transcript.txt
          </p>
          <p className="dim">⎿ subagent reading 2 files…</p>
          <p>
            <span className="ok">✓</span> Saved to summary_Week3.md
          </p>
          <p className="dim">main context: ~1.9K tokens (&lt;2% of 200K)</p>
        </div>
      </div>
    </div>
  );
}

// Three phone screens fanned out: pick event → run it → see the impact
function RepairCafePreview() {
  return (
    <div className="stage stage-phones" aria-hidden="true">
      <img className="phone" src={rcEvents} alt="" loading="lazy" />
      <img className="phone" src={rcOverview} alt="" loading="lazy" />
      <img className="phone" src={rcImpact} alt="" loading="lazy" />
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    title: 'Lecture Summariser',
    description:
      'A Claude Code skill that turns lecture slides and transcripts into exam-focused study notes. File reads run in a subagent, so each run keeps under 2% of a 200K context window in the main session.',
    cta: 'View on GitHub',
    href: 'https://github.com/GraceLiao77/lecture-to-summary-skills',
    tags: ['Claude Code', 'Agent Skill', 'Subagents'],
    created: '2026.4',
    Preview: LecturePreview,
  },
  {
    title: 'Repair Café',
    description:
      'A web app for volunteer Repair Cafés across Aotearoa. Coordinators register items and match them to repairers by skill; repairers join by QR code to log outcomes; the impact screen totals waste and CO₂e avoided using Restart Project Fixometer data. Started as a SOFTENG 761 team project and now continuing as volunteer work, with a separate desktop design on the way.',
    cta: 'Volunteer project · ongoing',
    tags: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Azure'],
    created: '2026.8',
    role: 'Scrum Master · Full-stack',
    Preview: RepairCafePreview,
  },
];

// '2026.8' → 202608, so newer projects sort first; undated ones go last
const startedAt = (p: Project) => {
  if (!p.created) return 0;
  const [y, m] = p.created.split('.').map(Number);
  return y * 100 + m;
};
const SORTED = [...PROJECTS].sort((a, b) => startedAt(b) - startedAt(a));

// Visual placeholder until a project has its own preview
function Stage() {
  return (
    <div className="stage stage-empty" aria-hidden="true">
      <span>…</span>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="plist">
      {SORTED.map((p, i) => {
        const info = (
          <>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="ptags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <span className="go">
              {p.cta} {p.href && <span className="arr">→</span>}
            </span>
          </>
        );
        return (
          <div className="pcard stagger" key={p.title}>
            {p.Preview ? <p.Preview /> : <Stage />}
            <div className="pinfo">
              <div className="pmeta">
                <span className="pnum" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {p.created && <span className="pdate">Created {p.created}</span>}
                {p.role && <span className="prole">{p.role}</span>}
              </div>
              {p.href ? (
                <a className="pinfo-main" href={p.href} target="_blank" rel="noopener noreferrer">
                  {info}
                </a>
              ) : (
                <div className="pinfo-main">{info}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
