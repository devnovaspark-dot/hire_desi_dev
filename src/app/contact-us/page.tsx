import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GlobalHeader } from "@/components/GlobalHeader";
import { GlobalFooter } from "@/components/GlobalFooter";
import { RequirementForm } from "@/components/RequirementForm";
import { BrutalBadge } from "@/components/BrutalBadge";
import { BrutalCard } from "@/components/BrutalCard";
import { BrutalButton } from "@/components/BrutalButton";
import { BrutalAccordion, AccordionItem } from "@/components/BrutalAccordion";
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Hire Desi Dev & Engineering Talent Desk",
  description:
    "Get in touch with our talent matching team in Chandigarh–Mohali. Fast turnaround for project requirements and developer matching.",
  alternates: {
    canonical: "https://hiredesidev.com/contact-us/",
  },
};

export default function ContactUsPage() {
  const CONTACT_INFO = [
    {
      label: "EMAIL",
      value: "talent@hiredesidev.com",
      desc: "For general inquiries, RFPs, and hiring specs",
      icon: Mail,
    },
    {
      label: "PHONE / WHATSAPP",
      value: "+91 (172) 500-DESI",
      desc: "Instant international WhatsApp technical intake desk",
      icon: Phone,
    },
    {
      label: "OFFICE LOCATION",
      value: "Chandigarh–Mohali IT Park, Punjab, India",
      desc: "Operating alongside Nova Spark Digital Marketing",
      icon: MapPin,
    },
  ];

  const INTAKE_FAQS: AccordionItem[] = [
    {
      id: "cfaq-1",
      question: "What happens after I submit this requirement form?",
      answer:
        "Our engineering matching leads review your stack and timeline. Within 4 to 12 hours, we send you 1–2 matched candidate dossiers with verified GitHub repos and code examples. You can schedule a video interview immediately.",
    },
    {
      id: "cfaq-2",
      question: "Is there any cost or commitment to review candidate profiles?",
      answer:
        "None. Sourcing, candidate review, and initial technical interviews are 100% free and carry zero obligation. You only begin an engagement when you have interviewed and approved your chosen engineer.",
    },
    {
      id: "cfaq-3",
      question: "How do contracts and billing work for international companies?",
      answer:
        "We support seamless international invoicing in USD, EUR, GBP, AUD, and SGD with major corporate payment methods (wire transfer, credit card, ACH). Standard bilateral NDAs and IP assignment contracts are executed before work begins.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EF] text-[#171717] selection:bg-[#E8FF63]">
      <GlobalHeader />

      <main className="flex-1">
        {/* Contact Hero & Form Layout */}
        <section className="py-8 sm:py-12 border-b-2 border-[#171717] bg-[#F7F5EF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Direct Contact Info & Imagery */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-4">
                  <BrutalBadge variant="dark" size="md">
                    CONTACT TALENT DESK
                  </BrutalBadge>

                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#171717] tracking-tight leading-[1.08]">
                    Let us know what you need
                  </h1>

                  <p className="text-sm sm:text-base text-[#444444] font-sans leading-relaxed">
                    Send a requirement or ask a question. Our technical matching team will come back to
                    you with candidate dossiers within 4 hours.
                  </p>

                  {/* Office photo preview with clean header (ZERO text overlay on photo) */}
                  <div className="border-2 border-[#171717] shadow-[4px_4px_0px_#171717] bg-white overflow-hidden">
                    <div className="p-2 bg-[#F7F5EF] border-b-2 border-[#171717] flex items-center justify-between font-mono text-[10px] font-bold">
                      <span className="text-[#171717]">CHANDIGARH–MOHALI TALENT DESK</span>
                      <span className="text-[#10B981]">ONLINE &amp; DISPATCHING</span>
                    </div>
                    <div className="relative h-36 w-full bg-[#171717] overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                        alt="Chandigarh-Mohali IT Park engineering center"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Contact cards */}
                  <div className="space-y-2.5 pt-1">
                    {CONTACT_INFO.map((c) => {
                      const Icon = c.icon;
                      return (
                        <div
                          key={c.label}
                          className="group p-3.5 bg-white border-2 border-[#171717] shadow-[2px_2px_0px_#171717] hover:shadow-[4px_4px_0px_#3659F5] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
                        >
                          <div className="flex items-center gap-2 mb-0.5">
                            <Icon className="w-3.5 h-3.5 text-[#3659F5] group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-[10px] font-bold text-[#626262] uppercase tracking-wider">
                              {c.label}
                            </span>
                          </div>
                          <div className="font-display font-bold text-sm sm:text-base text-[#171717] group-hover:text-[#3659F5] transition-colors">
                            {c.value}
                          </div>
                          <p className="text-[11px] text-[#626262] mt-0.5">{c.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Routing to Landing Page pinned to bottom */}
                <div className="p-4 bg-[#E8FF63] border-2 border-[#171717] shadow-[3px_3px_0px_#171717] space-y-1.5 mt-auto">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#171717] block">
                    Prefer the dedicated AI developer intake?
                  </span>
                  <p className="text-xs text-[#333333]">
                    Our AI landing page features specialized model scopes and instant matching.
                  </p>
                  <div>
                    <Link
                      href="/hire-ai-developer/"
                      className="inline-flex items-center font-display font-bold text-xs sm:text-sm text-[#171717] hover:underline"
                    >
                      <span>Go to Hire AI Developer page</span>
                      <ArrowRight className="ml-1.5 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Intake Requirement Form */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <RequirementForm
                  formPosition="contact"
                  accentColor="cobalt"
                  initialEngagement="Monthly"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Intake FAQ Section */}
        <section className="py-16 md:py-20 bg-white border-b-2 border-[#171717]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <BrutalBadge variant="default" size="sm" className="mb-2">
                INTAKE &amp; ENGAGEMENT FAQS
              </BrutalBadge>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#171717] tracking-tight">
                Common questions from hiring managers
              </h2>
            </div>

            <BrutalAccordion items={INTAKE_FAQS} />
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  );
}
