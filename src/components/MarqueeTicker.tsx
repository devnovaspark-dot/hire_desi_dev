"use client";

import React from "react";

export interface MarqueeTickerProps {
  variant?: "yellow" | "dark" | "cobalt";
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  variant = "yellow",
  className = "",
}) => {
  const ITEMS = [
    "★ TOP 2% VETTED INDIAN TALENT",
    "● 4–6H SYNCHRONOUS US/EU OVERLAP",
    "★ 0% MIDDLEMAN MARKUP",
    "● 100% CLIENT IP OWNERSHIP",
    "★ CANDIDATE DOSSIERS IN < 24H",
    "● C1 / C2 TECHNICAL ENGLISH FLUENCY",
    "★ 22 GLOBAL TARGET MARKETS SUPPORTED",
    "● RIGOROUS 5-GATE CODE AUDITS",
  ];

  const variantStyles = {
    yellow: "bg-[#E8FF63] text-[#171717] border-y-2 border-[#171717]",
    dark: "bg-[#171717] text-white border-y-2 border-[#171717]",
    cobalt: "bg-[#3659F5] text-white border-y-2 border-[#171717]",
  };

  return (
    <div
      className={`relative w-full overflow-hidden py-3 font-mono text-xs sm:text-sm font-bold tracking-wider select-none ${variantStyles[variant]} ${className}`}
      aria-hidden="true"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4">
          {ITEMS.map((item, idx) => (
            <span key={`t1-${idx}`} className="inline-flex items-center gap-2">
              <span>{item}</span>
              <span className="opacity-40">|</span>
            </span>
          ))}
        </div>

        {/* Track 2 (Duplicate for continuous seamless loop) */}
        <div className="flex items-center gap-8 px-4">
          {ITEMS.map((item, idx) => (
            <span key={`t2-${idx}`} className="inline-flex items-center gap-2">
              <span>{item}</span>
              <span className="opacity-40">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
