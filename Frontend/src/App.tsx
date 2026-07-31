import { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArrowUp } from 'lucide-react';

// Lazy load below-the-fold sections
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const AIExplorer = lazy(() => import('./components/AIExplorer').then(m => ({ default: m.AIExplorer })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

const SectionDivider = () => (
  <div className="section-divider" aria-hidden="true"></div>
);

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(() =>
    typeof window !== 'undefined' ? window.scrollY > 500 : false
  );

  // Monitor scroll height solely to show/hide the scroll-to-top button,
  // avoiding triggering updates on every scroll frame.
  useEffect(() => {
    const handleScroll = () => {
      const isPastThreshold = window.scrollY > 500;
      setShowScrollTop(prev => prev !== isPastThreshold ? isPastThreshold : prev);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Use IntersectionObserver for scroll-spy to prevent layout thrashing (forced reflow)
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'ai', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-bg-primary min-h-screen text-text-primary font-sans antialiased overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Suspense fallback={null}>
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <AIExplorer />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
        <Footer />
      </Suspense>

      {/* Scroll-to-top button */}
      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export default App;
