import React from 'react';
import { FadeIn } from './FadeIn';
import { Code2, LayoutTemplate, Server, Database, Settings, Cpu } from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  borderClass: string;
  skills: Skill[];
  isAiTools?: boolean;
}

export const Skills: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="h-5 w-5 text-emerald-400" />,
      borderClass: "border-l-emerald-500",
      skills: [{ name: "Java" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "Python" }, { name: "SQL" }]
    },
    {
      title: "Frontend",
      icon: <LayoutTemplate className="h-5 w-5 text-sky-400" />,
      borderClass: "border-l-sky-500",
      skills: [{ name: "React.js" }, { name: "React Native" }, { name: "Tailwind CSS" }, { name: "HTML5" }, { name: "Material UI" }, { name: "Bootstrap" }]
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5 text-indigo-400" />,
      borderClass: "border-l-indigo-500",
      skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "Spring Boot" }, { name: "Hibernate" }]
    },
    {
      title: "Databases",
      icon: <Database className="h-5 w-5 text-amber-400" />,
      borderClass: "border-l-amber-500",
      skills: [{ name: "MongoDB" }, { name: "PostgreSQL" }, { name: "MySQL" }, { name: "Redis" }]
    },
    {
      title: "DevOps & Infra",
      icon: <Settings className="h-5 w-5 text-rose-400" />,
      borderClass: "border-l-rose-500",
      skills: [{ name: "Docker" }, { name: "Git" }, { name: "Firebase" }, { name: "Postman" }, { name: "Figma" }]
    },
    {
      title: "Learning & Building (AI Tools)",
      icon: <Cpu className="h-5 w-5 text-accent-purple" />,
      borderClass: "border-l-accent-purple",
      skills: [{ name: "Claude (Anthropic)" }, { name: "ChatGPT" }, { name: "GitHub Copilot" }, { name: "Cursor AI" }, { name: "LangChain" }, { name: "MCP" }],
      isAiTools: true
    }
  ];

  return (
    <section id="skills" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-purple/[0.03] filter blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center mb-20">
          <span className="inline-block font-mono text-xs text-accent-purple tracking-[0.25em] uppercase mb-3 font-semibold">Tech Stack</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">Technical Skills</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, catIdx) => (
            <FadeIn
              key={category.title}
              delay={catIdx * 80}
              className={`p-6 rounded-2xl bg-bg-surface border flex flex-col justify-between h-full relative overflow-hidden ${
                category.isAiTools
                  ? 'border-accent-purple/50 ai-glow-border'
                  : 'border-border-custom card-hover animated-border'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-bg-primary border border-border-custom rounded-xl">
                    {category.icon}
                  </div>
                  <h3 className={`font-mono text-sm sm:text-base font-bold ${
                    category.isAiTools ? 'gradient-text' : 'text-text-primary'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`flex items-center bg-bg-primary/60 hover:bg-bg-primary px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs sm:text-sm font-mono text-text-primary border-l-3 ${category.borderClass} hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border border-border-custom cursor-default`}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
