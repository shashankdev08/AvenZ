import React, { useState, useEffect } from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const titles = [
  "Full-Stack Developer",
  "Backend Architect",
  "Multi-tenant Systems Builder",
  "AI Tools Explorer",
  "MERN + Spring Boot Engineer"
];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [particles, setParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    // Generate particle positions on the client-side
    const newParticles = Array.from({ length: 18 }).map((_, i) => {
      const size = Math.random() * 8 + 4; // 4px to 12px
      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${Math.random() * 6 + 8}s`,
        }
      };
    });
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timer: number;

    const handleType = () => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setTypingSpeed(40);
      } else {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && currentText === currentTitle) {
        timer = window.setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTitleIndex(prev => (prev + 1) % titles.length);
        setTypingSpeed(150);
      } else {
        timer = window.setTimeout(handleType, typingSpeed);
      }
    };

    timer = window.setTimeout(handleType, typingSpeed);
    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, typingSpeed]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center animate-hero-gradient overflow-hidden pt-16"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
      
      {/* Dynamic Floating Particles */}
      <div className="particles-container">
        {particles.map(p => (
          <div key={p.id} className="particle" style={p.style}></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md scale-95 md:scale-100 transition-all">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-mono text-text-secondary">Open to Roles · Pune, India</span>
        </div>

        {/* Hello Text */}
        <p className="font-mono text-accent-purple text-base md:text-lg mb-3 tracking-widest font-semibold uppercase">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm leading-none">
          Shashank Pandey
        </h1>

        {/* Animated Subtitle */}
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-text-secondary mb-6 h-12 md:h-16 flex items-center justify-center">
          <span className="typing-cursor text-accent-blue font-mono border-r-2 border-accent-blue pr-1">
            {currentText}
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-text-secondary max-w-xl text-base sm:text-lg md:text-xl mb-10 leading-relaxed font-light">
          I build systems that <span className="text-white font-medium">ship</span>, <span className="text-white font-medium">scale</span>, and <span className="text-white font-medium">stay secure</span>.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto px-6 sm:px-0">
          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium bg-accent-purple hover:bg-accent-purple/90 text-white transition-all hover:-translate-y-1 shadow-lg hover:shadow-accent-purple/20 cursor-pointer"
          >
            View My Work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a 
            href="mailto:helloiamshashank@gmail.com" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-medium bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:-translate-y-1 hover:border-accent-purple/40 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/shashankdev08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-accent-purple/10 text-text-secondary hover:text-white transition-all border border-white/5 hover:border-accent-purple/30"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/shashankdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-accent-purple/10 text-text-secondary hover:text-white transition-all border border-white/5 hover:border-accent-purple/30"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a 
            href="mailto:helloiamshashank@gmail.com"
            className="p-3 rounded-full bg-white/5 hover:bg-accent-purple/10 text-text-secondary hover:text-white transition-all border border-white/5 hover:border-accent-purple/30"
            aria-label="Send Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
