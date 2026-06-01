import React from 'react';
import { FadeIn } from './FadeIn';
import { Brain, Rocket, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

interface AICard {
  title: string;
  icon: React.ReactNode;
  list: string[];
}

export const AIExplorer: React.FC = () => {
  const cards: AICard[] = [
    {
      title: "AI Tools I Use Daily",
      icon: <Brain className="h-6 w-6 text-accent-purple" />,
      list: [
        "Claude (Anthropic) - LLM logic & code review",
        "ChatGPT - quick prototyping & queries",
        "GitHub Copilot - autocomplete flow",
        "Cursor AI - codebase-wide agentic editing"
      ]
    },
    {
      title: "What I'm Building",
      icon: <Rocket className="h-6 w-6 text-accent-blue" />,
      list: [
        "LLM-powered API integrations & tool calling",
        "AI agent workflows & task automation",
        "MCP (Model Context Protocol) custom servers",
        "Structured prompt engineering for dev tools"
      ]
    },
    {
      title: "Currently Exploring",
      icon: <Compass className="h-6 w-6 text-emerald-400" />,
      list: [
        "LangChain agent orchestration & stateful graphs",
        "RAG (Retrieval Augmented Generation) workflows",
        "Autonomous coding agents & evaluation frameworks",
        "AI + backend design pattern integrations"
      ]
    }
  ];

  return (
    <section id="ai" className="py-28 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-purple/[0.04] filter blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent-blue/[0.03] filter blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FadeIn className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/25 text-xs font-mono mb-4 font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            Cutting Edge Exploration
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-3">AI Tools & Agent Building</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-purple to-accent-blue mx-auto rounded-full"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <FadeIn
              key={card.title}
              delay={idx * 120}
              className="ai-glow-border border border-accent-purple/15 bg-bg-surface/80 backdrop-blur-sm p-6 sm:p-8 flex flex-col items-start relative overflow-hidden"
            >
              <div className="p-3.5 bg-bg-primary border border-border-custom rounded-2xl mb-6 shadow-md shadow-accent-purple/5 relative z-10">
                {card.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-6 relative z-10">
                {card.title}
              </h3>

              <ul className="space-y-3.5 w-full relative z-10">
                {card.list.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm text-text-secondary font-light">
                    <CheckCircle2 className="h-4 w-4 text-accent-purple/70 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
