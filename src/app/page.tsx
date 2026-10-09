import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";
import { BrutalButton } from "@/components/BrutalButton";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalCard } from "@/components/BrutalCard";
import { InteractiveMatcher } from "@/components/InteractiveMatcher";
import { EngineerShowcase } from "@/components/EngineerShowcase";
import { HeroVisualComposition } from "@/components/HeroVisualComposition";
import { TimezoneMatrix } from "@/components/TimezoneMatrix";
import { VettingDeepDive } from "@/components/VettingDeepDive";
import { ComparisonTable } from "@/components/ComparisonTable";
import { SecurityGovernance } from "@/components/SecurityGovernance";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { BrutalAccordion, AccordionItem } from "@/components/BrutalAccordion";
import { EngagementModelSelector } from "@/components/EngagementModelSelector";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  Clock,
  Terminal,
  Cpu,
  Layers,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Globe2,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const CATEGORIES = [
    {
      title: "AI & Machine Learning",
      slug: "/hire-ai-developer/",
      desc: "LLMs, RAG architectures, autonomous agent workflows, PyTorch models, and real-time vision pipelines.",
      icon: Cpu,
      tag: "CORE FOCUS",
      badge: "FEATURED",
      stack: ["OpenAI", "Claude", "LangChain", "PyTorch", "Pinecone"],
    },
    {
      title: "Full Stack Developers",
      slug: "/hire-ai-developer/",
      desc: "End-to-end engineers building scalable web applications with resilient relational data stores.",
      icon: Layers,
      tag: "HIGH DEMAND",
      stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "Frontend Architects",
      slug: "/hire-ai-developer/",
      desc: "UI/UX engineering specialists crafting high-performance, accessible, and responsive web products.",
      icon: Code2,
      tag: "DESIGN SYSTEMS",
      stack: ["React", "Vue", "Tailwind CSS", "Web Vitals", "Framer"],
    },
    {
      title: "Backend & Systems",
      slug: "/hire-ai-developer/",
      desc: "High-throughput API development, distributed microservices, message queues, and database optimization.",
      icon: Database,
      tag: "HIGH CONCURRENCY",
      stack: ["Python", "Go", "Java", "Redis", "Kafka", "Docker"],
    },
    {
      title: "Mobile Engineers",
      slug: "/hire-ai-developer/",
      desc: "Cross-platform and native mobile apps engineered for fluid 60fps animations and offline reliability.",
      icon: Smartphone,
      tag: "MOBILE APPS",
      stack: ["React Native", "Flutter", "Swift", "Kotlin", "Supabase"],
    },
    {
      title: "DevOps & Cloud",
      slug: "/hire-ai-developer/",
      desc: "Automated infrastructure, Kubernetes orchestration, zero-downtime CI/CD pipelines, and cloud security.",
      icon: Cloud,
      tag: "INFRASTRUCTURE",
      stack: ["AWS", "Kubernetes", "Terraform", "GitHub Actions", "Docker"],
    },
  ];

  const WHY_US = [
    {
      title: "Vetted for Architectural Depth",
      desc: "We screen past commercial codebases, evaluate system design tradeoffs, and verify English technical communication before you ever speak with a candidate.",
      tag: "01 // QUALITY",
      status: "Verified Standard",
      metric: "Top 2% Pass",
    },
    {
      title: "4 to 6 Hours Overlap with US/EU",
      desc: "Developers adjust their core schedule to provide synchronous collaboration during your working hours, with daily asynchronous standups.",
      tag: "02 // TIMEZONE",
      status: "Synchronous",
      metric: "4–6h Daily Overlap",
    },
    {
      title: "No Middleman Markup",
      desc: "Direct, transparent developer relationships. You choose between Hourly sprints, Monthly dedicated engineering, or Fixed Cost delivery.",
      tag: "03 // TRANSPARENCY",
      status: "Direct Terms",
      metric: "0% Agency Margin",
    },
    {
      title: "Fast Match SLA (< 24 Hours)",
      desc: "Skip months of recruiter spam. Submit your requirement, receive matched candidate dossiers the same day, and start building this week.",
      tag: "04 // VELOCITY",
      status: "Guaranteed SLA",
      metric: "< 24h Turnaround",
    },
  ];

  const STEPS = [
    {
      num: "01",
      title: "Share your requirements",
      desc: "Complete our short 2-minute requirement form. Tell us your stack, preferred engagement model, and product vision.",
      phaseTag: "PHASE 01 // INTAKE",
      sla: "2 Mins",
    },
    {
      num: "02",
      title: "Match with vetted engineers",
      desc: "Our engineering leads review your requirements and match 1–2 candidates whose code portfolios directly align.",
      phaseTag: "PHASE 02 // MATCHING",
      sla: "< 24h Match",
    },
    {
      num: "03",
      title: "Interview & evaluate",
      desc: "Conduct a technical interview with the proposed engineer. Discuss past builds, verify culture fit, and approve the match.",
      phaseTag: "PHASE 03 // EVALUATION",
      sla: "Direct Video",
    },
    {
      num: "04",
      title: "Start building immediately",
      desc: "Onboard your engineer into your Slack and GitHub repos. Full bilateral NDA and IP protection executed upfront.",
      phaseTag: "PHASE 04 // DEPLOYMENT",
      sla: "Instant Onboard",
    },
  ];

  const HOME_FAQS: AccordionItem[] = [
    {
      id: "hfaq-1",
      question: "What makes Hire Desi Dev different from freelance marketplaces?",
      answer:
        "Unlike open directories like Upwork or Fiverr where you must sift through hundreds of unverified proposals, Hire Desi Dev is a curated technical matching partner. Every developer has been personally vetted for code quality, English proficiency, and remote reliability. You only speak with 1–2 candidates who precisely match your tech stack.",
    },
    {
      id: "hfaq-2",
      question: "What is your relationship with Nova Spark Digital Marketing?",
      answer:
        "Hire Desi Dev was founded as the specialized engineering arm of Nova Spark Digital Marketing (headquartered in Chandigarh–Mohali, India). Nova Spark identified a massive international demand for top-tier Indian engineering talent. Once your application or AI product is built, Nova Spark can seamlessly assist with global go-to-market and growth marketing.",
    },
    {
      id: "hfaq-3",
      question: "Which countries do you currently support?",
      answer:
        "We prioritize clients across 22 primary target markets including the United States, United Kingdom, Germany, UAE, Singapore, Canada, Australia, Netherlands, Switzerland, France, and Japan, with global billing and contract compliance.",
    },
    {
      id: "hfaq-4",
      question: "Are there any hidden recruitment fees or placement commissions?",
      answer:
        "None. Our business model is transparent. You engage directly on clear hourly, monthly, or fixed-cost terms without surprise recruiting fees or agency overhead.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171717] selection:bg-[#E8FF63]">
      <GlobalHeader />

      <main className="flex-1">
        {/* ==================================================================== */}
        {/* SECTION 1: EDITORIAL NEO-BRUTALIST HERO WITH COMPOSITION             */}
        {/* ==================================================================== */}
        <section className="relative min-h-[calc(100vh-76px)] flex items-center py-6 sm:py-8 lg:py-10 border-b-2 border-[#171717] bg-[#F7F5EF] overflow-hidden">
          {/* Background graph pattern */}
          <div className="absolute inset-0 bg-grid-graph opacity-40 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Bold Editorial Positioning */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <BrutalBadge variant="yellow" size="md">
                      DEVELOPER TALENT PLATFORM
                    </BrutalBadge>
                    <BrutalBadge variant="emerald" size="md" showDot>
                      Top 2% Vetted Engineers
                    </BrutalBadge>
                  </div>

                  <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#171717] tracking-tight leading-[1.04]">
                    GOOD PEOPLE.
                    <br />
                    <span className="text-[#3659F5] underline decoration-[#171717] decoration-4 underline-offset-8">
                      SERIOUS BUILDING.
                    </span>
                  </h1>

                  <p className="text-base sm:text-lg text-[#333333] font-sans leading-relaxed max-w-xl font-normal">
                    Connect with curated, vetted Indian software engineers and AI developers.
                    Flexible monthly dedicated talent, hourly specialists, and fixed-cost delivery.
                  </p>

                  {/* Primary & Secondary CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <BrutalButton href="/hire-ai-developer/" variant="cobalt" size="lg">
                      Find Your Developer →
                    </BrutalButton>
                    <BrutalButton href="#categories" variant="outline" size="lg">
                      Explore Expertise ↓
                    </BrutalButton>
                  </div>
                </div>

                {/* Key value micro-indicators aligned strictly to match right column */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t-2 border-[#171717] max-w-xl mt-6 lg:mt-auto">
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#171717] block">
                      &lt; 24h
                    </span>
                    <span className="text-xs font-mono text-[#626262]">Match SLA</span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#3659F5] block">
                      C1 / C2
                    </span>
                    <span className="text-xs font-mono text-[#626262]">English Fluency</span>
                  </div>
                  <div>
                    <span className="font-mono text-lg sm:text-xl font-black text-[#10B981] block">
                      100% IP
                    </span>
                    <span className="text-xs font-mono text-[#626262]">Code Ownership</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Composition with Unsplash Portrait & Clocks */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <HeroVisualComposition />
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 2: VERIFIED VALUE PROPOSITION & TRUST BANNER                 */}
        {/* ==================================================================== */}
        <section className="py-8 bg-[#171717] text-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#E8FF63]" />
                <span>Strict Pre-Vetted Technical Interviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#3659F5]" />
                <span>Synchronous US &amp; European Timezone Overlap</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#10B981]" />
                <span>Serving Clients Across 22 Target Markets</span>
              </div>
            </div>
          </div>
        </section>

        {/* Catchy Animated Marquee Ribbon */}
        <MarqueeTicker variant="yellow" />

        {/* ==================================================================== */}
        {/* NEW SECTION 3: FEATURED DEVELOPER SHOWCASE WITH AUTHENTIC PORTRAITS  */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 pb-6 border-b-2 border-[#171717]">
              <div>
                <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                  CURATED TALENT ROSTER
                </BrutalBadge>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  Meet some of our vetted Indian engineers
                </h2>
              </div>
              <p className="text-sm font-mono text-[#626262] max-w-sm">
                Each profile is verified with live coding audits, architectural evaluations, and
                fluency checks. Ready to integrate into your sprints.
              </p>
            </div>

            <EngineerShowcase />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 4: INTERACTIVE MATCHING ENGINE SIMULATION                    */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="yellow" size="sm" className="mb-2">
                LIVE INTERACTIVE MATCHING
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Tell us what you are building. We find the exact person.
              </h2>
              <p className="text-base text-[#555555] mt-2">
                Simulate how our matchmaking works. Click a technical requirement below to preview
                a vetted candidate profile tailored for that architecture.
              </p>
            </div>

            <InteractiveMatcher />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION 5: TIMEZONE MATRIX & SYNCHRONOUS OVERLAP                 */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                GLOBAL WORKING CADENCE
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                4 to 6 hours synchronous overlap with your timezone
              </h2>
              <p className="text-base text-[#555555] mt-2">
                Select your region below to see exact working windows, live daily standups, and how
                our follow-the-sun workflow delivers 24-hour engineering velocity.
              </p>
            </div>

            <TimezoneMatrix />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 6: DEVELOPER CATEGORIES GRID (STRICT BOTTOM ALIGNMENT)       */}
        {/* ==================================================================== */}
        <section id="categories" className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b-2 border-[#171717]">
              <div>
                <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                  ENGINEERING DISCIPLINES
                </BrutalBadge>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                  Developer specialties available for hire
                </h2>
              </div>
              <p className="text-sm font-mono text-[#626262] max-w-sm">
                From specialized AI pipelines to robust distributed web systems, our network covers
                modern engineering requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {CATEGORIES.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={cat.title}
                    className="group h-full bg-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Top Tag & Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF] mb-4">
                          <span className="font-mono text-xs font-bold text-[#626262] uppercase tracking-wider">
                            {cat.tag}
                          </span>
                          {cat.badge && (
                            <BrutalBadge variant="yellow" size="sm">
                              {cat.badge}
                            </BrutalBadge>
                          )}
                        </div>

                        <div className="w-12 h-12 bg-[#F7F5EF] border-2 border-[#171717] flex items-center justify-center text-[#171717] shadow-[2px_2px_0px_#171717] mb-4 card-icon-box group-hover:bg-[#E8FF63] transition-colors">
                          <IconComponent className="w-6 h-6 text-[#3659F5] group-hover:text-[#171717] transition-colors" />
                        </div>

                        <h3 className="font-display font-bold text-xl text-[#171717] tracking-tight mb-2 group-hover:text-[#3659F5] transition-colors">
                          {cat.title}
                        </h3>

                        <p className="text-sm text-[#444444] leading-relaxed mb-6 font-sans min-h-[3.75rem]">
                          {cat.desc}
                        </p>
                      </div>

                      {/* Tech stack pills pinned to bottom of body */}
                      <div className="border-t border-[#E7E5DF] pt-4 mt-auto">
                        <span className="font-mono text-[11px] font-bold text-[#626262] uppercase tracking-wider block mb-2">
                          Common Technologies:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.stack.map((s) => (
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
                      <Link
                        href={cat.slug}
                        className="inline-flex items-center text-sm font-display font-bold text-[#3659F5] hover:text-[#171717] group-hover:underline"
                      >
                        <span>Explore {cat.title}</span>
                        <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION 7: THE 5-GATE TECHNICAL VETTING AUDIT                    */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VettingDeepDive />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION 8: COMPREHENSIVE COMPARISON TABLE                        */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="yellow" size="sm" className="mb-2">
                OBJECTIVE COMPARISON
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                How Hire Desi Dev compares against other hiring paths
              </h2>
              <p className="text-base text-[#555555] mt-2">
                Evaluate our model against traditional headhunters, open gig marketplaces, and
                domestic in-house recruiting cycles.
              </p>
            </div>

            <ComparisonTable />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 9: WHY HIRE DESI DEV (EQUAL HEIGHT BOTTOM ALIGNMENT)         */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                PLATFORM ADVANTAGES
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Engineered for serious international businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {WHY_US.map((item) => (
                <div
                  key={item.title}
                  className="group h-full p-6 bg-[#F7F5EF] border-2 border-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#3659F5] uppercase tracking-wider block mb-3">
                        {item.tag}
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#171717] mb-2 leading-snug group-hover:text-[#3659F5] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4rem]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Status Element Pinned Strictly to Bottom */}
                    <div className="mt-auto pt-4 border-t border-[#171717]/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-[#10B981] font-bold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>{item.status}</span>
                      </span>
                      <span className="text-[#626262] font-semibold">{item.metric}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 10: HOW IT WORKS (EQUAL HEIGHT BOTTOM ALIGNMENT)             */}
        {/* ==================================================================== */}
        <section id="how-it-works" className="py-16 md:py-24 bg-[#E7E5DF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="dark" size="sm" className="mb-2">
                THE 4-STEP PROTOCOL
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                From requirement to engineer at work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="group h-full bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#171717] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-[#171717] text-[#E8FF63] font-mono font-black text-xl flex items-center justify-center border-2 border-[#171717] shadow-[2px_2px_0px_#3659F5] mb-4 card-icon-box group-hover:scale-105 transition-transform">
                        {s.num}
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#171717] mb-2 group-hover:text-[#3659F5] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[#555555] leading-relaxed mb-4 min-h-[4.25rem]">
                        {s.desc}
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
        {/* SECTION 11: ENGAGEMENT MODELS (INTERACTIVE SELECTOR & BOTTOM ALIGNED)*/}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 pb-6 border-b-2 border-[#171717]">
              <BrutalBadge variant="cobalt" size="sm" className="mb-2">
                ENGAGEMENT STRUCTURES
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Three transparent ways to collaborate
              </h2>
            </div>

            <EngagementModelSelector formAnchor="/hire-ai-developer/" />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* NEW SECTION 12: SECURITY, IP & CONFIDENTIALITY GOVERNANCE            */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-[#F7F5EF] border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SecurityGovernance />
          </div>
        </section>

        {/* Second Marquee Ribbon before closing */}
        <MarqueeTicker variant="dark" />

        {/* ==================================================================== */}
        {/* SECTION 13: SISTER BUSINESS CONNECTION (NOVA SPARK)                  */}
        {/* ==================================================================== */}
        <section className="py-16 bg-[#171717] text-white border-b-2 border-[#171717]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E8FF63] font-bold block">
                  BEYOND DEVELOPMENT // POST-BUILD GROWTH
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                  When your product is built, we help you acquire customers
                </h2>
                <p className="text-base text-[#CCCCCC] leading-relaxed max-w-2xl">
                  Hire Desi Dev operates alongside sister company{" "}
                  <strong className="text-white">Nova Spark Digital Marketing</strong>. Once your AI
                  platform or software is deployed, our marketing division can assist with international
                  customer acquisition, performance search, and organic brand building.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <BrutalButton href="/about-us/" variant="yellow" size="lg">
                  Read Our Story &amp; Model →
                </BrutalButton>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 14: FREQUENTLY ASKED QUESTIONS                               */}
        {/* ==================================================================== */}
        <section className="py-16 md:py-24 bg-white border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <BrutalBadge variant="default" size="sm" className="mb-2">
                FREQUENTLY ASKED QUESTIONS
              </BrutalBadge>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
                Everything you need to know before hiring
              </h2>
            </div>

            <BrutalAccordion items={HOME_FAQS} />
          </div>
        </section>

        {/* ==================================================================== */}
        {/* SECTION 15: HIGH-CONTRAST FINAL CALL TO ACTION                      */}
        {/* ==================================================================== */}
        <section className="py-20 md:py-28 bg-[#3659F5] text-white border-b-2 border-[#171717]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              BUILD YOUR TEAM.
              <br />
              NOT YOUR HEADCOUNT.
            </h2>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-normal">
              Tell us what you are building. We will introduce matched, vetted Indian developers
              within 24 hours.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <BrutalButton
                href="/hire-ai-developer/"
                variant="yellow"
                size="lg"
                className="text-base sm:text-lg px-8 py-4 shadow-[6px_6px_0px_#171717]"
              >
                Find Your Developer Now →
              </BrutalButton>
              <BrutalButton
                href="/contact-us/"
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-8 py-4"
              >
                Talk with Our Talent Desk
              </BrutalButton>
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
