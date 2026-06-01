import React from 'react';
import { FadeIn } from './FadeIn';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

interface Project {
  title: string;
  badge: string;
  description: string;
  features: string[];
  stack: string[];
  link: string;
}

export const Projects: React.FC = () => {
  const projectsList: Project[] = [
    {
      title: "Aarogyam Healthcare Platform",
      badge: "Production · 1,000+ Users",
      description: "End-to-end healthcare platform with appointment booking, digital prescriptions, and patient management optimized for web and mobile platforms.",
      features: [
        "Architected 30+ highly-performant REST APIs",
        "JWT + RBAC access architecture (95% drop in unauthorized entry)",
        "Database-per-tenant multi-tenant schema isolation",
        "React.js and React Native sharing unified backend service layer"
      ],
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "React Native", "JWT", "Docker"],
      link: "https://github.com/shashankdev08"
    },
    {
      title: "Inventory Management SaaS",
      badge: "Full-Stack SaaS · GST Billing",
      description: "Multi-tenant inventory management system for local shopkeepers featuring GST billing engines, real-time stock counting, and interactive discount configurations.",
      features: [
        "In-built Indian taxation engine (CGST/SGST module)",
        "Automated low-stock threshold triggers and alerts",
        "Spring Security + OAuth JWT role authorization",
        "Built on React 19, Tailwind CSS v4, and Spring Boot 3.2"
      ],
      stack: ["React 19", "Vite", "Tailwind CSS v4", "Spring Boot 3.2", "PostgreSQL", "JPA/Hibernate"],
      link: "https://github.com/shashankdev08/Inventory-Management"
    },
    {
      title: "Multi-Tenant DB Management System",
      badge: "Architecture · Docker",
      description: "Dynamic database-per-tenant system utilizing Docker-containerized isolation for high horizontal scalability and reproducible developer setup.",
      features: [
        "Guaranteed zero cross-tenant database leakage",
        "Dynamic tenant connection string assignment and swapping",
        "Fully containerized service structure for development and staging",
        "High availability replication ready"
      ],
      stack: ["Node.js", "PostgreSQL", "MongoDB", "Docker"],
      link: "https://github.com/shashankdev08"
    },
    {
      title: "School Management System",
      badge: "Java · Spring Boot",
      description: "Performant academic operations management backend handling records, enrollment, tracking, and exams.",
      features: [
        "Developed 25+ CRUD operation endpoints",
        "Accelerated database query output by 30% using complex index adjustments",
        "Built using Spring Security and clean SOLID design paradigms",
        "Secured environment handling student and teacher profiles"
      ],
      stack: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "Spring Security"],
      link: "https://github.com/shashankdev08"
    }
  ];

  return (
    <section id="projects" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-blue/[0.03] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">Featured Projects</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projectsList.map((project, idx) => (
            <FadeIn
              key={project.title}
              delay={idx * 120}
              className="group relative bg-bg-surface border border-border-custom rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-hover animated-border overflow-hidden"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span className="inline-block text-[10px] font-mono font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    {project.badge}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent-purple transition-colors"
                    aria-label="View Code Source on GitHub"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-3 group-hover:text-accent-purple transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-mono text-[10px] font-bold text-text-secondary tracking-[0.2em] uppercase mb-3 flex items-center gap-1.5">
                    <Layers className="h-3.5 w-3.5 text-accent-blue" />
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, featIdx) => (
                      <li key={featIdx} className="flex items-start gap-2.5 text-sm text-text-secondary font-light">
                        <CheckCircle className="h-4 w-4 text-accent-purple/70 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-border-custom pt-5 mt-auto relative z-10">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map(tech => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-text-secondary bg-bg-primary/80 border border-border-custom px-2.5 py-1 rounded-lg tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-bg-primary hover:bg-accent-purple text-text-primary hover:text-white transition-all duration-300 border border-border-custom hover:border-accent-purple cursor-pointer"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Repository
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
