"use client";

import React, { useState } from "react";
import { BrutalCard } from "./BrutalCard";
import { BrutalBadge } from "./BrutalBadge";
import { BrutalButton } from "./BrutalButton";
import { Sparkles, Check, ArrowRight, Clock, Globe2, ShieldCheck, Cpu, Copy } from "lucide-react";

interface MatchPreset {
  id: string;
  requirementTitle: string;
  category: string;
  engagement: "Hourly" | "Monthly" | "Fixed cost";
  developer: {
    codeName: string;
    role: string;
    experience: string;
    skills: string[];
    timezoneOverlap: string;
    rating: string;
    status: string;
    summary: string;
    recentBuild: string;
    matchPercent: number;
  };
}

const PRESETS: MatchPreset[] = [
  {
    id: "rag-chatbot",
    requirementTitle: "Customer support chatbot trained on private corporate knowledge base",
    category: "LLM engineer",
    engagement: "Monthly",
    developer: {
      codeName: "DEV-AI-409",
      role: "Senior LLM & RAG Engineer",
      experience: "6+ Years Engineering (3+ in LLMs)",
      skills: ["Python", "LangChain", "LlamaIndex", "Pinecone", "OpenAI / Claude API", "FastAPI"],
      timezoneOverlap: "5–6 Hours US / EMEA Overlap",
      rating: "Top 2% Vetted",
      status: "Available Immediately",
      summary: "Specializes in enterprise RAG pipelines with hallucination mitigation, semantic chunking, and sub-second retrieval.",
      recentBuild: "Built multi-tenant enterprise document assistant serving 45,000 queries/day with strict RBAC access.",
      matchPercent: 98.4,
    },
  },
  {
    id: "ai-agents",
    requirementTitle: "Autonomous workflow agents that plan, fetch APIs and summarize tasks",
    category: "AI agent developer",
    engagement: "Monthly",
    developer: {
      codeName: "DEV-AI-712",
      role: "Autonomous Agent Architect",
      experience: "7+ Years Engineering",
      skills: ["Python", "CrewAI", "LangGraph", "AutoGen", "Docker", "PostgreSQL"],
      timezoneOverlap: "6 Hours US / EMEA Overlap",
      rating: "Top 1% Vetted",
      status: "Available for Monthly Dedicated",
      summary: "Designs stateful, self-healing agent swarms that coordinate browser automation and internal REST APIs.",
      recentBuild: "Constructed competitive intelligence agent scraping, normalizing, and reporting industry trends daily.",
      matchPercent: 99.1,
    },
  },
  {
    id: "computer-vision",
    requirementTitle: "Computer vision pipeline for automated defect detection on video streams",
    category: "Computer vision developer",
    engagement: "Fixed cost",
    developer: {
      codeName: "DEV-AI-288",
      role: "Computer Vision & Edge ML Specialist",
      experience: "8+ Years Engineering",
      skills: ["PyTorch", "OpenCV", "YOLOv10", "TensorRT", "C++", "AWS SageMaker"],
      timezoneOverlap: "Flexible Global Shift",
      rating: "Top 3% Vetted",
      status: "Available for Fixed Scope",
      summary: "High-throughput inference optimization on CUDA and edge devices for industrial computer vision.",
      recentBuild: "Deployed millisecond-latency optical inspection model reducing manufacturing defect escapes by 38%.",
      matchPercent: 97.8,
    },
  },
  {
    id: "fullstack-ai",
    requirementTitle: "High-converting Next.js web application with integrated AI copilot",
    category: "Full Stack developer",
    engagement: "Hourly",
    developer: {
      codeName: "DEV-FS-934",
      role: "Full Stack Next.js & AI Specialist",
      experience: "5+ Years Engineering",
      skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel AI SDK", "Supabase", "Node.js"],
      timezoneOverlap: "Full US EST / UK Overlap",
      rating: "Top 2% Vetted",
      status: "Available for Sprint & Hourly",
      summary: "Bridges high-fidelity UI/UX engineering with modern streaming AI endpoints and resilient databases.",
      recentBuild: "Engineered real-time collaborative legal redlining canvas with streaming token diff highlights.",
      matchPercent: 98.9,
    },
  },
];

export const InteractiveMatcher: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<MatchPreset>(PRESETS[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleSelectPreset = (preset: MatchPreset) => {
    if (preset.id === selectedPreset.id) return;
    setIsSimulating(true);
    setTimeout(() => {
      setSelectedPreset(preset);
      setIsSimulating(false);
    }, 180);
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="w-full">
      {/* Interactive selection tabs */}
      <div className="mb-6">
        <div className="font-mono text-xs uppercase tracking-wider text-[#626262] mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#3659F5]" />
            <span>Click a sample requirement to simulate instant engineer matching:</span>
          </div>
          <span className="hidden sm:inline text-[#10B981] font-bold">Interactive simulation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {PRESETS.map((p) => {
            const isActive = p.id === selectedPreset.id;
            return (
              <button
                type="button"
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className={`p-3.5 text-left border-2 border-[#171717] transition-all duration-150 select-none ${
                  isActive
                    ? "bg-[#171717] text-white shadow-[4px_4px_0px_#3659F5] -translate-x-0.5 -translate-y-0.5"
                    : "bg-white text-[#171717] hover:bg-[#F7F5EF] shadow-[2px_2px_0px_#171717]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 border ${
                      isActive
                        ? "bg-[#E8FF63] text-[#171717] border-white"
                        : "bg-[#E7E5DF] text-[#171717] border-[#171717]"
                    }`}
                  >
                    {p.category}
                  </span>
                  <span className="font-mono text-[10px] opacity-75">{p.engagement}</span>
                </div>
                <div className="font-display font-bold text-xs sm:text-sm line-clamp-2 leading-snug">
                  {p.requirementTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Matched Developer Showcase Result (Strict equal height) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: The Requirement Blueprint */}
        <div className="lg:col-span-5 h-full bg-[#F7F5EF] border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] flex flex-col justify-between">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717]">
                  01 // Client Requirement
                </span>
                <BrutalBadge variant="yellow" size="sm">
                  VALIDATED
                </BrutalBadge>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs text-[#626262] block">Project Goal:</span>
                  <p className="font-display font-bold text-lg text-[#171717] mt-1 leading-snug">
                    &ldquo;{selectedPreset.requirementTitle}&rdquo;
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-white border border-[#171717]">
                    <span className="font-mono text-[11px] text-[#626262] block">Role</span>
                    <span className="font-display font-bold text-sm text-[#171717]">
                      {selectedPreset.category}
                    </span>
                  </div>
                  <div className="p-3 bg-white border border-[#171717]">
                    <span className="font-mono text-[11px] text-[#626262] block">Engagement</span>
                    <span className="font-display font-bold text-sm text-[#3659F5]">
                      {selectedPreset.engagement}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-[#E7E5DF] border border-[#171717] text-xs font-mono text-[#444444] space-y-1">
                  <div>✓ English Technical Fluency: C1/C2 Verified</div>
                  <div>✓ Code Architecture Audit: Passed</div>
                  <div>✓ Direct Slack / GitHub Integration Ready</div>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar pinned strictly to the bottom */}
            <div className="mt-auto pt-5 border-t-2 border-[#171717]">
              <div className="flex items-center justify-between text-xs text-[#626262] mb-2 font-mono">
                <span>Algorithm Match Confidence</span>
                <span className="font-bold text-[#10B981] font-mono">
                  {selectedPreset.developer.matchPercent}% Match SLA
                </span>
              </div>
              <div className="w-full bg-white h-2.5 border-2 border-[#171717] overflow-hidden mb-2">
                <div
                  className="bg-[#10B981] h-full transition-all duration-300 ease-out"
                  style={{ width: `${selectedPreset.developer.matchPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#626262]">
                <span>Status: Verified Technical Dossier</span>
                <span className="text-[#3659F5] font-bold">Ready to Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Matched Developer Dossier */}
        <div
          className={`lg:col-span-7 h-full bg-white border-2 border-[#171717] p-6 sm:p-7 shadow-[6px_6px_0px_#3659F5] flex flex-col justify-between transition-opacity duration-150 ${
            isSimulating ? "opacity-50" : "opacity-100"
          }`}
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-[#171717] mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#3659F5] text-white flex items-center justify-center font-mono font-bold border-2 border-[#171717] card-icon-box">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-display font-extrabold text-xl text-[#171717]">
                        {selectedPreset.developer.role}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(selectedPreset.developer.codeName)}
                        className="font-mono text-xs px-2 py-0.5 bg-[#E8FF63] border border-[#171717] font-bold flex items-center gap-1 hover:bg-[#171717] hover:text-white transition-colors"
                        title="Click to copy code name"
                      >
                        <span>{selectedPreset.developer.codeName}</span>
                        {copiedCode === selectedPreset.developer.codeName ? (
                          <Check className="w-3 h-3 text-[#10B981]" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 opacity-60" />
                        )}
                      </button>
                    </div>
                    <span className="font-mono text-xs text-[#626262]">
                      {selectedPreset.developer.experience}
                    </span>
                  </div>
                </div>

                <BrutalBadge variant="emerald" size="sm" showDot>
                  {selectedPreset.developer.status}
                </BrutalBadge>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block mb-1">
                    Technical Architecture Profile
                  </span>
                  <p className="text-sm text-[#444444] leading-relaxed">
                    {selectedPreset.developer.summary}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block mb-2">
                    Verified Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPreset.developer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#F7F5EF] border border-[#171717] text-xs font-mono font-medium text-[#171717] interactive-pill"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-[#FAFAF5] border border-[#171717] space-y-1.5">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#3659F5]">
                    Recent Production Milestone:
                  </span>
                  <p className="text-xs sm:text-sm text-[#333333] leading-snug">
                    {selectedPreset.developer.recentBuild}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#626262] pt-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#3659F5]" />
                    {selectedPreset.developer.timezoneOverlap}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                    Background Checked &amp; IP Protected
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action Pinned Strictly to Bottom */}
            <div className="mt-auto pt-5 border-t-2 border-[#171717] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#626262] font-mono">
                Ready to meet candidates like {selectedPreset.developer.codeName}?
              </div>
              <BrutalButton
                href={`/hire-ai-developer/?code=${selectedPreset.developer.codeName}`}
                variant="cobalt"
                size="md"
                className="w-full sm:w-auto"
              >
                Request Matched Profile →
              </BrutalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
