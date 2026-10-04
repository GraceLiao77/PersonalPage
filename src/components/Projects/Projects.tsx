import './Projects.css';

type Project = {
  title: string;
  description: string;
  cta: string;
  href?: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'Coming soon',
    description: 'Something new is on the workbench. Check back shortly.',
    cta: 'In progress',
    tags: ['WIP'],
  },
];

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
      {PROJECTS.map((p, i) => {
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
              {p.cta} <span className="arr">→</span>
            </span>
          </>
        );
        return (
          <div className="pcard stagger" key={p.title}>
            <Stage />
            <div className="pinfo">
              <span className="pnum" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
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
