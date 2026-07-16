import { useCallback, useEffect, useState } from 'react';
import Nav from './components/Nav';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') closeMenu();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <Nav menuOpen={menuOpen} onToggle={toggleMenu} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
