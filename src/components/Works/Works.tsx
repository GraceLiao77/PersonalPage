import type { TabId } from '../../hooks/useActiveTab';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';
import './Works.css';

const TABS: { id: TabId; label: string; title: string; Panel: () => React.JSX.Element }[] = [
  { id: 'projects', label: 'Projects', title: 'Things I’ve built', Panel: Projects },
  { id: 'about', label: 'About', title: 'A little about me', Panel: About },
  { id: 'contact', label: 'Contact', title: 'Contact', Panel: Contact },
];

type Props = {
  active: TabId;
  onSelect: (id: TabId) => void;
};

export default function Works({ active, onSelect }: Props) {
  const index = TABS.findIndex((t) => t.id === active);
  const { Panel, title } = TABS[index];

  return (
    <section className="works" id="works">
      <div className="works-head">
        <div className="tabs" role="tablist" aria-label="Content categories">
          {TABS.map((t) => (
            <button
              key={t.id}
              id={`tab-${t.id}`}
              type="button"
              role="tab"
              className={`tab${t.id === active ? ' active' : ''}`}
              aria-selected={t.id === active}
              aria-controls={`panel-${t.id}`}
              onClick={() => onSelect(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <span className="tab-count" aria-hidden="true">
          {String(index + 1).padStart(2, '0')} / {String(TABS.length).padStart(2, '0')}
        </span>
      </div>

      <h2 className="sr-only">{title}</h2>

      <div
        className="work-module"
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        key={active}
      >
        <Panel />
      </div>
    </section>
  );
}
