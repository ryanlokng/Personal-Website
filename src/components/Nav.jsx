export default function Nav({ menuOpen, onToggle }) {
  return (
    <header className="nav" role="banner">
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        <span /><span /><span />
      </button>
      <a href="#home" className="nav-logo" aria-label="Ryan Ng — home">RN</a>
    </header>
  );
}
