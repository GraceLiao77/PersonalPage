import './Contact.css';
import { EmailIcon, GitHubContactIcon, LinkedInIcon } from '../../static/content/Icon';

const LINKS = [
  {
    label: 'Email',
    value: 'liaojin111@gmail.com',
    href: 'mailto:liaojin111@gmail.com',
    Icon: EmailIcon,
  },
  {
    label: 'GitHub',
    value: 'GraceLiao77',
    href: 'https://github.com/GraceLiao77',
    Icon: GitHubContactIcon,
  },
  {
    label: 'LinkedIn',
    value: 'grace-liao',
    href: 'https://www.linkedin.com/in/grace-liao-6723323a7/',
    Icon: LinkedInIcon,
  },
];

export default function Contact() {
  return (
    <div className="contact">
      <p className="contact-desc stagger">
        I'm always open to interesting conversations, collaborations, or just a friendly chat. Drop
        me a message and I'll get back to you.
      </p>
      <div className="contact-links stagger">
        {LINKS.map(({ label, value, href, Icon }) => (
          <a
            key={label}
            href={href}
            className="contact-row"
            {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <span className="contact-icon">
              <Icon />
            </span>
            <span className="contact-label">{label}</span>
            <span className="contact-value">{value}</span>
            <span className="arr">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
