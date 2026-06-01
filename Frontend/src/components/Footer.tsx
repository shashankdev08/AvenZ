import React from 'react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-surface/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-text-secondary text-xs sm:text-sm font-mono font-light text-center sm:text-left">
          Built with React & Tailwind CSS v4 · © 2025 Shashank Pandey
        </p>

        {/* Social Quick Links */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/shashankdev08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors p-2 bg-bg-surface border border-border-custom rounded-lg hover:border-accent-purple/40"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a 
            href="https://linkedin.com/in/shashankdev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-white transition-colors p-2 bg-bg-surface border border-border-custom rounded-lg hover:border-accent-purple/40"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
};
