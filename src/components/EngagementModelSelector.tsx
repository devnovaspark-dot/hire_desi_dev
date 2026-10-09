"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrutalBadge } from "./BrutalBadge";
import { BrutalButton } from "./BrutalButton";
import { Check, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export interface EngagementModelSelectorProps {
  formAnchor?: string;
  isAiLanding?: boolean;
}

export const EngagementModelSelector: React.FC<EngagementModelSelectorProps> = ({
  formAnchor = "/hire-ai-developer/",
  isAiLanding = false,
}) => {
  const [selectedModel, setSelectedModel] = useState<string>("Monthly Dedicated");

  const MODELS = [
    {
      id: "hourly",
      name: isAiLanding ? "Hourly Sprint" : "Hourly Sprints",
      headline: "Flexible hours for changing scopes",
      desc: isAiLanding
        ? "Engage specialized AI practitioners for the exact hours your architecture requires. Scale hours dynamically."
        : "Engage specialized talent for the exact hours your project requires. Scale hours up or down dynamically.",
      bestFor: "Audits, exploratory spikes, bug fixing, and rapid prototyping.",
      tag: "MODEL 01",
      commitPeriod: "No Minimum Commitment",
      turnaround: "Start within 24h",
    },
    {
      id: "monthly",
      name: "Monthly Dedicated",
      headline: "Embedded engineer in your team",
      desc: isAiLanding
        ? "A dedicated Indian AI engineer working 160 hours/month exclusively on your product roadmap and pipelines."
        : "A dedicated Indian engineer working 160 hours/month exclusively on your product roadmap and sprints.",
      bestFor: "Core product development, long-term roadmaps, and continuous delivery.",
      tag: "MODEL 02",
      commitPeriod: "Month-to-Month Basis",
      turnaround: "Onboard in 48h",
      popular: true,
    },
    {
      id: "fixed",
      name: "Fixed Cost Delivery",
      headline: "Scoped delivery with agreed outcomes",
      desc: isAiLanding
        ? "Share an AI specification. We assign an engineer or small pod to deliver the defined milestone with fixed outcomes."
        : "Share a technical specification. We assign an engineer or small pod to deliver the defined milestone.",
      bestFor: "Proofs of concept, standalone MVPs, and well-scoped integrations.",
      tag: "MODEL 03",
      commitPeriod: "Milestone-Based Delivery",
      turnaround: "Scope review in 12h",
    },
  ];

  return (
    <div className="w-full">
      {/* Interactive switcher bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b-2 border-[#171717]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold uppercase text-[#626262]">
            SELECT ENGAGEMENT MODEL:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {MODELS.map((m) => {
              const isActive = selectedModel === m.name;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedModel(m.name)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold border-2 border-[#171717] transition-all select-none ${
                    isActive
                      ? "bg-[#3659F5] text-white shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5"
                      : "bg-white text-[#171717] hover:bg-[#F7F5EF] shadow-[2px_2px_0px_#171717]"
                  }`}
                >
                  {m.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="text-xs font-mono text-[#626262] flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Switch models at any time with zero penalty</span>
        </div>
      </div>

      {/* 3 Model Cards with Strict Bottom Alignment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {MODELS.map((m) => {
          const isSelected = selectedModel === m.name;
          return (
            <div
              key={m.id}
              onClick={() => setSelectedModel(m.name)}
              className={`group cursor-pointer h-full p-6 sm:p-7 border-2 border-[#171717] flex flex-col justify-between transition-all duration-200 ${
                isSelected
                  ? "bg-[#FAFAF5] shadow-[7px_7px_0px_#3659F5] -translate-x-1 -translate-y-1"
                  : "bg-white shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5"
              }`}
            >
              {/* Upper Content Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Top Bar with Tag & Popular Badge */}
                  <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
                    <span className="font-mono text-xs font-bold text-[#626262] uppercase">
                      {m.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {m.popular && (
                        <BrutalBadge variant="yellow" size="sm">
                          POPULAR
                        </BrutalBadge>
                      )}
                      {isSelected && (
                        <span className="font-mono text-[10px] bg-[#3659F5] text-white px-1.5 py-0.5 border border-[#171717] font-bold">
                          ACTIVE
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-[#171717] mb-1 group-hover:text-[#3659F5] transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#3659F5] mb-3">{m.headline}</p>
                  <p className="text-sm text-[#444444] leading-relaxed mb-4 min-h-[3.75rem]">
                    {m.desc}
                  </p>
                </div>

                {/* Ideal For Callout Box with balanced height */}
                <div className="mt-auto space-y-3">
                  <div className="p-3 bg-[#F7F5EF] border border-[#171717] text-xs text-[#555555] min-h-[4.5rem] flex flex-col justify-center">
                    <div>
                      <strong className="text-[#171717]">Ideal For:</strong> {m.bestFor}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#626262] pt-1">
                    <div className="flex items-center gap-1">
                      <span className="text-[#10B981] font-bold">✓</span>
                      <span>{m.commitPeriod}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-end">
                      <span className="text-[#3659F5] font-bold">⚡</span>
                      <span>{m.turnaround}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Action Button Strictly Pinned to the Bottom Baseline */}
              <div className="pt-4 border-t border-[#E7E5DF] mt-6">
                <BrutalButton
                  href={formAnchor.startsWith("#") ? formAnchor : `${formAnchor}?model=${encodeURIComponent(m.name)}`}
                  variant={isSelected ? "cobalt" : "outline"}
                  size="md"
                  isFullWidth
                  className="font-bold tracking-tight text-xs sm:text-sm uppercase"
                >
                  {isSelected ? `Engage on ${m.name} →` : `Select ${m.name} →`}
                </BrutalButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
