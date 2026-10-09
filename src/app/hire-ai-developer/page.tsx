import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ConversionHeader } from "@/components/ConversionHeader";
import { RequirementForm } from "@/components/RequirementForm";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { EngineerShowcase } from "@/components/EngineerShowcase";
import { TimezoneMatrix } from "@/components/TimezoneMatrix";
import { SecurityGovernance } from "@/components/SecurityGovernance";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { BrutalAccordion, AccordionItem } from "@/components/BrutalAccordion";
import { EngagementModelSelector } from "@/components/EngagementModelSelector";
import {
  Brain,
  Sparkles,
  Bot,
  Eye,
  MessageSquareCode,
  Layers,
  Clock,
  Calendar,
  CheckCircle2,
  Check,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Terminal,
  Zap,
  Globe2,
  Lock,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hire AI Developers | Hourly, Monthly or Fixed Cost",
  description:
    "Hire curated, vetted AI developers, machine learning engineers, and LLM specialists from India. Flexible hourly, monthly, or fixed-cost engagements without middleman friction.",
  alternates: {
    canonical: "https://hiredesidev.com/hire-ai-developer/",
  },
};

export default function HireAiDeveloperPage() {
  const PROFILES = [
    {
      title: "AI / ML Developers",
      desc: "Custom models, PyTorch training pipelines, data preprocessing, and data-driven product features.",
      icon: Brain,
      tag: "SPECIALTY 01",
      stack: ["PyTorch", "TensorFlow", "Scikit-Learn", "FastAPI"],
    },
    {
      title: "Generative AI Developers",
      desc: "Text, image, audio, and multimodal generation integrated into production SaaS products.",
      icon: Sparkles,
      tag: "SPECIALTY 02",
      stack: ["OpenAI API", "Claude API", "Diffusers", "Fine-Tuning"],
    },
    {
      title: "LLM Engineers",
      desc: "Production applications on large language models, prompt architecture, semantic evals, and RAG.",
      icon: Terminal,
      tag: "SPECIALTY 03",
      stack: ["LangChain", "LlamaIndex", "Pinecone", "Qdrant"],
    },
    {
      title: "AI Agent Developers",
      desc: "Autonomous agent swarms that plan, orchestrate tools, query databases, and execute multi-step tasks.",
      icon: Bot,
      tag: "SPECIALTY 04",
      stack: ["CrewAI", "LangGraph", "AutoGen", "Browser Use"],
    },
    {
      title: "Computer Vision Developers",
      desc: "Image, video, and real-time object detection for industrial inspection, robotics, and media workflows.",
      icon: Eye,
      tag: "SPECIALTY 05",
      stack: ["OpenCV", "YOLOv10", "TensorRT", "CUDA"],
    },
    {
      title: "NLP Developers",
      desc: "Semantic search, token classification, multilingual translation, intent parsing, and conversation.",
      icon: MessageSquareCode,
      tag: "SPECIALTY 06",
      stack: ["Hugging Face", "BERT", "SpaCy", "Vector Search"],
    },
  ];

  const TECH_STACK = [
    "OpenAI",
    "Claude",
    "Gemini",
    "LLM",
    "RAG",
    "AI Agents",
    "Machine Learning",
    "Computer Vision",
    "NLP",
    "Python",
    "LangChain",
    "Vector DBs",
    "AI Automation",
  ];

  const WHY_POINTS = [
    {
      n: "01",
      title: "Curated, vetted AI developers",
      body: "We rigorously filter for active AI practitioners, verifying codebases, math intuition, and remote delivery. You only interview engineers with proven domain depth.",
      status: "Top 2% Vetted",
      metric: "Verified Network",
    },
    {
      n: "02",
      title: "Matched to your project",
      body: "Each developer is chosen directly against your exact tech stack and problem statement, not selected randomly from an open, unvetted directory.",
      status: "Direct Stack Match",
      metric: "Zero Randoms",
    },
    {
      n: "03",
      title: "Choose how you hire",
      body: "Radical flexibility: engage hourly for rapid sprints and architecture audits, monthly for dedicated capacity, or fixed cost for scoped milestones.",
      status: "Dynamic Models",
      metric: "0% Penalty",
    },
    {
      n: "04",
      title: "Start working quickly",
      body: "Review curated candidate dossiers within 24 hours, conduct an interview, and begin building immediately without weeks of recruiting overhead.",
      status: "Fast SLA",
      metric: "< 24h Turnaround",
    },
  ];

  const STEPS = [
    {
      n: "01",
      title: "Submit requirement",
      body: "Tell us what you are building in a 2-minute short intake form. Detail your current stack, timeline, and goals.",
      phaseTag: "PHASE 01 // INTAKE",
      sla: "2 Mins",
    },
    {
      n: "02",
      title: "Get matched",
      body: "Our technical leads review your requirements and match 1–2 vetted developers whose code portfolios align directly.",
      phaseTag: "PHASE 02 // MATCHING",
      sla: "< 24h Match",
    },
    {
      n: "03",
      title: "Discuss and select",
      body: "Speak with the proposed engineer via Google Meet or Zoom. Review past architectures, verify communication, and confirm fit.",
      phaseTag: "PHASE 03 // EVALUATION",
      sla: "Video Call",
    },
    {
      n: "04",
      title: "Start working",
      body: "Add the engineer to your Slack, GitHub, or Jira. Work begins immediately on your terms with full IP protection.",
      phaseTag: "PHASE 04 // DEPLOYMENT",
      sla: "Instant Onboard",
    },
  ];

  const FAQ_ITEMS: AccordionItem[] = [
    {
      id: "faq-1",
      question: "How are your Indian AI developers vetted before introduction?",
      answer:
        "Every engineer goes through a 4-tier screening process: 1) Verified GitHub code and production build audit, 2) Technical interview evaluating LLM architecture, agent design, and Python fluency, 3) C1/C2 English spoken and written communication evaluation, and 4) Background and identity verification.",
    },
    {
      id: "faq-2",
      question: "How does timezone overlap work for international teams?",
      answer:
        "Our developers regularly operate with 4 to 6 hours of synchronous working overlap with clients in North America (US Eastern and Pacific), Western Europe (GMT/CET), and Asia-Pacific (SGT/AEST). Daily standups and async reporting ensure seamless collaboration.",
    },
    {
      id: "faq-3",
      question: "Who owns the intellectual property (IP) and code created?",
      answer:
        "You retain 100% ownership of all intellectual property, source code, models, weights, and documentation generated during the engagement. Comprehensive bilateral NDAs and IP assignment agreements are executed prior to day one.",
    },
    {
      id: "faq-4",
      question: "Can I switch between Hourly, Monthly, or Fixed Cost?",
      answer:
        "Yes. Many clients start with an hourly or fixed-cost proof-of-concept to evaluate the engineer's velocity, and then transition them into a dedicated monthly arrangement for long-term product development.",
    },
    {
      id: "faq-5",
      question: "How fast can an AI engineer begin working on our project?",
      answer:
        "Once you submit your requirement, we introduce matched candidate profiles within 12 to 24 hours. Candidate interviews can take place the following day, and work typically begins within 48 to 72 hours.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171717] selection:bg-[#E8FF63]">
      {/* 1. Header: Distraction-free conversion shell */}
      <ConversionHeader />

      <main className="flex-1">
        {/* ==================================================================== */}
        {/* SECTION 01 & 02: HERO & REQUIREMENT FORM 1 (ABOVE THE FOLD)          */}
        {/* ==================================================================== */}
        <section className="relative min-h-[calc(100vh-76px)] flex items-center py-6 sm:py-8 lg:py-10 border-b-2 border-[#171717] bg-[#F7F5EF] overflow-hidden">
          {/* Subtle graph background */}
          <div className="absolute inset-0 bg-grid-graph opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Section 01 Headline & Value Offer */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <BrutalBadge variant="dark" size="md">
                      VETTED AI SPECIALISTS
                    </BrutalBadge>
                    <BrutalBadge variant="emerald" size="md" showDot>
                      Immediate Availability
                    </BrutalBadge>
                  </div>

                  <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight leading-[1.05]">
                    Hire AI Developers at Hourly, Monthly &amp; Fixed Cost
                  </h1>

                  <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed max-w-xl font-normal">
                    Submit your requirements. We match you with a vetted Indian AI specialist within
                    24 hours — zero middleman markup, bilateral IP protection upfront.
                  </p>

                  {/* Clean Hero value points */}
                  <div className="space-y-2.5 pt-1">
                    {[
                      "Curated, vetted AI specialists in LLMs, RAG & Agents",
                      "Direct stack match — never open directory browsing",
                      "Hire on hourly sprints, monthly dedicated, or fixed scope",
                    ].map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#E8FF63] border-2 border-[#171717] flex items-center justify-center font-bold text-xs text-[#171717] flex-shrink-0">
                          ✓
                        </div>
                        <span className="font-display font-semibold text-sm sm:text-base text-[#171717]">
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key value micro-indicators aligned strictly to match right form bottom */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-[#171717] max-w-xl mt-6 lg:mt-auto">
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#171717] block">
                      &lt; 24h
                    </span>
                    <span className="text-xs font-mono text-[#626262]">Match SLA</span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#3659F5] block">
                      4–6h
                    </span>
                    <span className="text-xs font-mono text-[#626262]">US / EU Overlap</span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#10B981] block">
                      100% IP
                    </span>
                    <span className="text-xs font-mono text-[#626262]">Code Handover</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Section 02 Requirement Form 1 (Above the fold) */}
              <div className="lg:col-span-5 w-full flex flex-col justify-between h-full">
                <div id="hero-form" className="h-full flex flex-col justify-between">
                  <RequirementForm
                    formPosition="1"
                    accentColor="cobalt"
                    initialEngagement="Monthly"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catchy Animated Marquee Ribbon */}
        <MarqueeTicker variant="yellow" />

        {/* ==================================================================== */}
        {/* NEW SECTION: FEATURED AI SPECIALISTS ROSTER                          */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#171717]">
              <div>
                <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                  CURATED CANDIDATE DOSSIERS
                </BrutalBadge>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  Featured AI specialists ready for deployment
                </h2>
              </div>
              <p className="text-sm font-mono text-[#626262] max-w-sm">
                Real engineers from our vetted network. Click any profile to request an immediate
                candidate dossier and direct interview.
              </p>
            </div>

            <EngineerShowcase />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 03: DEVELOPER PROFILES (STRICT BOTTOM ALIGNMENT)             */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b-2 border-[#171717]">
              <div>
                <BrutalBadge variant="yellow" size="sm" className="mb-2">
                  AI SPECIALISTS
                </BrutalBadge>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  The AI developer you need, already filtered for you
                </h2>
              </div>
              <p className="text-sm font-mono text-[#626262] max-w-sm">
                Six dedicated AI domains. Every candidate evaluated on deep math intuition,
                framework mastery, and production uptime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {PROFILES.map((p) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group h-full bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF] mb-4">
                          <span className="font-mono text-xs font-bold text-[#626262] uppercase tracking-wider">
                            {p.tag}
                          </span>
                        </div>

                        <div className="w-12 h-12 bg-[#F7F5EF] border-2 border-[#171717] flex items-center justify-center text-[#171717] shadow-[2px_2px_0px_#171717] mb-4 card-icon-box group-hover:bg-[#E8FF63] transition-colors">
                          <IconComponent className="w-6 h-6 text-[#3659F5] group-hover:text-[#171717] transition-colors" />
                        </div>

                        <h3 className="font-display font-bold text-xl text-[#171717] tracking-tight mb-2 group-hover:text-[#3659F5] transition-colors">
                          {p.title}
                        </h3>

                        <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans min-h-[3.75rem]">
                          {p.desc}
                        </p>
                      </div>

                      {/* Framework tag strip strictly pinned to bottom of body */}
                      <div className="border-t border-[#E7E5DF] pt-4 mt-auto">
                        <span className="font-mono text-[11px] font-bold text-[#626262] uppercase tracking-wider block mb-2">
                          Core Frameworks:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {p.stack.map((s) => (
                            <span
                              key={s}
                              className="px-2 py-0.5 bg-[#F7F5EF] border border-[#171717] text-xs font-mono text-[#171717] interactive-pill"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action link strictly pinned to bottom */}
                    <div className="px-6 pb-6 pt-3 mt-auto border-t border-[#E7E5DF]/70 bg-black/[0.01]">
                      <a
                        href="#hero-form"
                        className="inline-flex items-center text-xs sm:text-sm font-display font-bold text-[#3659F5] hover:text-[#171717] group-hover:underline"
                      >
                        <span>Request {p.title} Specialist →</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 04: TECHNOLOGY STACK (13 BADGES)                             */}
        {/* ==================================================================== */}
        <section className="py-14 bg-[#171717] text-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8FF63] font-bold block mb-1">
                TECHNOLOGY &amp; TOOLING
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Built with the AI stack you already use
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-2.5 bg-white text-[#171717] border-2 border-white font-mono text-xs sm:text-sm font-semibold tracking-wide shadow-[3px_3px_0px_#3659F5] hover:bg-[#E8FF63] hover:text-[#171717] hover:-translate-y-0.5 transition-all select-none"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 05: SECOND REQUIREMENT FORM (MIST BAND)                      */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#E7E5DF] border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                YOUR REQUIREMENT
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Describe the project. We find the developer.
              </h2>
              <p className="text-sm sm:text-base text-[#444444] mt-2 max-w-xl mx-auto">
                Share what you need built and how you would like to hire. Our technical matching team
                reviews every requirement and proposes a vetted AI developer within 24 hours.
              </p>
            </div>

            <RequirementForm
              formPosition="2"
              accentColor="yellow"
              initialEngagement="Monthly"
            />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION: TIMEZONE OVERLAP & WORKING WINDOWS                      */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                SYNCHRONOUS COLLABORATION
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Global timezone overlap with US, UK &amp; Europe
              </h2>
              <p className="text-base text-[#555555] mt-2">
                Our Indian AI engineers adapt their working hours to provide 4 to 6 hours of live,
                synchronous overlap with your core team.
              </p>
            </div>

            <TimezoneMatrix />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 06: WHY HIRE AI DEVELOPER & 3 ENGAGEMENT MODELS              */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Why Hire AI Developer */}
            <div className="mb-20">
              <div className="mb-12 pb-6 border-b-2 border-[#171717]">
                <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                  WHY HIRE DESI DEV
                </BrutalBadge>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  A focused talent partner, not an open marketplace
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {WHY_POINTS.map((w) => (
                  <div
                    key={w.n}
                    className="group h-full p-6 bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-2xl font-extrabold text-[#3659F5] block mb-3">
                          {w.n}
                        </span>
                        <h3 className="font-display font-bold text-lg text-[#171717] mb-2 leading-snug group-hover:text-[#3659F5] transition-colors">
                          {w.title}
                        </h3>
                        <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4rem]">
                          {w.body}
                        </p>
                      </div>

                      {/* Bottom Status Element Pinned Strictly to Bottom */}
                      <div className="mt-auto pt-4 border-t border-[#E7E5DF] flex items-center justify-between text-xs font-mono">
                        <span className="text-[#10B981] font-bold flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>{w.status}</span>
                        </span>
                        <span className="text-[#626262] font-semibold">{w.metric}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How You Can Hire: 3 Engagement Models (Interactive Selector with Strict Bottom Alignment) */}
            <div>
              <div className="mb-10 pb-6 border-b-2 border-[#171717]">
                <BrutalBadge variant="yellow" size="sm" className="mb-2">
                  HOW YOU CAN HIRE
                </BrutalBadge>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  Choose the engagement that fits your project
                </h2>
                <p className="text-sm font-mono text-[#626262] mt-1">
                  Transparent hiring without hidden fees, lock-in clauses, or arbitrary margins.
                </p>
              </div>

              <EngagementModelSelector formAnchor="#hero-form" isAiLanding />
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION: SECURITY, IP & CONFIDENTIALITY GOVERNANCE               */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SecurityGovernance />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 07: HOW IT WORKS (EQUAL HEIGHT ALIGNMENT)                    */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                HIRING PROCESS
              </BrutalBadge>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                From requirement to a developer at work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="group h-full bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-[#171717] text-[#E8FF63] font-mono font-extrabold text-xl flex items-center justify-center border-2 border-[#171717] shadow-[2px_2px_0px_#3659F5] mb-4 card-icon-box group-hover:scale-105 transition-transform">
                        {s.n}
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#171717] mb-2 group-hover:text-[#3659F5] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4.25rem]">
                        {s.body}
                      </p>
                    </div>

                    {/* Bottom Status Element Pinned Strictly to Bottom */}
                    <div className="mt-auto pt-4 border-t border-[#E7E5DF] flex items-center justify-between font-mono text-[11px] text-[#3659F5] font-bold">
                      <span>{s.phaseTag}</span>
                      <span className="text-[#626262] font-normal">{s.sla}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 08: VERIFIED ENTERPRISE SECTORS & CLIENT ECOSYSTEM          */}
        {/* ==================================================================== */}
        <section className="py-12 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-[#E7E5DF]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#626262] font-semibold">
                TRUSTED BY INTERNATIONAL CLIENTS ACROSS 22 MARKETS
              </span>
              <span className="font-mono text-xs text-[#10B981] font-bold">
                ✓ COMMERCIAL SPRINT VERIFICATION
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { sector: "FINTECH & PAYMENTS", label: "Ledger Audits & Fraud Detection", icon: ShieldCheck, badge: "VERIFIED" },
                { sector: "AI RESEARCH LABS", label: "Autonomous Swarms & RAG", icon: Sparkles, badge: "ACTIVE" },
                { sector: "HEALTHCARE SAAS", label: "HIPAA Compliant Medical Models", icon: CheckCircle2, badge: "COMPLIANT" },
                { sector: "GLOBAL LOGISTICS", label: "Predictive Routing Pipelines", icon: Globe2, badge: "DEPLOYED" },
                { sector: "DEVTOOLS & CLOUD", label: "Distributed APIs & Kubernetes", icon: Code2, badge: "ENTERPRISE" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.sector}
                    className="p-3.5 bg-[#F7F5EF] border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:shadow-[4px_4px_0px_#3659F5] hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 bg-white border border-[#171717] flex items-center justify-center text-[#3659F5]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 bg-white border border-[#171717] text-[#171717]">
                        {s.badge}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-extrabold text-xs text-[#171717] tracking-tight">
                        {s.sector}
                      </div>
                      <div className="font-mono text-[10px] text-[#626262] mt-0.5 line-clamp-1">
                        {s.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-center font-mono text-[11px] text-[#626262] mt-4">
              Direct mutual bilateral NDA and bespoke IP assignment executed upfront for all client engineering engagements.
            </p>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 09: CASE STUDIES WITH HIGH-RES HARDWARE/SYSTEM VISUALS       */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                VERIFIED ARCHITECTURES
              </BrutalBadge>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                What our vetted developers have built
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                {
                  industry: "FINANCIAL SERVICES",
                  title: "Autonomous RAG & Regulatory Compliance Audit Agent",
                  outcome:
                    "Ingested 200,000+ SEC and legal filings with sub-second hybrid retrieval and 0% citation hallucination.",
                  stack: "LangChain · Qdrant · Claude 3.5 · FastAPI",
                  img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
                },
                {
                  industry: "HEALTHCARE TECHNOLOGY",
                  title: "Real-Time Pathology Cell Segmentation Engine",
                  outcome:
                    "High-throughput computer vision pipeline running edge inference on 4K digital microscope streams.",
                  stack: "PyTorch · TensorRT · YOLOv10 · CUDA",
                  img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
                },
                {
                  industry: "E-COMMERCE & RETAIL",
                  title: "Generative Multimodal Product Catalog Assistant",
                  outcome:
                    "Automated catalog attribute enrichment and visual search across 1.4M SKU listings.",
                  stack: "CLIP · OpenAI Swarm · PostgreSQL · Next.js",
                  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group h-full bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-3 bg-[#F7F5EF] border-b-2 border-[#171717] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3659F5]">
                      {c.industry}
                    </span>
                    <span className="font-mono text-[10px] font-bold bg-[#E8FF63] text-[#171717] px-2 py-0.5 border border-[#171717]">
                      VERIFIED DEPLOYMENT
                    </span>
                  </div>

                  <div className="relative h-44 w-full border-b-2 border-[#171717] bg-[#171717] overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-lg text-[#171717] mb-2 group-hover:text-[#3659F5] transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-sm text-[#444444] leading-relaxed mb-4">{c.outcome}</p>
                    </div>

                    <div className="border-t border-[#E7E5DF] pt-3 mt-auto flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="font-mono text-[10px] text-[#626262] block">Stack:</span>
                        <span className="font-mono text-xs font-semibold text-[#171717]">
                          {c.stack}
                        </span>
                      </div>
                      <span className="text-[#10B981] font-bold text-[11px] flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Production</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Second Marquee Ribbon */}
        <MarqueeTicker variant="dark" />

        {/* ==================================================================== */}
        {/* SECTION 10: FINAL REQUIREMENT FORM (HIGH CONTRAST NAVY BAND)        */}
        {/* ==================================================================== */}
        <section className="py-20 md:py-28 bg-[#171717] text-white border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E8FF63] font-bold block mb-2">
                FINAL REQUIREMENT INTAKE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Ready to meet your AI developer?
              </h2>
              <p className="text-base text-[#CCCCCC] mt-3 max-w-xl mx-auto">
                Send your requirement and we will come back with a matched developer profile within
                24 hours. No obligation.
              </p>
            </div>

            <RequirementForm
              formPosition="3"
              accentColor="white"
              initialEngagement="Monthly"
            />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* FAQ SECTION                                                          */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <BrutalBadge variant="default" size="sm" className="mb-2">
                FREQUENTLY ASKED QUESTIONS
              </BrutalBadge>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Clear answers on hiring &amp; delivery
              </h2>
            </div>

            <BrutalAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 11: FINAL CALL TO ACTION (HIGH-IMPACT ACCENT BAND)          */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-20 bg-[#E8FF63] text-[#171717] border-b-2 border-[#171717]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight leading-tight">
              Tell us what you are building.
              <br />
              We will match the AI developer.
            </h2>

            <p className="text-base sm:text-lg text-[#171717] font-medium max-w-xl mx-auto">
              Skip weeks of recruiter back-and-forth. Start building with a vetted specialist this
              week.
            </p>

            <div className="pt-2">
              <BrutalButton
                href="#hero-form"
                variant="primary"
                size="lg"
                className="text-base sm:text-lg px-8 py-4 shadow-[6px_6px_0px_#171717]"
              >
                Get an AI Developer →
              </BrutalButton>
            </div>
          </div>
        </section>
      </main>

      {/* Footer minimal version for conversion focus */}
      <footer className="bg-[#171717] text-white py-8 px-4 border-t-2 border-[#171717] text-center font-mono text-xs text-[#888888]">
        <div className="max-w-4xl mx-auto space-y-2">
          <div>
            Hire Desi Dev · Backed by Nova Spark Digital Marketing (Chandigarh–Mohali, India)
          </div>
          <div className="text-[11px] text-[#666666]">
            Strict client confidentiality · All engagements covered by comprehensive IP assignment
            and NDAs.
          </div>
        </div>
      </footer>

      {/* Persistent sticky mobile CTA */}
      <StickyMobileCta />
    </div>
  );
}
