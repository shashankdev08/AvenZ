import React from 'react';
import { FadeIn } from './FadeIn';
import { Award, CheckCircle } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  badgeText: string;
  badgeColor: 'green' | 'yellow' | 'blue';
}

export const Certifications: React.FC = () => {
  const certs: Certification[] = [
    { name: "Complete Backend Development", issuer: "GeeksforGeeks", badgeText: "GFG Verified", badgeColor: "green" },
    { name: "Java Certification", issuer: "HackerRank", badgeText: "HackerRank Verified", badgeColor: "yellow" },
    { name: "SQL Advanced", issuer: "HackerRank", badgeText: "HackerRank Verified", badgeColor: "yellow" },
    { name: "Enterprise Design Thinking Practitioner", issuer: "IBM SkillsBuild", badgeText: "IBM Verified", badgeColor: "blue" },
    { name: "Android Development", issuer: "Certified", badgeText: "Industry Certified", badgeColor: "green" }
  ];

  const getBadgeStyle = (color: 'green' | 'yellow' | 'blue') => {
    switch (color) {
      case 'green': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'yellow': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'blue': return 'bg-sky-500/10 text-sky-400 border-sky-500/20';
      default: return 'bg-white/5 text-white/80 border-white/10';
    }
  };

  return (
    <section id="certifications" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Credentials</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">Certifications</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {certs.map((cert, idx) => (
            <FadeIn
              key={cert.name}
              delay={idx * 80}
              className="bg-bg-surface border border-border-custom rounded-2xl p-5 shadow-lg flex flex-col justify-between card-hover animated-border overflow-hidden relative group"
            >
              <div className="relative z-10">
                <div className="p-2.5 bg-bg-primary border border-border-custom rounded-xl w-fit mb-4 group-hover:bg-accent-purple/10 transition-colors duration-300">
                  <Award className="h-5 w-5 text-accent-purple" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-primary tracking-tight leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-text-secondary font-mono mb-4">
                  {cert.issuer}
                </p>
              </div>

              <span className={`relative z-10 inline-flex items-center justify-center gap-1.5 font-mono text-[10px] font-bold tracking-wider px-2 py-1.5 rounded-full border w-full text-center ${getBadgeStyle(cert.badgeColor)}`}>
                <CheckCircle className="h-3 w-3 shrink-0" />
                {cert.badgeText}
              </span>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
