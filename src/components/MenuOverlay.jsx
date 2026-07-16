import { navItems } from '../data';

export default function MenuOverlay({ open, onClose }) {
  return (
    <div
      className={`menu-overlay${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
    >
      <nav>
        <ul className="menu-nav">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="menu-link" onClick={onClose}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-footer">
        <span className="menu-divider" />
        <span className="menu-tagline">Winners don't give up</span>
      </div>
    </div>
  );
}
