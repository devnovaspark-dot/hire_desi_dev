import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { VettingDeepDive } from "@/components/VettingDeepDive";
import { SecurityGovernance } from "@/components/SecurityGovernance";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ShieldCheck, Target, Layers, Zap, MapPin, Users, CheckCircle2, ArrowRight, Building2, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Hire Desi Dev & Nova Spark Digital Marketing",
  description:
    "Learn about Hire Desi Dev, born from Nova Spark Digital Marketing to connect international businesses with top-tier vetted Indian engineering talent.",
  alternates: {
    canonical: "https://hiredesidev.com/about-us/",
  },
};

export default function AboutUsPage() {
  const ENGINE_STEPS = [
    {
      step: "01",
      title: "Find",
      body: "We scout and source top-tier Indian software and AI engineers who are actively open to remote contract and dedicated engineering engagements.",
      tag: "SOURCING",
    },
    {
      step: "02",
      title: "Filter",
      body: "Only deeply vetted specialists reach a client. Every candidate is evaluated on live coding, architectural tradeoffs, and fluent English communication.",
      tag: "VETTING",
    },
    {
      step: "03",
      title: "Match",
      body: "We match candidates specifically to your tech stack and problem domain, rather than giving you an open list of unverified profiles.",
      tag: "ALIGNMENT",
    },
    {
      step: "04",
      title: "Provide",
      body: "A developer who is onboarded, contract-compliant, IP-protected, and ready to contribute code to your repository immediately.",
      tag: "DELIVERY",
    },
  ];

  const PRINCIPLES = [
    {
      title: "Specialist, not general",
      desc: "We focus on high-depth engineering and AI development, ensuring every match is informed by technical understanding of current frameworks and architectures.",
    },
    {
      title: "Your requirement first",
      desc: "We begin from what you need built and the exact skills needed to deliver it, instead of forcing available generalists into mismatched roles.",
    },
    {
      title: "Flexible ways to hire",
      desc: "Whether you need 20 hours of architecture review, a dedicated monthly team member, or a fixed-scope milestone, we adapt to your commercial reality.",
    },
  ];

  const HUBS = [
    {
      city: "Chandigarh–Mohali",
      role: "Operations & Matching Headquarters",
      focus: "Technical leadership, vetting committee, and talent operations alongside Nova Spark.",
    },
    {
      city: "Bengaluru",
      role: "AI & Distributed Systems Hub",
      focus: "Large language models, distributed streaming data systems, and deep-tech engineers.",
    },
    {
      city: "Hyderabad",
      role: "Enterprise & Cloud Engineering",
      focus: "Cloud architectures, high-concurrency microservices, and Kubernetes systems.",
    },
    {
      city: "Pune",
      role: "Algorithms & Edge Intelligence",
      focus: "Computer vision, numerical optimization, and low-latency C++ / Python pipelines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171717] selection:bg-[#E8FF63]">
      <GlobalHeader />

      <main className="flex-1">
        {/* Editorial Hero */}
        <section className="relative min-h-[calc(100vh-76px)] flex items-center py-6 sm:py-8 lg:py-10 border-b-2 border-[#171717] bg-[#F7F5EF] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <BrutalBadge variant="dark" size="md">
                    ABOUT HIRE DESI DEV
                  </BrutalBadge>

                  <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight leading-[1.05]">
                    A talent business built around technical execution
                  </h1>

                  <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed max-w-xl font-normal">
                    Hire Desi Dev connects international businesses with vetted Indian developers,
                    and stays close to the engagement until the work is shipped.
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-[#171717] mt-6 lg:mt-auto flex flex-wrap items-center gap-6 font-mono text-xs text-[#626262]">
                  <span className="flex items-center gap-1.5 text-[#171717] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    Top 2% Vetted Network
                  </span>
                  <span className="flex items-center gap-1.5 text-[#171717] font-semibold">
                    <Building2 className="w-4 h-4 text-[#3659F5]" />
                    Backed by Nova Spark
                  </span>
                </div>
              </div>

              {/* Hero Image Presentation with ZERO text overlay on image */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div className="border-2 border-[#171717] shadow-[6px_6px_0px_#171717] bg-white overflow-hidden group">
                  <div className="p-2.5 bg-[#F7F5EF] border-b-2 border-[#171717] flex items-center justify-between font-mono text-xs font-bold">
                    <span className="text-[#171717]">CHANDIGARH–MOHALI TECH CORRIDOR</span>
                    <span className="text-[#10B981]">HQ HUB</span>
                  </div>
                  <div className="relative h-60 sm:h-64 lg:h-72 w-full bg-[#171717] overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                      alt="Engineers collaborating in a modern technology hub"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Marquee */}
        <MarqueeTicker variant="yellow" />

        {/* Our Story & Nova Spark Roots */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs font-bold text-[#3659F5] uppercase tracking-widest block">
                  HERITAGE &amp; ROOTS
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  From digital growth to dedicated engineering talent
                </h2>
                <div className="p-4 bg-[#F7F5EF] border-2 border-[#171717] shadow-[3px_3px_0px_#171717]">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#171717] mb-1">
                    <MapPin className="w-4 h-4 text-[#3659F5]" />
                    <span>Chandigarh–Mohali IT Corridor, India</span>
                  </div>
                  <p className="text-xs text-[#626262]">
                    Operating out of one of North India’s fastest-growing technology and software
                    engineering hubs.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#444444] leading-relaxed">
                <p>
                  Hire Desi Dev is backed by{" "}
                  <strong className="text-[#171717]">Nova Spark Digital Marketing</strong>. As an
                  international digital agency, we repeatedly observed international businesses
                  struggling to hire reliable, high-caliber software and AI developers without
                  getting trapped in bloated agency markups or unvetted freelance directories.
                </p>

                <p>
                  We saw the immense depth of world-class Indian engineering talent—veteran
                  developers building large-scale models, distributed architectures, and modern web
                  applications—and created a dedicated, transparent matching platform.
                </p>

                <p>
                  Our developers come from a vetted professional network of freelance and contract
                  specialists. As demand grows across our 22 international target markets, we expand
                  that network and bring the best performers closer to our core engineering desk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 4-Stage Talent Engine (Strict bottom alignment) */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="yellow" size="sm" className="mb-2">
                WHAT WE DO
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Find, filter, match, provide
              </h2>
              <p className="text-sm font-mono text-[#626262] mt-1">
                A disciplined four-phase evaluation engine to guarantee developer caliber.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {ENGINE_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="group h-full bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b-2 border-[#171717] mb-4">
                        <span className="font-mono text-2xl font-black text-[#3659F5]">{s.step}</span>
                        <BrutalBadge variant="default" size="sm">
                          {s.tag}
                        </BrutalBadge>
                      </div>

                      <h3 className="font-display font-bold text-xl text-[#171717] mb-2 group-hover:text-[#3659F5] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4rem]">
                        {s.body}
                      </p>
                    </div>

                    {/* Bottom Element Pinned Strictly to Bottom */}
                    <div className="mt-auto pt-4 border-t border-[#E7E5DF] flex items-center justify-between font-mono text-[11px] text-[#3659F5] font-bold">
                      <span>STAGE {s.step}</span>
                      <span className="text-[#626262] font-normal">Active Protocol</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-Gate Technical Vetting Deep Dive */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VettingDeepDive />
          </div>
        </section>

        {/* Regional Hubs in India (Strict bottom alignment) */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                TALENT CORRIDORS
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Where our Indian developers are based
              </h2>
              <p className="text-sm font-mono text-[#626262] mt-1">
                Connecting into the premier technological centers of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {HUBS.map((hub) => (
                <div
                  key={hub.city}
                  className="group h-full bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#3659F5]" />
                        <h3 className="font-display font-bold text-lg text-[#171717] group-hover:text-[#3659F5] transition-colors">
                          {hub.city}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#3659F5] block mb-2">
                        {hub.role}
                      </span>
                      <p className="text-xs text-[#555555] leading-relaxed mb-4 min-h-[3.25rem]">
                        {hub.focus}
                      </p>
                    </div>

                    {/* Bottom Element Pinned Strictly to Bottom */}
                    <div className="mt-auto pt-4 border-t border-[#E7E5DF] flex items-center justify-between font-mono text-[11px] text-[#10B981] font-bold">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                        <span>Vetted Talent Pool</span>
                      </span>
                      <span className="text-[#626262] font-normal">Active</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Principles (Strict bottom alignment) */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                OPERATING PRINCIPLES
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                How we work with clients and developers
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={p.title}
                  className="group h-full p-7 bg-[#F7F5EF] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#626262] uppercase block mb-3">
                        PRINCIPLE 0{i + 1}
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-[#171717] mb-3 leading-snug group-hover:text-[#3659F5] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4rem]">
                        {p.desc}
                      </p>
                    </div>

                    {/* Bottom Element Pinned Strictly to Bottom */}
                    <div className="mt-auto pt-4 border-t border-[#171717]/10 flex items-center justify-between font-mono text-[11px] text-[#3659F5] font-bold">
                      <span>PRINCIPLE 0{i + 1}</span>
                      <span className="text-[#10B981]">Guaranteed Mandate</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security & IP Governance */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SecurityGovernance />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#171717] text-white border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Tell us what you are building.
              <br />
              We will match the developer.
            </h2>
            <p className="text-base sm:text-lg text-[#CCCCCC] max-w-xl mx-auto">
              Get matched with vetted Indian engineers ready to contribute to your codebase this
              week.
            </p>
            <div className="pt-2">
              <BrutalButton href="/hire-ai-developer/" variant="yellow" size="lg">
                Get an AI Developer →
              </BrutalButton>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
