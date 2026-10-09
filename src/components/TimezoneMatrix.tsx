"use client";

import React, { useState } from "react";
import { BrutalBadge } from "./BrutalBadge";
import { Clock, Globe2, Sun, Moon, CheckCircle2, MessageSquare, Code2, Users } from "lucide-react";

interface RegionSchedule {
  region: string;
  clientTime: string;
  istTime: string;
  overlapHours: string;
  overlapSpan: string;
  primaryWorkflow: string;
}

const REGIONS: RegionSchedule[] = [
  {
    region: "US Eastern (New York, Boston, Miami)",
    clientTime: "08:00 AM – 01:00 PM EST",
    istTime: "05:30 PM – 10:30 PM IST",
    overlapHours: "5 Hours Synchronous",
    overlapSpan: "Morning US / Evening India",
    primaryWorkflow: "Daily standup at 09:00 AM EST, live pair programming & PR code reviews.",
  },
  {
    region: "US Pacific (San Francisco, Seattle, LA)",
    clientTime: "08:00 AM – 12:00 PM PST",
    istTime: "08:30 PM – 12:30 AM IST",
    overlapHours: "4 Hours Synchronous",
    overlapSpan: "Morning West Coast / Late Evening India",
    primaryWorkflow: "Morning sync, ticket handoff, and full afternoon US autonomous deep work.",
  },
  {
    region: "United Kingdom & Ireland (London, Dublin)",
    clientTime: "09:00 AM – 03:00 PM GMT",
    istTime: "02:30 PM – 08:30 PM IST",
    overlapHours: "6 Hours Synchronous",
    overlapSpan: "Full Midday Overlap",
    primaryWorkflow: "Comprehensive daytime overlap for real-time collaboration and sprint planning.",
  },
  {
    region: "Western Europe (Berlin, Paris, Amsterdam)",
    clientTime: "09:00 AM – 03:00 PM CET",
    istTime: "01:30 PM – 07:30 PM IST",
    overlapHours: "6 Hours Synchronous",
    overlapSpan: "Full Midday Overlap",
    primaryWorkflow: "Near-total alignment with European sprint cycles and architecture syncs.",
  },
  {
    region: "Australia & Singapore (Sydney, Singapore)",
    clientTime: "09:00 AM – 05:00 PM SGT / AEST",
    istTime: "06:30 AM – 02:30 PM IST",
    overlapHours: "7–8 Hours Synchronous",
    overlapSpan: "Full Working Day Overlap",
    primaryWorkflow: "Direct parallel working day with real-time pairing across all milestones.",
  },
];

export const TimezoneMatrix: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = REGIONS[selectedIdx];

  return (
    <div className="w-full">
      {/* Selector pills */}
      <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b-2 border-[#171717]">
        {REGIONS.map((r, i) => {
          const isActive = i === selectedIdx;
          return (
            <button
              key={r.region}
              type="button"
              onClick={() => setSelectedIdx(i)}
              className={`px-3.5 py-2 text-xs sm:text-sm font-mono font-bold border-2 border-[#171717] transition-all ${
                isActive
                  ? "bg-[#3659F5] text-white shadow-[3px_3px_0px_#171717] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white text-[#171717] hover:bg-[#F7F5EF] shadow-[2px_2px_0px_#171717]"
              }`}
            >
              {r.region.split("(")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Main interactive schedule board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Schedule Breakdown */}
        <div className="lg:col-span-7 bg-white border-2 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#171717] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#171717] mb-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3659F5] uppercase tracking-wider block">
                  SELECTED REGION
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#171717]">
                  {current.region}
                </h3>
              </div>
              <BrutalBadge variant="emerald" size="sm" showDot>
                {current.overlapHours}
              </BrutalBadge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-[#F7F5EF] border-2 border-[#171717]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#626262] mb-1">
                  <Sun className="w-4 h-4 text-[#E8FF63]" />
                  <span>CLIENT LOCAL WINDOW</span>
                </div>
                <div className="font-display font-bold text-lg text-[#171717]">
                  {current.clientTime}
                </div>
              </div>

              <div className="p-4 bg-[#F7F5EF] border-2 border-[#171717]">
                <div className="flex items-center gap-2 font-mono text-xs text-[#626262] mb-1">
                  <Moon className="w-4 h-4 text-[#3659F5]" />
                  <span>ENGINEER (IST) WINDOW</span>
                </div>
                <div className="font-display font-bold text-lg text-[#3659F5]">
                  {current.istTime}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block">
                Collaboration Cadence:
              </span>
              <p className="text-sm sm:text-base text-[#444444] leading-relaxed">
                {current.primaryWorkflow}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-5 border-t-2 border-[#171717] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#626262]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Daily 15-min Video Standup
            </span>
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#3659F5]" />
              Synchronous Slack Ping
            </span>
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#171717]" />
              PR Reviews In Overlap
            </span>
          </div>
        </div>

        {/* Right: The 24-Hour Follow-The-Sun Advantage */}
        <div className="lg:col-span-5 bg-[#171717] text-white border-2 border-[#171717] p-6 sm:p-8 shadow-[6px_6px_0px_#3659F5] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-[#E8FF63] uppercase tracking-widest block">
              THE 24-HOUR ADVANTAGE
            </span>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
              Wake up to shipped features and reviewed pull requests
            </h3>

            <p className="text-sm text-[#CCCCCC] leading-relaxed">
              When your domestic team logs off for the evening, your Indian engineer takes the baton.
              Complex bug fixes, test suites, and backend pipelines are executed while you sleep.
            </p>

            <div className="p-3.5 bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
              <div className="text-[#E8FF63] font-bold">TYPICAL DAILY CYCLE:</div>
              <div className="text-[#D4D4D4]">09:00 AM EST: Live joint standup &amp; PR signoff</div>
              <div className="text-[#D4D4D4]">01:00 PM EST: Ticket handoff for deep building</div>
              <div className="text-[#10B981]">08:00 AM EST (Next day): Code pushed, tested, ready</div>
            </div>
          </div>

          <div className="mt-auto pt-5 border-t-2 border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#E8FF63]">
              <CheckCircle2 className="w-4 h-4 text-[#E8FF63]" />
              Continuous 24h Velocity
            </span>
            <span className="flex items-center gap-1.5 text-[#10B981]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              Zero Standup Blockers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
