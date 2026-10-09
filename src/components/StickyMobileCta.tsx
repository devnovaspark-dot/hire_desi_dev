"use client";

import React, { useEffect, useState } from "react";
import { BrutalButton } from "./BrutalButton";
import { ArrowUp, Sparkles } from "lucide-react";

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formEl = document.getElementById("form-1") || document.getElementById("hero-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#F7F5EF] border-t-2 border-[#171717] p-3 shadow-[0px_-4px_0px_#171717] md:hidden animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center gap-2">
        <BrutalButton
          variant="yellow"
          size="md"
          isFullWidth
          onClick={scrollToForm}
          className="h-12 text-sm uppercase tracking-wider font-bold shadow-[2px_2px_0px_#171717]"
        >
          <Sparkles className="w-4 h-4 mr-2 text-[#3659F5]" />
          Get an AI Developer →
        </BrutalButton>
      </div>
    </div>
  );
};
