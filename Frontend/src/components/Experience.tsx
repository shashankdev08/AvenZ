import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  icon: React.ReactNode;
}

export const Experience: React.FC = () => {
  const experiences: TimelineItem[] = [
    {
      company: "Samishti Infotech Pvt. Ltd.",
      role: "Associate Consultant – Development",
      period: "Oct 2025 – Present",
      location: "Pune, India",
      bullets: [
        "Architected Aarogyam healthcare platform (MERN + React Native) serving 1,000+ users",
        "Built 30+ RESTful APIs for appointments, prescriptions, and administrative analytics",
        "Designed JWT + RBAC across 5 user roles — resulting in a 95% drop in unauthorized access",
        "Built a DB-per-tenant multi-tenant isolation backend architecture with zero cross-tenant leakage",
        "Shared API backend layer across React.js & React Native — speeding up frontend integration by 40%"
      ],
      icon: <Briefcase className="h-5 w-5 text-accent-purple" />
    },
    {
      company: "Digisure Technologies Pvt. Ltd.",
      role: "Junior Software Developer Intern",
      period: "Feb 2025 – Aug 2025",
      location: "Lucknow, India",
      bullets: [
        "Rearchitected Android mobile codebase using MVVM pattern — accelerating load times by 40% and UI rendering by 35%",
        "Designed and built 20+ interface screens utilizing ConstraintLayout, RecyclerView, and Google Material Design guidelines",
        "Integrated 15+ RESTful APIs via Retrofit — dropping the application crash rates by 30%"
      ],
      icon: <Briefcase className="h-5 w-5 text-accent-blue" />
    },
    {
      company: "GeeksforGeeks",
      role: "Software Development Training",
      period: "May 2024 – Sep 2024",
      location: "Bengaluru, India (Remote)",
      bullets: [
        "Built Java Spring Boot APIs capable of handling 500+ requests/sec under JMeter load testing simulations",
        "Designed and implemented 3 microservices following SOLID principles and Clean Architecture design patterns",
        "Implemented secure JWT user authentication and verification aligned with OWASP security guidelines using Spring Security"
      ],
      icon: <Briefcase className="h-5 w-5 text-accent-purple" />
    }
  ];

  return (
    <section id="experience" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent-purple/[0.03] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Career</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">Work Experience</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-0">
          <div className="timeline-line"></div>

          <div className="space-y-20">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative flex flex-col md:flex-row md:items-start">

                <div className="absolute -left-[48px] md:left-1/2 md:-translate-x-1/2 top-1 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-bg-surface border-2 border-accent-purple shadow-lg shadow-accent-purple/20 transition-all duration-300 hover:scale-110 hover:shadow-accent-purple/40">
                  {exp.icon}
                </div>

                <div className="hidden md:block md:w-1/2 md:pr-14 md:text-right pt-2.5">
                  <FadeIn delay={idx * 100}>
                    <div className="flex items-center justify-end gap-2 text-accent-purple font-mono text-sm font-semibold mb-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center justify-end gap-2 text-text-secondary font-mono text-xs">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </div>
                  </FadeIn>
                </div>

                <div className="md:w-1/2 md:pl-14">
                  <FadeIn delay={idx * 100 + 50} className="relative bg-bg-surface border border-border-custom rounded-2xl p-6 sm:p-7 shadow-xl card-hover animated-border overflow-hidden">

                    <div className="mb-4 relative z-10">
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight">{exp.role}</h3>
                      <h4 className="text-accent-purple font-mono font-semibold text-sm sm:text-base mt-0.5">{exp.company}</h4>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2.5 text-xs font-mono text-text-secondary md:hidden">
                        <span className="flex items-center gap-1.5 text-accent-purple">
                          <Calendar className="h-3.5 w-3.5" /> {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-sm text-text-secondary font-light relative z-10">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/70 shrink-0 mt-2"></span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </FadeIn>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
