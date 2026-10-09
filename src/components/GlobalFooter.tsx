import React from "react";
import Link from "next/link";
import { BrutalBadge } from "./BrutalBadge";
import { Terminal, Shield, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export const GlobalFooter: React.FC<{ minimal?: boolean }> = ({ minimal = false }) => {
  return (
    <footer className="bg-[#171717] text-white border-t-4 border-[#3659F5]">
      {/* Upper footer grid */}
      {!minimal && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Column 1: Brand & Parent Company */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8FF63] text-[#171717] flex items-center justify-center font-display font-extrabold text-xl border-2 border-white shadow-[2px_2px_0px_#3659F5]">
                  H
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                    HIRE DESI DEV
                  </span>
                  <span className="font-mono text-xs text-[#E8FF63] uppercase tracking-wider">
                    Vetted Indian Engineering Talent
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
                A specialized technical talent platform connecting international businesses with
                elite, vetted Indian AI developers and engineering teams. Zero middleman markup,
                rapid matching, and flexible terms.
              </p>

              <div className="p-4 bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E8FF63]"></span>
                  <span className="font-mono text-xs text-[#E8FF63] font-semibold uppercase">
                    Sister Business Notice
                  </span>
                </div>
                <p className="text-xs text-[#CCCCCC] leading-normal">
                  Hire Desi Dev operates in strategic partnership with{" "}
                  <strong className="text-white">Nova Spark Digital Marketing</strong>. When your
                  product is built, we can help you scale and acquire customers globally.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-[#A3A3A3]">
                <MapPin className="w-3.5 h-3.5 text-[#E8FF63]" />
                <span>Chandigarh–Mohali IT Corridor, India</span>
              </div>
            </div>

            {/* Column 2: Specialties */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#E8FF63] uppercase tracking-wider pb-2 border-b border-white/10">
                Specialties
              </h4>
              <ul className="space-y-2 text-sm text-[#CCCCCC] font-sans">
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    AI / ML Developers
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    Generative AI Specialists
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    LLM & RAG Engineers
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    Autonomous AI Agents
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    Computer Vision Engineers
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="hover:text-white transition-colors">
                    Full Stack Developers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Engagement Models */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#E8FF63] uppercase tracking-wider pb-2 border-b border-white/10">
                Engagement Models
              </h4>
              <ul className="space-y-2 text-sm text-[#CCCCCC]">
                <li className="flex flex-col">
                  <span className="font-bold text-white">Hourly Engagement</span>
                  <span className="text-xs text-[#999999]">Audits, short sprints, evolving scope</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-white">Monthly Dedicated</span>
                  <span className="text-xs text-[#999999]">Full-time developer in your sprint cycles</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-white">Fixed Cost Delivery</span>
                  <span className="text-xs text-[#999999]">Defined deliverables with agreed outcomes</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Platform & Legal */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-[#E8FF63] uppercase tracking-wider pb-2 border-b border-white/10">
                Platform
              </h4>
              <ul className="space-y-2 text-sm text-[#CCCCCC]">
                <li>
                  <Link href="/about-us/" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-white transition-colors">
                    How Matching Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/hire-ai-developer/" className="hover:text-white transition-colors">
                    Hire AI Developer Desk
                  </Link>
                </li>
                <li>
                  <span className="text-xs text-[#888888] block pt-2">
                    Response SLA: &lt; 4 hours for international inquiries
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Bottom copyright band */}
      <div className="border-t border-white/10 bg-black/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#888888]">
          <div className="flex items-center gap-3">
            <span>© 2026 Hire Desi Dev · Nova Spark Digital Marketing</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-[#A3A3A3]">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[#CCCCCC]">
            <Link href="/contact-us/" className="hover:underline">
              Contact Desk
            </Link>
            <span>·</span>
            <Link href="/about-us/" className="hover:underline">
              Talent Philosophy
            </Link>
            <span>·</span>
            <Link href="/hire-ai-developer/" className="hover:underline text-[#E8FF63]">
              Hire AI Developer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
