import React from "react";
import { BrutalBadge } from "./BrutalBadge";
import { ShieldCheck, GitPullRequest, Terminal, MessageSquareCode, CheckSquare, Zap, Lock } from "lucide-react";

export const VettingDeepDive: React.FC = () => {
  const GATES = [
    {
      gate: "GATE 01",
      title: "Production Codebase & Architecture Audit",
      desc: "We review raw GitHub repositories, commit hygiene, dependency management, and design patterns. Engineers who only build shallow tutorials are immediately filtered out.",
      filterRate: "65% Filtered",
      icon: GitPullRequest,
    },
    {
      gate: "GATE 02",
      title: "Live Pair Programming on Hard Problems",
      desc: "Candidates solve realistic systems engineering challenges with our technical directors. We evaluate debugging intuition, algorithmic speed, and architectural judgment.",
      filterRate: "78% Cumulative Filtered",
      icon: Terminal,
    },
    {
      gate: "GATE 03",
      title: "AI & Domain-Specific Stress Testing",
      desc: "AI candidates are benchmarked on hallucination prevention, prompt evaluation, vector indexing, and memory overhead. Full-stack candidates build scalable data models.",
      filterRate: "89% Cumulative Filtered",
      icon: Zap,
    },
    {
      gate: "GATE 04",
      title: "C1 / C2 Spoken English & Async Hygiene",
      desc: "We test verbal communication, ability to challenge technical specs constructively, and discipline with written PR descriptions and Jira documentation.",
      filterRate: "95% Cumulative Filtered",
      icon: MessageSquareCode,
    },
    {
      gate: "GATE 05",
      title: "Identity, Background & IP Governance",
      desc: "Comprehensive background checks, verification of academic credentials, and execution of master IP assignment agreements guaranteeing 100% code transfer.",
      filterRate: "TOP 2% ADMITTED",
      icon: Lock,
      highlight: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Intro strip */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#171717]">
        <div>
          <BrutalBadge variant="dark" size="sm" className="mb-2">
            RIGOROUS TALENT PIPELINE
          </BrutalBadge>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
            The 5-Gate Engineering Vetting Audit
          </h2>
        </div>
        <div className="p-3 bg-[#E8FF63] border-2 border-[#171717] font-mono text-xs font-bold text-[#171717] shadow-[2px_2px_0px_#171717]">
          ★ 98 out of 100 applicants do not pass our vetting
        </div>
      </div>

      {/* Process list */}
      <div className="space-y-4">
        {GATES.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.gate}
              className={`p-6 border-2 border-[#171717] flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all ${
                g.highlight
                  ? "bg-[#FAFAF5] shadow-[5px_5px_0px_#3659F5] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white shadow-[3px_3px_0px_#171717] hover:shadow-[5px_5px_0px_#171717]"
              }`}
            >
              <div className="flex items-start gap-4 max-w-2xl">
                <div className="w-12 h-12 bg-[#F7F5EF] border-2 border-[#171717] flex items-center justify-center text-[#171717] flex-shrink-0 shadow-[2px_2px_0px_#171717]">
                  <Icon className="w-6 h-6 text-[#3659F5]" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#3659F5] uppercase">
                      {g.gate}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#171717] mb-1">{g.title}</h3>
                  <p className="text-sm text-[#555555] leading-relaxed">{g.desc}</p>
                </div>
              </div>

              <div className="flex-shrink-0 text-left md:text-right">
                <span
                  className={`inline-block font-mono text-xs font-bold px-3 py-1.5 border-2 border-[#171717] ${
                    g.highlight
                      ? "bg-[#10B981] text-white shadow-[2px_2px_0px_#171717]"
                      : "bg-[#F7F5EF] text-[#626262]"
                  }`}
                >
                  {g.filterRate}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
