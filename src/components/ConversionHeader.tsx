"use client";

import React from "react";
import Link from "next/link";
import { BrutalButton } from "./BrutalButton";
import { BrutalBadge } from "./BrutalBadge";
import { ShieldCheck, ArrowDown } from "lucide-react";

export const ConversionHeader: React.FC = () => {
  const scrollToTopForm = () => {
    const el = document.getElementById("form-1") || document.getElementById("hero-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5EF] border-b-2 border-[#171717]">
      {/* Top micro bar */}
      <div className="bg-[#171717] text-white text-[11px] sm:text-xs py-1.5 px-4 font-mono flex items-center justify-between border-b border-[#171717]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>Vetted AI Developer Intake · Hourly, Monthly & Fixed Cost</span>
          </div>
          <span className="hidden sm:inline-block font-mono text-[#E8FF63]">
            SLA: Match in &lt; 24h
          </span>
        </div>
      </div>

      {/* Main minimal conversion bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity (static/home anchor) */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#171717] text-[#E8FF63] flex items-center justify-center font-display font-bold text-xl border-2 border-[#171717] shadow-[2px_2px_0px_#3659F5]">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#171717] leading-none">
              HIRE DESI DEV
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#626262] tracking-wider uppercase mt-0.5">
              Hire AI Developer Desk
            </span>
          </div>
        </div>

        {/* Live Status indicator */}
        <div className="hidden md:flex items-center gap-3">
          <BrutalBadge variant="emerald" size="md" showDot>
            Vetting Desk Live
          </BrutalBadge>
        </div>

        {/* Direct Scroll to Form Action */}
        <div>
          <BrutalButton
            variant="cobalt"
            size="md"
            onClick={scrollToTopForm}
            className="text-xs sm:text-sm"
          >
            <span className="hidden sm:inline">Get an AI Developer</span>
            <span className="sm:hidden">Get Developer</span>
            <ArrowDown className="ml-1.5 w-4 h-4" />
          </BrutalButton>
        </div>
      </div>
    </header>
  );
};
