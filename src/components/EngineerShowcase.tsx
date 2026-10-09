"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BrutalBadge } from "./BrutalBadge";
import { BrutalButton } from "./BrutalButton";
import {
  CheckCircle2,
  Clock,
  Code2,
  MapPin,
  Terminal,
  Cpu,
  ArrowRight,
  Copy,
  Check,
  ShieldCheck,
  FileCheck,
  X,
  Sparkles,
} from "lucide-react";

export interface EngineerProfile {
  id: string;
  name: string;
  codeName: string;
  role: string;
  experience: string;
  location: string;
  timezoneOverlap: string;
  imageUrl: string;
  status: "Available" | "In Sprint · Available in 48h";
  skills: string[];
  recentWork: string;
  education: string;
  scores: {
    cleanCode: number;
    systemDesign: number;
    englishFluency: string;
    deliveryRating: number;
  };
}

const FEATURED_ENGINEERS: EngineerProfile[] = [
  {
    id: "dev-01",
    name: "Arjun S.",
    codeName: "DEV-AI-108",
    role: "Senior LLM & RAG Systems Architect",
    experience: "7+ Years Engineering",
    location: "Bengaluru, India",
    timezoneOverlap: "6 Hours US EST / EU Overlap",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    status: "Available",
    skills: ["Python", "LangChain", "Qdrant", "FastAPI", "Llama-3", "Docker"],
    recentWork:
      "Architected enterprise document retrieval system with semantic reranking handling 80k daily queries.",
    education: "B.Tech Computer Science, IIT Roorkee",
    scores: {
      cleanCode: 99,
      systemDesign: 98,
      englishFluency: "CEFR C2 (Native Level)",
      deliveryRating: 99,
    },
  },
  {
    id: "dev-02",
    name: "Pooja V.",
    codeName: "DEV-AI-442",
    role: "Autonomous Agent & AI Workflow Engineer",
    experience: "6+ Years Engineering",
    location: "Chandigarh–Mohali, India",
    timezoneOverlap: "5 Hours US EST / UK Overlap",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    status: "Available",
    skills: ["Python", "CrewAI", "LangGraph", "PostgreSQL", "OpenAI Swarm", "Redis"],
    recentWork:
      "Constructed multi-agent competitive research swarm scraping and synthesizing SEC filings automatically.",
    education: "M.Tech Data Science, PEC Chandigarh",
    scores: {
      cleanCode: 98,
      systemDesign: 97,
      englishFluency: "CEFR C2 (Fluent Professional)",
      deliveryRating: 100,
    },
  },
  {
    id: "dev-03",
    name: "Vikram R.",
    codeName: "DEV-FS-910",
    role: "Full Stack Next.js & Distributed Systems Lead",
    experience: "8+ Years Engineering",
    location: "Hyderabad, India",
    timezoneOverlap: "6 Hours US PST / EST Overlap",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    status: "In Sprint · Available in 48h",
    skills: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Kafka"],
    recentWork:
      "Engineered real-time collaborative legal redlining editor with optimistic concurrency and CRDTs.",
    education: "B.Tech Information Technology, NIT Warangal",
    scores: {
      cleanCode: 99,
      systemDesign: 99,
      englishFluency: "CEFR C1 (Advanced)",
      deliveryRating: 98,
    },
  },
  {
    id: "dev-04",
    name: "Ananya M.",
    codeName: "DEV-CV-631",
    role: "Computer Vision & Edge ML Specialist",
    experience: "6+ Years Engineering",
    location: "Pune, India",
    timezoneOverlap: "5 Hours US EST / EU Overlap",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    status: "Available",
    skills: ["PyTorch", "OpenCV", "TensorRT", "YOLOv10", "CUDA", "AWS SageMaker"],
    recentWork:
      "Optimized real-time optical inspection pipeline on edge Jetson devices with sub-15ms latency.",
    education: "M.S. Artificial Intelligence, COEP Pune",
    scores: {
      cleanCode: 97,
      systemDesign: 98,
      englishFluency: "CEFR C2 (Native Level)",
      deliveryRating: 99,
    },
  },
];

export const EngineerShowcase: React.FC = () => {
  const [activeSpecialty, setActiveSpecialty] = useState<string>("ALL");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedDossier, setSelectedDossier] = useState<EngineerProfile | null>(null);

  const filteredEngineers =
    activeSpecialty === "ALL"
      ? FEATURED_ENGINEERS
      : activeSpecialty === "AI"
      ? FEATURED_ENGINEERS.filter((e) => e.role.includes("AI") || e.role.includes("LLM"))
      : FEATURED_ENGINEERS.filter((e) => !e.role.includes("AI") && !e.role.includes("LLM"));

  const handleCopyCode = (codeName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(codeName);
    setCopiedId(codeName);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Filter and metadata toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-[#171717]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase text-[#626262]">
            FILTER BY SPECIALTY:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["ALL", "AI / LLM SPECIALISTS", "FULL STACK & SYSTEMS"].map((tab) => {
              const value =
                tab === "AI / LLM SPECIALISTS"
                  ? "AI"
                  : tab === "FULL STACK & SYSTEMS"
                  ? "FS"
                  : "ALL";
              const isActive = activeSpecialty === value;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveSpecialty(value)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold border-2 border-[#171717] transition-all duration-150 select-none ${
                    isActive
                      ? "bg-[#3659F5] text-white shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5"
                      : "bg-white text-[#171717] hover:bg-[#F7F5EF] shadow-[2px_2px_0px_#171717]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#626262]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>All profiles 100% pre-vetted &amp; background checked</span>
        </div>
      </div>

      {/* Engineer Cards Grid (Strict equal-height with bottom alignment) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {filteredEngineers.map((engineer) => (
          <div
            key={engineer.id}
            className="group h-full bg-white border-2 border-[#171717] shadow-[5px_5px_0px_#171717] hover:shadow-[8px_8px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
          >
            {/* Top Container */}
            <div className="flex-1 flex flex-col justify-between">
              {/* Card Header Strip: Candidate Reference & Availability */}
              <div className="p-2.5 bg-[#F7F5EF] border-b-2 border-[#171717] flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => handleCopyCode(engineer.codeName, e)}
                  className="font-mono text-[10px] font-bold bg-[#171717] text-white px-2 py-0.5 border border-[#171717] flex items-center gap-1 hover:bg-[#3659F5] transition-colors"
                  title="Click to copy candidate reference"
                >
                  <span>{engineer.codeName}</span>
                  {copiedId === engineer.codeName ? (
                    <Check className="w-3 h-3 text-[#E8FF63]" />
                  ) : (
                    <Copy className="w-2.5 h-2.5 opacity-70" />
                  )}
                </button>
                <span className="font-mono text-[10px] font-bold bg-[#E8FF63] text-[#171717] px-2 py-0.5 border border-[#171717]">
                  {engineer.status === "Available" ? "AVAILABLE" : "READY IN 48H"}
                </span>
              </div>

              {/* Clean Photographic Portrait with ZERO text overlaid */}
              <div className="relative h-48 sm:h-52 w-full border-b-2 border-[#171717] overflow-hidden bg-[#171717]">
                <Image
                  src={engineer.imageUrl}
                  alt={engineer.role}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                />
              </div>

              {/* Location & Experience Dock strictly below photo */}
              <div className="px-3 py-1.5 bg-[#F7F5EF] border-b-2 border-[#171717] flex items-center justify-between font-mono text-[11px]">
                <span className="flex items-center gap-1 text-[#171717] font-semibold">
                  <MapPin className="w-3 h-3 text-[#3659F5]" />
                  {engineer.location}
                </span>
                <span className="text-[#626262] font-bold">{engineer.experience}</span>
              </div>

              {/* Body Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                {/* Upper Body: Role & Description */}
                <div>
                  <div className="min-h-[3rem]">
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-[#171717] leading-snug group-hover:text-[#3659F5] transition-colors line-clamp-2">
                      {engineer.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[#626262] font-semibold block mt-1">
                    {engineer.education}
                  </span>

                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-3 mt-2 min-h-[3.25rem]">
                    {engineer.recentWork}
                  </p>
                </div>

                {/* Lower Body: Skills & Timezone pinned to bottom */}
                <div className="mt-auto pt-3 border-t border-[#E7E5DF]">
                  <div className="flex flex-wrap gap-1">
                    {engineer.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-[#F7F5EF] border border-[#171717] text-[10px] font-mono font-medium text-[#171717] interactive-pill"
                      >
                        {skill}
                      </span>
                    ))}
                    {engineer.skills.length > 4 && (
                      <span className="px-1.5 py-0.5 bg-[#E7E5DF] text-[10px] font-mono text-[#626262]">
                        +{engineer.skills.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-[#626262] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#3659F5]" />
                    <span>{engineer.timezoneOverlap}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom action bar pinned strictly to the bottom */}
            <div className="p-5 pt-0 mt-auto space-y-2">
              <button
                type="button"
                onClick={() => setSelectedDossier(engineer)}
                className="w-full py-1.5 px-3 bg-[#F7F5EF] hover:bg-[#E8FF63] text-[#171717] border border-[#171717] font-mono text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileCheck className="w-3.5 h-3.5 text-[#3659F5]" />
                <span>View Vetting Scorecard</span>
              </button>

              <BrutalButton
                href={`/hire-ai-developer/?code=${engineer.codeName}`}
                variant="cobalt"
                size="sm"
                isFullWidth
                className="font-bold tracking-tight text-xs uppercase"
              >
                Request Candidate Intro →
              </BrutalButton>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Quick Vetting Scorecard Modal */}
      {selectedDossier && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setSelectedDossier(null)}
        >
          <div
            className="relative w-full max-w-lg bg-white border-2 border-[#171717] shadow-[8px_8px_0px_#171717] p-6 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b-2 border-[#171717] mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold bg-[#171717] text-white px-2 py-0.5">
                    {selectedDossier.codeName}
                  </span>
                  <BrutalBadge variant="emerald" size="sm" showDot>
                    {selectedDossier.status}
                  </BrutalBadge>
                </div>
                <h3 className="font-display font-black text-xl text-[#171717]">
                  {selectedDossier.role}
                </h3>
                <span className="font-mono text-xs text-[#626262]">
                  {selectedDossier.education} · {selectedDossier.location}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDossier(null)}
                className="p-1 border border-[#171717] hover:bg-[#E8FF63] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-[#171717]" />
              </button>
            </div>

            {/* Vetting Scorecard Grid */}
            <div className="space-y-4 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3659F5] block">
                AUDITED TECHNICAL BENCHMARKS:
              </span>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#F7F5EF] border border-[#171717]">
                  <span className="font-mono text-[10px] text-[#626262] block">CLEAN CODE &amp; TESTS</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-mono font-black text-xl text-[#171717]">
                      {selectedDossier.scores.cleanCode}
                    </span>
                    <span className="font-mono text-xs text-[#626262]">/ 100</span>
                  </div>
                  <div className="w-full bg-[#E7E5DF] h-1.5 mt-1.5">
                    <div
                      className="bg-[#10B981] h-1.5"
                      style={{ width: `${selectedDossier.scores.cleanCode}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-3 bg-[#F7F5EF] border border-[#171717]">
                  <span className="font-mono text-[10px] text-[#626262] block">SYSTEM DESIGN</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-mono font-black text-xl text-[#171717]">
                      {selectedDossier.scores.systemDesign}
                    </span>
                    <span className="font-mono text-xs text-[#626262]">/ 100</span>
                  </div>
                  <div className="w-full bg-[#E7E5DF] h-1.5 mt-1.5">
                    <div
                      className="bg-[#3659F5] h-1.5"
                      style={{ width: `${selectedDossier.scores.systemDesign}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#FAFAF5] border border-[#171717] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#626262]">ENGLISH COMMUNICATION:</span>
                  <span className="font-bold text-[#171717]">
                    {selectedDossier.scores.englishFluency}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#626262]">TIMEZONE OVERLAP:</span>
                  <span className="font-bold text-[#3659F5]">
                    {selectedDossier.timezoneOverlap}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#626262]">IP OWNERSHIP GUARANTEE:</span>
                  <span className="font-bold text-[#10B981]">100% Upfront Assignment</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold text-[#171717] block mb-1">
                  RECENT PRODUCTION BUILD:
                </span>
                <p className="text-xs text-[#444444] leading-relaxed bg-[#F7F5EF] p-2.5 border border-[#171717]">
                  {selectedDossier.recentWork}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t-2 border-[#171717]">
              <BrutalButton
                href={`/hire-ai-developer/?code=${selectedDossier.codeName}`}
                variant="cobalt"
                size="md"
                isFullWidth
              >
                Request Candidate Intro ({selectedDossier.codeName}) →
              </BrutalButton>
              <button
                type="button"
                onClick={() => setSelectedDossier(null)}
                className="px-4 py-2 text-xs font-mono font-bold border-2 border-[#171717] hover:bg-[#F7F5EF] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
