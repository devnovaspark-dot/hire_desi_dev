import React from "react";
import { BrutalBadge } from "./BrutalBadge";
import { Check, X, Minus } from "lucide-react";

export const ComparisonTable: React.FC = () => {
  const ROWS = [
    {
      feature: "Time to First Interview",
      desiDev: "< 24 Hours",
      agency: "3 to 6 Weeks",
      marketplaces: "Immediate (Unvetted)",
      inHouse: "4 to 8 Weeks",
    },
    {
      feature: "Vetting Rigor",
      desiDev: "Top 2% Vetted (Architecture & Code Audits)",
      agency: "Resume Keyword Match",
      marketplaces: "Self-Reported Claims",
      inHouse: "Extensive Internal Time Spent",
    },
    {
      feature: "Markup & Hidden Commissions",
      desiDev: "0% Markup (Transparent Direct Terms)",
      agency: "25% to 40% Ongoing Margin Added",
      marketplaces: "10% to 20% Platform Fee",
      inHouse: "Recruiter Fees (15–25% Salary)",
    },
    {
      feature: "Synchronous Timezone Overlap",
      desiDev: "4 to 6 Hours Guaranteed (US/EU)",
      agency: "Varies / Often Unmanaged",
      marketplaces: "Often Asynchronous Only",
      inHouse: "Full Local Overlap",
    },
    {
      feature: "English & Communication Standard",
      desiDev: "C1 / C2 Technical Fluency Tested",
      agency: "Not Formally Verified",
      marketplaces: "Unpredictable / Inconsistent",
      inHouse: "Verified Internally",
    },
    {
      feature: "IP & Code Ownership Transfer",
      desiDev: "100% Upfront Bilateral Assignment",
      agency: "Complex Agency Third-Party Contracts",
      marketplaces: "Platform Standard Terms",
      inHouse: "Standard Employment Contract",
    },
    {
      feature: "Free Replacement Guarantee",
      desiDev: "Instant Match Replacement If Needed",
      agency: "30–90 Day Wait Time",
      marketplaces: "Dispute Mediation",
      inHouse: "Costly Restart of Recruiter Cycle",
    },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto border-2 border-[#171717] bg-white shadow-[6px_6px_0px_#171717]">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b-2 border-[#171717] bg-[#F7F5EF]">
              <th className="p-4 sm:p-5 font-mono text-xs font-bold uppercase text-[#626262] w-1/4">
                EVALUATION CRITERIA
              </th>
              <th className="p-4 sm:p-5 font-display font-extrabold text-base sm:text-lg text-[#171717] bg-[#E8FF63] border-x-2 border-[#171717] w-1/4">
                <div className="flex items-center justify-between">
                  <span>HIRE DESI DEV</span>
                  <BrutalBadge variant="dark" size="sm">
                    OUR STANDARD
                  </BrutalBadge>
                </div>
              </th>
              <th className="p-4 sm:p-5 font-display font-bold text-sm sm:text-base text-[#171717] w-1/6">
                TRADITIONAL RECRUITERS
              </th>
              <th className="p-4 sm:p-5 font-display font-bold text-sm sm:text-base text-[#171717] w-1/6">
                FREELANCE MARKETPLACES
              </th>
              <th className="p-4 sm:p-5 font-display font-bold text-sm sm:text-base text-[#171717] w-1/6">
                IN-HOUSE HIRING
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-[#171717] text-xs sm:text-sm font-sans">
            {ROWS.map((row, idx) => (
              <tr key={row.feature} className="hover:bg-[#F7F5EF]/60 transition-colors">
                <td className="p-4 sm:p-5 font-display font-bold text-[#171717]">{row.feature}</td>
                <td className="p-4 sm:p-5 font-semibold text-[#171717] bg-[#E8FF63]/20 border-x-2 border-[#171717]">
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0 stroke-[3]" />
                    <span>{row.desiDev}</span>
                  </div>
                </td>
                <td className="p-4 sm:p-5 text-[#626262]">{row.agency}</td>
                <td className="p-4 sm:p-5 text-[#626262]">{row.marketplaces}</td>
                <td className="p-4 sm:p-5 text-[#626262]">{row.inHouse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
