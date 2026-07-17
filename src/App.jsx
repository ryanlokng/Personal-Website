import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import ProjectDetail from './components/ProjectDetail';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Contact />
    </>
  );
}

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
    <BrowserRouter>
      <Nav menuOpen={menuOpen} onToggle={toggleMenu} />
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
