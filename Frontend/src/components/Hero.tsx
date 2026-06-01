import React, { useState, useEffect, useMemo } from 'react';
import { Mail, ArrowDown, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const titles = [
  "Full-Stack Developer",
  "Backend Architect",
  "Multi-tenant Systems Builder",
  "AI Tools Explorer",
  "MERN + Spring Boot Engineer"
];

const techStack = ["React", "Node.js", "Spring Boot", "MongoDB", "Docker", "TypeScript"];

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Stable particle configs — computed once
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 5 + 2;
      return {
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${Math.random() * 8}s`,
          animationDuration: `${Math.random() * 10 + 6}s`,
        }
      };
    });
  }, []);

  // Orb configs — stable
  const orbs = useMemo(() => [
    { className: "top-1/4 -left-32 w-[500px] h-[500px] bg-accent-purple/[0.07]", delay: "0s" },
    { className: "bottom-1/4 -right-32 w-[400px] h-[400px] bg-accent-blue/[0.05]", delay: "2s" },
    { className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-purple/[0.03]", delay: "4s" },
  ], []);

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
      className="relative min-h-screen flex items-center justify-center animate-hero-gradient overflow-hidden noise-overlay"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 z-0"></div>

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full filter blur-3xl pointer-events-none z-0 animate-orb-float ${orb.className}`}
          style={{ animationDelay: orb.delay }}
        ></div>
      ))}

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map(p => (
          <div key={p.id} className="particle" style={p.style}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center pt-24 pb-20">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] px-5 py-2.5 rounded-full mb-10 backdrop-blur-xl hero-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 glow-pulse"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono text-text-secondary tracking-wide">Available for Opportunities</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-text-secondary/60">
            <MapPin className="h-3 w-3" />
            Pune, India
          </span>
        </div>

        {/* Greeting */}
        <p className="font-mono text-accent-purple text-xs sm:text-sm mb-5 tracking-[0.3em] font-semibold uppercase hero-fade-in" style={{ animationDelay: '0.4s' }}>
          &lt;hello world /&gt;
        </p>

        {/* Name — two-tone with gradient */}
        <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold tracking-tight mb-6 leading-[0.9] select-none hero-fade-in" style={{ animationDelay: '0.5s' }}>
          <span className="block text-text-primary">
            Shashank
          </span>
          <span className="block gradient-text mt-1">
            Pandey
          </span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-6 hero-fade-in" style={{ animationDelay: '0.7s' }}>
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-text-secondary font-mono">
            {'> '}
          </span>
          <span className="typing-cursor text-lg sm:text-2xl md:text-3xl font-semibold text-accent-blue font-mono">
            {currentText}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-text-secondary max-w-lg text-sm sm:text-base md:text-lg mb-10 leading-relaxed font-light hero-fade-in" style={{ animationDelay: '0.9s' }}>
          I engineer backend systems that{' '}
          <span className="text-text-primary font-semibold border-b border-accent-purple/30">ship fast</span>,{' '}
          <span className="text-text-primary font-semibold border-b border-accent-purple/30">scale reliably</span>, and{' '}
          <span className="text-text-primary font-semibold border-b border-accent-purple/30">stay secure</span>.
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 hero-fade-in" style={{ animationDelay: '1s' }}>
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs font-mono px-3 py-1.5 rounded-full border border-border-custom bg-white/[0.03] text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${1 + i * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full sm:w-auto px-4 sm:px-0 hero-fade-in" style={{ animationDelay: '1.2s' }}>
          <a
            href="#projects"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold bg-accent-purple text-white transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-accent-purple/25 cursor-pointer btn-shimmer relative overflow-hidden"
          >
            View My Work
            <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="mailto:helloiamshashank@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40 cursor-pointer backdrop-blur-sm"
          >
            <Mail className="h-4 w-4" />
            Let's Talk
          </a>
          <a
            href="/Shashank_Pandey_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-white/[0.04] border border-white/[0.1] hover:bg-white/[0.08] text-text-primary transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40 cursor-pointer backdrop-blur-sm"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 hero-fade-in" style={{ animationDelay: '1.4s' }}>
          {[
            { href: "https://github.com/shashankdev08", icon: <GithubIcon className="h-5 w-5" />, label: "GitHub" },
            { href: "https://linkedin.com/in/shashankdev", icon: <LinkedinIcon className="h-5 w-5" />, label: "LinkedIn" },
            { href: "mailto:helloiamshashank@gmail.com", icon: <Mail className="h-5 w-5" />, label: "Email" },
          ].map(social => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto') ? undefined : "_blank"}
              rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
              className="group p-3.5 rounded-2xl bg-white/[0.04] hover:bg-accent-purple/15 text-text-secondary hover:text-accent-purple transition-all duration-300 border border-white/[0.06] hover:border-accent-purple/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-purple/10"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-text-secondary/40 hero-fade-in" style={{ animationDelay: '1.8s' }}>
        <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-5 h-8 border border-text-secondary/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-accent-purple/60 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};
