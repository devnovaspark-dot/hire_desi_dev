import React from "react";
import { BrutalBadge } from "./BrutalBadge";
import {
  ShieldCheck,
  Lock,
  FileText,
  DatabaseZap,
  GitBranch,
  Laptop,
  CheckCircle2,
  Check,
} from "lucide-react";

export const SecurityGovernance: React.FC = () => {
  const PILLARS = [
    {
      title: "100% Client Code & IP Assignment",
      desc: "All source code, models, documentation, and digital assets created belong solely to your organization from the first commit. Complete bilateral IP agreements executed prior to start.",
      icon: FileText,
      tag: "IP OWNERSHIP",
      auditStatus: "Bilateral Assignment Upfront",
    },
    {
      title: "Bilateral Strict NDA Upfront",
      desc: "Before you share a single repository or project document, mutual non-disclosure agreements are in effect. Your product ideas and proprietary roadmaps are legally protected.",
      icon: Lock,
      tag: "LEGAL PROTECTION",
      auditStatus: "Standard Mutual NDA",
    },
    {
      title: "Zero Model Training on Private Data",
      desc: "Our engineers adhere to strict zero-retention AI tooling policies. Client corporate data is never used to train public LLM weights or external foundation models.",
      icon: DatabaseZap,
      tag: "AI PRIVACY",
      auditStatus: "Zero-Retention Verified",
    },
    {
      title: "Direct Access to Your Repositories",
      desc: "Engineers code directly inside your GitHub, GitLab, or Bitbucket organization. No intermediary code silos or delayed handoffs—you maintain total visibility.",
      icon: GitBranch,
      tag: "REPO GOVERNANCE",
      auditStatus: "Direct GitHub / GitLab Access",
    },
    {
      title: "Dedicated Secure Workstations",
      desc: "Developers operate on dedicated secure hardware with encrypted disks, 2FA password vaults, and standard endpoint security controls.",
      icon: Laptop,
      tag: "ENDPOINT SECURITY",
      auditStatus: "Encrypted Disk & 2FA Required",
    },
    {
      title: "GDPR & SOC2 Readiness",
      desc: "Engineers are trained in enterprise privacy standards, zero-trust data access, and secure secrets management (e.g. AWS Secrets Manager, Doppler).",
      icon: ShieldCheck,
      tag: "COMPLIANCE",
      auditStatus: "Enterprise Ready",
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-10 pb-6 border-b-2 border-[#171717]">
        <BrutalBadge variant="cobalt" size="sm" className="mb-2">
          ENTERPRISE COMPLIANCE &amp; IP
        </BrutalBadge>
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#171717] tracking-tight">
          Enterprise security, strict confidentiality &amp; zero IP friction
        </h2>
        <p className="text-sm font-mono text-[#626262] mt-1 max-w-xl">
          We protect international companies with rigorous legal standards, secure access control,
          and complete intellectual property transfer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {PILLARS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group h-full bg-white border-2 border-[#171717] p-6 shadow-[4px_4px_0px_#171717] hover:shadow-[7px_7px_0px_#3659F5] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#E7E5DF] mb-4">
                    <div className="w-10 h-10 bg-[#F7F5EF] border border-[#171717] flex items-center justify-center card-icon-box group-hover:bg-[#E8FF63] transition-colors">
                      <Icon className="w-5 h-5 text-[#3659F5] group-hover:text-[#171717] transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#626262] uppercase bg-[#E7E5DF] px-2 py-0.5 border border-[#171717]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#171717] mb-2 leading-snug group-hover:text-[#3659F5] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-4">{p.desc}</p>
                </div>

                {/* Bottom status badge pinned strictly to the bottom */}
                <div className="mt-auto pt-4 border-t border-[#E7E5DF] flex items-center justify-between text-xs font-mono text-[#626262]">
                  <span className="flex items-center gap-1.5 text-[#10B981] font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>{p.auditStatus}</span>
                  </span>
                  <span className="text-[10px] text-[#A3A3A3] uppercase">ENFORCED</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
