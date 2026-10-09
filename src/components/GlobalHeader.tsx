"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrutalButton } from "./BrutalButton";
import { BrutalBadge } from "./BrutalBadge";
import { Menu, X, ChevronDown, Sparkles, Terminal, Cpu, Layers } from "lucide-react";

export const GlobalHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const developerCategories = [
    {
      title: "AI & Machine Learning",
      href: "/hire-ai-developer/",
      desc: "LLMs, RAG, autonomous agents & PyTorch specialists",
      badge: "HOT",
    },
    {
      title: "Full Stack Developers",
      href: "/#categories",
      desc: "Next.js, React, Node.js, TypeScript & PostgreSQL",
    },
    {
      title: "Frontend Architects",
      href: "/#categories",
      desc: "High-performance React, Vue, CSS animations & design systems",
    },
    {
      title: "Backend & Systems",
      href: "/#categories",
      desc: "Go, Python, Java, distributed microservices & Kafka",
    },
    {
      title: "Mobile Engineers",
      href: "/#categories",
      desc: "React Native, Flutter, iOS & Android native apps",
    },
    {
      title: "DevOps & Cloud",
      href: "/#categories",
      desc: "AWS, Kubernetes, Terraform, Docker & CI/CD automation",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5EF] border-b-2 border-[#171717]">
      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#171717] text-[#E8FF63] flex items-center justify-center font-display font-bold text-xl border-2 border-[#171717] shadow-[2px_2px_0px_#3659F5] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_#3659F5] transition-all">
            H
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#171717] leading-none">
              HIRE DESI DEV
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#626262] tracking-wider uppercase mt-0.5">
              Vetted Engineering Talent
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-display font-semibold text-sm text-[#171717]">
          {/* Developers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`px-3.5 py-2 inline-flex items-center gap-1.5 transition-colors border-2 border-transparent hover:border-[#171717] hover:bg-white ${
                dropdownOpen ? "border-[#171717] bg-white shadow-[2px_2px_0px_#171717]" : ""
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>Developers</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-84 bg-white border-2 border-[#171717] shadow-[6px_6px_0px_#171717] p-3 z-50 grid gap-1.5 animate-in fade-in-50 duration-100">
                <div className="px-2 py-1 border-b border-[#E7E5DF] mb-1 font-mono text-[10px] font-bold text-[#626262] uppercase tracking-wider">
                  Select Engineering Discipline
                </div>
                {developerCategories.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="p-2.5 hover:bg-[#F7F5EF] border border-transparent hover:border-[#171717] transition-all block group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-[#171717] group-hover:text-[#3659F5]">
                        {item.title}
                      </span>
                      {item.badge && (
                        <BrutalBadge variant="yellow" size="sm">
                          {item.badge}
                        </BrutalBadge>
                      )}
                    </div>
                    <p className="text-xs text-[#626262] mt-0.5 leading-snug">{item.desc}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/hire-ai-developer/"
            className="px-3.5 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-white transition-colors"
          >
            Hire AI Developer
          </Link>

          <Link
            href="/#how-it-works"
            className="px-3.5 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-white transition-colors"
          >
            How It Works
          </Link>

          <Link
            href="/about-us/"
            className={`px-3.5 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-white transition-colors ${
              pathname === "/about-us/" ? "border-[#171717] bg-white shadow-[2px_2px_0px_#171717]" : ""
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact-us/"
            className={`px-3.5 py-2 border-2 border-transparent hover:border-[#171717] hover:bg-white transition-colors ${
              pathname === "/contact-us/" ? "border-[#171717] bg-white shadow-[2px_2px_0px_#171717]" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <BrutalButton href="/hire-ai-developer/" variant="cobalt" size="md">
            Find Your Developer →
          </BrutalButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-12 h-12 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] flex items-center justify-center text-[#171717] active:translate-x-0.5 active:translate-y-0.5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-[#171717] bg-[#F7F5EF] p-5 shadow-[0px_8px_0px_#171717] animate-in slide-in-from-top-4 duration-150">
          <div className="space-y-2 mb-5">
            <Link
              href="/hire-ai-developer/"
              className="flex items-center justify-between p-3.5 bg-[#E8FF63] border-2 border-[#171717] font-display font-bold text-base text-[#171717] shadow-[2px_2px_0px_#171717]"
            >
              <span>⚡ Hire AI Developer (Dedicated Funnel)</span>
              <span>→</span>
            </Link>

            <Link
              href="/#categories"
              className="block p-3.5 bg-white border-2 border-[#171717] font-display font-semibold text-base text-[#171717]"
            >
              Developer Categories
            </Link>

            <Link
              href="/#how-it-works"
              className="block p-3.5 bg-white border-2 border-[#171717] font-display font-semibold text-base text-[#171717]"
            >
              How It Works
            </Link>

            <Link
              href="/about-us/"
              className="block p-3.5 bg-white border-2 border-[#171717] font-display font-semibold text-base text-[#171717]"
            >
              About Us
            </Link>

            <Link
              href="/contact-us/"
              className="block p-3.5 bg-white border-2 border-[#171717] font-display font-semibold text-base text-[#171717]"
            >
              Contact Us
            </Link>
          </div>

          <BrutalButton href="/hire-ai-developer/" variant="cobalt" size="lg" isFullWidth>
            Find Your Developer →
          </BrutalButton>
        </div>
      )}
    </header>
  );
};
