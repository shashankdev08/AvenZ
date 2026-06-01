import React from 'react';
import { Counter } from './Counter';
import { FadeIn } from './FadeIn';
import { User, Shield, Terminal, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { id: 1, end: 1000, suffix: '+', label: 'Users Served', icon: <User className="h-5 w-5 text-accent-purple" /> },
    { id: 2, end: 30, suffix: '+', label: 'APIs Built', icon: <Terminal className="h-5 w-5 text-accent-blue" /> },
    { id: 3, end: 95, suffix: '%', label: 'Security Drop', icon: <Shield className="h-5 w-5 text-accent-purple" /> },
    { id: 4, end: 40, suffix: '%', label: 'Performance Gain', icon: <TrendingUp className="h-5 w-5 text-accent-blue" /> },
  ];

  return (
    <section id="about" className="py-28 bg-bg-primary relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent-purple/[0.03] filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-blue/[0.03] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Who I Am</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">About Me</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        {/* Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

          {/* Left: Avatar */}
          <div className="md:col-span-5 flex justify-center">
            <FadeIn delay={100} className="relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue opacity-40 blur-xl group-hover:opacity-60 transition duration-700"></div>
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-bg-surface flex items-center justify-center border-2 border-border-custom shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10"></div>
                <div className="flex flex-col items-center relative z-10">
                  <span className="font-mono text-5xl sm:text-7xl font-bold gradient-text select-none">
                    SP
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary tracking-[0.3em] mt-3 uppercase font-medium">
                    Pune, India
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Bio */}
          <div className="md:col-span-7 space-y-5 text-text-secondary text-base sm:text-lg leading-[1.8] font-light">
            <FadeIn delay={200}>
              <p>
                I'm a <span className="text-text-primary font-semibold">Full-Stack Developer</span> from Pune with 1+ year of professional experience building production-grade applications that people actually use.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p>
                Currently architecting <span className="text-text-primary font-semibold">Aarogyam</span> — a healthcare & wellness platform serving{' '}
                <span className="text-accent-purple font-semibold">1,000+ users</span> — where I designed the entire backend: multi-tenant DB isolation, JWT + RBAC across 5 user roles, and 30+ production APIs.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <p>
                I'm also actively exploring AI agents, LLM integrations, and building autonomous tools using{' '}
                <span className="text-accent-purple font-medium">Claude</span>,{' '}
                <span className="text-accent-purple font-medium">LangChain</span>, and{' '}
                <span className="text-accent-purple font-medium">MCP</span>.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-24">
          {stats.map((stat, index) => (
            <FadeIn
              key={stat.id}
              delay={index * 100}
              className="relative bg-bg-surface border border-border-custom p-6 rounded-2xl flex flex-col items-center justify-center text-center card-hover animated-border overflow-hidden"
            >
              <div className="p-3 bg-bg-primary border border-border-custom rounded-xl mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight mb-1 font-mono gradient-text">
                <Counter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-text-secondary font-medium">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
