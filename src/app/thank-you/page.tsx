import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalButton } from "@/components/BrutalButton";
import { CheckCircle2, Clock, Calendar, ShieldCheck, Phone, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Requirement Received | Hire Desi Dev",
  description: "We are reviewing your requirement and matching your vetted developer.",
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouContent({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string; req?: string; eng?: string }>;
}) {
  return (
    <Suspense fallback={<div className="p-12 text-center font-mono">Loading confirmation...</div>}>
      <ThankYouDetails searchParams={searchParams} />
    </Suspense>
  );
}

async function ThankYouDetails({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string; req?: string; eng?: string }>;
}) {
  const params = await searchParams;
  const leadId = params.leadId || `HDD-${Date.now().toString(36).toUpperCase()}`;
  const req = params.req || "Software Engineering";
  const eng = params.eng || "Monthly Dedicated";

  const NEXT_STEPS = [
    {
      time: "Within 2 Hours",
      title: "Technical Stack Audit",
      desc: "Our engineering leads review your requirements, verifying architectural fit and candidate availability.",
    },
    {
      time: "Within 12–24 Hours",
      title: "Candidate Dossiers Delivered",
      desc: "We email you 1–2 detailed developer profiles containing verified GitHub repositories and past builds.",
    },
    {
      time: "Day 2",
      title: "Direct Candidate Interview",
      desc: "Connect directly with the developer on Google Meet or Zoom. Confirm technical intuition and culture fit.",
    },
    {
      time: "Day 3",
      title: "Work Begins in Your Sprints",
      desc: "Bilateral NDA and IP assignments executed. Add developer to your Slack and GitHub repos to begin building.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Confirmation Banner */}
      <div className="bg-white border-2 border-[#171717] p-8 sm:p-10 shadow-[8px_8px_0px_#10B981] mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-[#171717] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#10B981] text-white flex items-center justify-center border-2 border-[#171717]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider block">
                REQUIREMENT INGESTED SUCCESSFULLY
              </span>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#171717]">
                We are matching your engineer.
              </h1>
            </div>
          </div>

          <div className="p-3 bg-[#F7F5EF] border border-[#171717] text-left sm:text-right">
            <span className="font-mono text-[11px] text-[#626262] block">Reference Code</span>
            <span className="font-mono text-sm font-bold text-[#171717]">{leadId}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-4 bg-[#F7F5EF] border border-[#171717]">
            <span className="font-mono text-xs text-[#626262] block">Requested Specialty</span>
            <span className="font-display font-bold text-base text-[#171717]">{req}</span>
          </div>
          <div className="p-4 bg-[#F7F5EF] border border-[#171717]">
            <span className="font-mono text-xs text-[#626262] block">Engagement Model</span>
            <span className="font-display font-bold text-base text-[#3659F5]">{eng}</span>
          </div>
        </div>

        <p className="text-base text-[#444444] leading-relaxed mb-6 font-sans">
          A confirmation summary has been dispatched. Our technical leads in Chandigarh–Mohali are
          already reviewing candidate schedules to identify the strongest architectural match for
          your team.
        </p>

        {/* Urgent WhatsApp channel */}
        <div className="p-4 bg-[#E8FF63] border-2 border-[#171717] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-[#171717]" />
            <div>
              <span className="font-display font-bold text-sm text-[#171717] block">
                Have urgent questions or sprint deadlines?
              </span>
              <span className="text-xs text-[#444444]">
                Chat directly with our talent matching desk on WhatsApp.
              </span>
            </div>
          </div>
          <a
            href="https://wa.me/911725000000?text=Hi%20Hire%20Desi%20Dev,%20following%20up%20on%20my%20requirement"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#171717] text-white font-mono text-xs font-bold uppercase tracking-wider border-2 border-[#171717] hover:bg-white hover:text-[#171717] transition-all whitespace-nowrap text-center"
          >
            Open WhatsApp Desk →
          </a>
        </div>
      </div>

      {/* Next Steps Editorial Timeline */}
      <div className="mb-12">
        <h2 className="font-display font-extrabold text-2xl text-[#171717] mb-6 pb-3 border-b-2 border-[#171717]">
          What happens next (Your 4-phase timeline)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NEXT_STEPS.map((step, idx) => (
            <div
              key={step.title}
              className="p-6 bg-white border-2 border-[#171717] shadow-[3px_3px_0px_#171717]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#3659F5] uppercase">
                  PHASE 0{idx + 1}
                </span>
                <span className="font-mono text-xs text-[#626262] bg-[#F7F5EF] px-2 py-0.5 border border-[#171717]">
                  {step.time}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-[#171717] mb-1.5">{step.title}</h3>
              <p className="text-sm text-[#555555] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Return Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-[#171717]">
        <Link
          href="/"
          className="inline-flex items-center font-display font-bold text-sm text-[#171717] hover:text-[#3659F5]"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <BrutalButton href="/hire-ai-developer/" variant="outline" size="md">
          Explore AI Developer Capabilities
        </BrutalButton>
      </div>
    </div>
  );
}

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ leadId?: string; req?: string; eng?: string }>;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171717] selection:bg-[#E8FF63]">
      <GlobalHeader />
      <main className="flex-1">
        <ThankYouContent searchParams={searchParams} />
      </main>
      <GlobalFooter />
    </div>
  );
}
