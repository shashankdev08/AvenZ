import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Palette } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

interface ThemeOption {
  id: string;
  name: string;
  dotColor: string;
}

interface ThemeSwitcherProps {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ activeTheme, setActiveTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: ThemeOption[] = [
    { id: 'noir-gold', name: 'Noir & Gold', dotColor: 'bg-[#d4a853]' },
    { id: 'arctic-aurora', name: 'Arctic Aurora', dotColor: 'bg-[#22d3ee]' },
    { id: 'obsidian-fire', name: 'Obsidian Fire', dotColor: 'bg-[#f97316]' },
    { id: 'stealth-carbon', name: 'Stealth Carbon', dotColor: 'bg-[#ef4444]' },
    { id: 'neon-synthwave', name: 'Neon Synthwave', dotColor: 'bg-[#ec4899]' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-bg-surface border border-border-custom hover:border-accent-purple/40 text-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5 cursor-pointer text-sm"
        aria-label="Change Theme"
      >
        <Palette className="h-4 w-4 text-accent-purple" />
        <span className="capitalize text-xs font-mono hidden sm:inline-block">
          {activeTheme.replaceAll('-', ' ')}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 sm:w-48 rounded-xl bg-bg-surface border border-border-custom shadow-xl py-1.5 z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTheme(t.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-xs font-mono font-medium hover:bg-bg-primary flex items-center gap-3 transition-colors cursor-pointer ${
                activeTheme === t.id ? 'text-accent-purple bg-bg-primary/50' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${t.dotColor}`}></span>
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'noir-gold';
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update theme DOM attribute and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('portfolio-theme', activeTheme);
  }, [activeTheme]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'ai', label: 'AI Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-bg-surface/90 backdrop-blur-md shadow-lg border-b border-border-custom' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Code className="h-6 w-6 text-accent-purple" />
            <span className="font-mono font-bold text-lg text-text-primary tracking-wider uppercase select-none">
              shashank<span className="text-accent-purple">.</span>dev
            </span>
          </div>
          
          {/* Desktop Nav & Themes */}
          <div className="hidden md:flex items-center gap-4">
            <div className="ml-10 flex items-baseline space-x-1 sm:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-accent-purple font-semibold bg-accent-purple/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface/50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Theme Switcher */}
            <div className="border-l border-border-custom pl-4 py-1">
              <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />
            </div>
          </div>

          {/* Mobile Bar Controls */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Mobile Theme Switcher */}
            <ThemeSwitcher activeTheme={activeTheme} setActiveTheme={setActiveTheme} />

            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-surface border border-transparent hover:border-border-custom focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Links Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 border-b border-border-custom' : 'max-h-0 opacity-0 overflow-hidden'
        } bg-bg-surface/95 backdrop-blur-md`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'text-accent-purple bg-accent-purple/10 font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface/50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
