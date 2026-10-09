"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const HeroVisualComposition: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-full flex flex-col justify-between">
      {/* Background brutalist offset shadow block */}
      <div className="absolute inset-0 bg-[#3659F5] translate-x-2.5 translate-y-2.5 sm:translate-x-3 sm:translate-y-3 border-2 border-[#171717]"></div>

      {/* Main Container Card: Strict clean portrait with 4 brutalist masking tapes on corners and zero text overlays */}
      <div className="relative h-full bg-white border-2 border-[#171717] p-5 sm:p-6 z-10 flex flex-col justify-between shadow-[2px_2px_0px_#171717]">
        {/* Photographic portrait with 4 Brutalist Masking Tapes on each corner */}
        <div className="relative w-full my-auto py-2">
          {/* Framed Image Container */}
          <div className="relative h-72 sm:h-80 lg:h-[340px] xl:h-[370px] w-full border-2 border-[#171717] overflow-hidden bg-[#171717] group shadow-[2px_2px_0px_#171717]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Pre-vetted Senior Software Engineer"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 550px"
              className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
            />
          </div>

          {/* 4 Brutalist Corner Masking Tapes */}
          {/* 1. Top-Left Corner Tape */}
          <div
            className="absolute -top-1.5 -left-3 w-14 sm:w-16 h-5 sm:h-6 bg-[#E8FF63]/90 border border-[#171717] -rotate-45 shadow-[1px_2px_3px_rgba(0,0,0,0.18)] z-20 pointer-events-none select-none backdrop-blur-xs"
            aria-hidden="true"
          ></div>

          {/* 2. Top-Right Corner Tape */}
          <div
            className="absolute -top-1.5 -right-3 w-14 sm:w-16 h-5 sm:h-6 bg-[#E8FF63]/90 border border-[#171717] rotate-45 shadow-[1px_2px_3px_rgba(0,0,0,0.18)] z-20 pointer-events-none select-none backdrop-blur-xs"
            aria-hidden="true"
          ></div>

          {/* 3. Bottom-Left Corner Tape */}
          <div
            className="absolute -bottom-1.5 -left-3 w-14 sm:w-16 h-5 sm:h-6 bg-[#E8FF63]/90 border border-[#171717] rotate-45 shadow-[1px_2px_3px_rgba(0,0,0,0.18)] z-20 pointer-events-none select-none backdrop-blur-xs"
            aria-hidden="true"
          ></div>

          {/* 4. Bottom-Right Corner Tape */}
          <div
            className="absolute -bottom-1.5 -right-3 w-14 sm:w-16 h-5 sm:h-6 bg-[#E8FF63]/90 border border-[#171717] -rotate-45 shadow-[1px_2px_3px_rgba(0,0,0,0.18)] z-20 pointer-events-none select-none backdrop-blur-xs"
            aria-hidden="true"
          ></div>
        </div>

        {/* Card Footer: Aligned strictly to match left column baseline */}
        <div className="pt-4 mt-auto border-t-2 border-[#171717] flex items-center justify-between">
          <div className="text-xs font-mono text-[#626262] flex items-center gap-1.5">
            <span className="live-radar-dot"></span>
            <span>Top 2% Vetted Candidates</span>
          </div>
          <Link
            href="/hire-ai-developer/"
            className="font-display font-bold text-xs sm:text-sm text-[#3659F5] hover:text-[#171717] hover:underline inline-flex items-center gap-1 group"
          >
            <span>Review Engineers</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
