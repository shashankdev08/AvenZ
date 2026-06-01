import React from 'react';
import { Heart, ArrowUp, Code, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Tools', href: '#ai' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { href: "https://github.com/shashankdev08", icon: <GithubIcon className="h-4 w-4" />, label: "GitHub" },
  { href: "https://linkedin.com/in/shashankdev", icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn" },
  { href: "mailto:helloiamshashank@gmail.com", icon: <Mail className="h-4 w-4" />, label: "Email" },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-surface/50 overflow-hidden">
      {/* Top gradient border */}
      <div className="section-divider"></div>

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top Row — Branding + Nav + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Left — Brand */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-accent-purple/10 border border-accent-purple/20 rounded-xl">
                <Code className="h-5 w-5 text-accent-purple" />
              </div>
              <span className="font-mono font-bold text-lg text-text-primary tracking-wider uppercase select-none">
                shashank<span className="text-accent-purple">.</span>dev
              </span>
            </div>
            <p className="text-text-secondary text-sm font-light leading-relaxed max-w-xs">
              Full-Stack Developer specializing in scalable backend architectures, multi-tenant systems, and AI-powered tooling.
            </p>
            <div className="flex items-center gap-1.5 text-text-secondary/60 text-xs font-mono">
              <MapPin className="h-3 w-3" />
              Pune, Maharashtra, India
            </div>
          </div>

          {/* Center — Quick Links */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] font-bold text-text-secondary tracking-[0.25em] uppercase mb-5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {footerLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent-purple transition-colors duration-200 font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Connect */}
          <div className="md:col-span-4">
            <h4 className="font-mono text-[10px] font-bold text-text-secondary tracking-[0.25em] uppercase mb-5">
              Connect
            </h4>
            <div className="flex items-center gap-2.5 mb-6">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="p-2.5 rounded-xl bg-bg-primary border border-border-custom text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 hover:bg-accent-purple/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:helloiamshashank@gmail.com"
              className="text-sm text-text-secondary hover:text-accent-purple transition-colors font-mono font-light"
            >
              helloiamshashank@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-custom mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-text-secondary/50 text-xs font-mono font-light text-center sm:text-left">
            © {currentYear} Shashank Pandey. Crafted with{' '}
            <Heart className="inline h-3 w-3 text-accent-purple/60 mx-0.5" />{' '}
            using React & Tailwind CSS v4
          </p>

          {/* Back to top — compact */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-mono text-text-secondary/50 hover:text-accent-purple transition-colors cursor-pointer"
          >
            Back to top
            <span className="p-1.5 rounded-lg bg-bg-primary border border-border-custom group-hover:border-accent-purple/30 group-hover:bg-accent-purple/5 transition-all">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
