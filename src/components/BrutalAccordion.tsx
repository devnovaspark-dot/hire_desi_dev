"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
  tag?: string;
}

export interface BrutalAccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

export const BrutalAccordion: React.FC<BrutalAccordionProps> = ({
  items,
  defaultOpenId,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const indexStr = (index + 1).toString().padStart(2, "0");

        return (
          <div
            key={item.id}
            className={`border-2 border-[#171717] bg-white transition-all duration-150 ${
              isOpen
                ? "shadow-[4px_4px_0px_#3659F5] -translate-x-0.5 -translate-y-0.5"
                : "shadow-[2px_2px_0px_#171717] hover:shadow-[4px_4px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 select-none focus:outline-none focus-visible:bg-[#F7F5EF]"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="font-mono text-xs sm:text-sm font-bold text-[#3659F5] bg-[#F7F5EF] px-2 py-1 border border-[#171717] mt-0.5 flex-shrink-0">
                  {indexStr}
                </span>
                <span className="font-display font-bold text-base sm:text-lg text-[#171717] leading-snug">
                  {item.question}
                </span>
              </div>

              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 border-2 border-[#171717] flex items-center justify-center flex-shrink-0 transition-colors ${
                  isOpen ? "bg-[#E8FF63] text-[#171717]" : "bg-[#F7F5EF] text-[#171717]"
                }`}
              >
                {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 sm:px-5 pb-5 pt-1 text-sm sm:text-base text-[#444444] leading-relaxed border-t border-dashed border-[#D6D3C9] animate-in fade-in-50 duration-150">
                <div className="pl-0 sm:pl-11">{item.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
