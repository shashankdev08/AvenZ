import React, { useState, useEffect } from 'react';

const titles = [
  "Full-Stack Developer",
  "Backend Architect",
  "Multi-tenant Systems Builder",
  "AI Tools Explorer",
  "MERN + Spring Boot Engineer"
];

export const TypingSubtitle: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const nextSpeed = isDeleting ? 40 : 100;

    const handleType = () => {
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(currentTitle.slice(0, currentText.length + 1));
      }
    };

    let timer: number;
    if (!isDeleting && currentText === currentTitle) {
      // Pause at full word
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && currentText === "") {
      // Pause at empty word before starting typing next word
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex(prev => (prev + 1) % titles.length);
      }, 150);
    } else {
      timer = window.setTimeout(handleType, nextSpeed);
    }

    return () => window.clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <div className="h-10 md:h-12 flex items-center justify-center mb-6 hero-fade-in" style={{ animationDelay: '0.7s' }}>
      <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-text-secondary font-mono">
        {'> '}
      </span>
      <span className="typing-cursor text-lg sm:text-2xl md:text-3xl font-semibold text-accent-blue font-mono">
        {currentText}
      </span>
    </div>
  );
};
