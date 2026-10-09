"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BrutalButton } from "./BrutalButton";
import { CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";

export interface RequirementFormProps {
  formPosition: "1" | "2" | "3" | "contact";
  initialRequirement?: string;
  initialEngagement?: "Hourly" | "Monthly" | "Fixed cost";
  accentColor?: "yellow" | "cobalt" | "white";
  className?: string;
  compact?: boolean;
}

const TARGET_MARKETS = [
  "United States",
  "United Kingdom",
  "Germany",
  "United Arab Emirates",
  "Singapore",
  "Canada",
  "Australia",
  "Netherlands",
  "Switzerland",
  "France",
  "Sweden",
  "Ireland",
  "Israel",
  "Japan",
  "Norway",
  "Denmark",
  "New Zealand",
  "Austria",
  "Belgium",
  "Finland",
  "Spain",
  "Italy",
];

const OTHER_COUNTRIES = [
  "Argentina",
  "Brazil",
  "Chile",
  "Colombia",
  "Czech Republic",
  "Estonia",
  "Greece",
  "Hong Kong",
  "Hungary",
  "India",
  "Indonesia",
  "Malaysia",
  "Mexico",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Saudi Arabia",
  "South Africa",
  "South Korea",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Vietnam",
  "Other Country",
];

const REQUIREMENTS = [
  "AI / ML developer",
  "Generative AI developer",
  "LLM engineer",
  "AI agent developer",
  "Computer vision developer",
  "NLP developer",
  "Chatbot developer",
  "RAG developer",
  "Full Stack developer",
  "Mobile developer",
  "DevOps engineer",
  "Other technical requirement",
];

export const RequirementForm: React.FC<RequirementFormProps> = ({
  formPosition,
  initialRequirement = "AI / ML developer",
  initialEngagement = "Monthly",
  accentColor = "white",
  className = "",
  compact = false,
}) => {
  const router = useRouter();

  const [developerReq, setDeveloperReq] = useState(initialRequirement);
  const [engagementType, setEngagementType] = useState<"Hourly" | "Monthly" | "Fixed cost">(
    initialEngagement
  );
  const [name, setName] = useState("");
  const [country, setCountry] = useState("United States");
  const [contact, setContact] = useState("");
  const [expectedStart, setExpectedStart] = useState("Within 2 weeks");
  const [description, setDescription] = useState("");

  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    gclid: "",
    landing_url: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: searchParams.get("utm_source") || "",
        utm_medium: searchParams.get("utm_medium") || "",
        utm_campaign: searchParams.get("utm_campaign") || "",
        utm_term: searchParams.get("utm_term") || "",
        gclid: searchParams.get("gclid") || "",
        landing_url: window.location.href,
      });
    }
  }, []);

  const triggerFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_start",
          formPosition,
        });
      }
    }
  };

  const handleEngagementChange = (type: "Hourly" | "Monthly" | "Fixed cost") => {
    setEngagementType(type);
    triggerFormStart();
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "engagement_select",
        engagementType: type,
        formPosition,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    if (!contact.trim()) {
      setErrorMessage("Please enter a valid work email or WhatsApp contact number.");
      return;
    }

    // Basic email/phone validation
    const hasAt = contact.includes("@");
    const hasPhoneDigits = contact.replace(/[^0-9]/g, "").length >= 7;
    if (!hasAt && !hasPhoneDigits) {
      setErrorMessage("Please enter a valid email address or phone/WhatsApp number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        developerRequirement: developerReq,
        engagementType,
        name: name.trim(),
        country,
        contact: contact.trim(),
        expectedStart,
        description: description.trim(),
        formPosition,
        ...utmParams,
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Dispatch telemetry
        if (typeof window !== "undefined" && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: "generate_lead",
            leadId: data.leadId,
            developerRequirement: developerReq,
            engagementType,
            country,
            formPosition,
          });
        }
        router.push(
          `/thank-you?leadId=${encodeURIComponent(data.leadId)}&req=${encodeURIComponent(
            developerReq
          )}&eng=${encodeURIComponent(engagementType)}`
        );
      } else {
        setErrorMessage(data.error || "Submission failed. Please try again or reach out directly.");
      }
    } catch (err: any) {
      setErrorMessage("Network error. Please check your connection or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const accentStyles = {
    white: "bg-white border-2 border-[#171717] shadow-[6px_6px_0px_#171717]",
    yellow: "bg-[#FAFAF5] border-2 border-[#171717] shadow-[6px_6px_0px_#E8FF63]",
    cobalt: "bg-white border-2 border-[#171717] shadow-[6px_6px_0px_#3659F5]",
  };

  return (
    <div
      id={`form-${formPosition}`}
      className={`relative p-5 sm:p-7 md:p-8 ${accentStyles[accentColor]} ${className}`}
    >
      {/* Neo-brutalist corner tag */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b-2 border-[#171717]">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-[#171717]"></span>
          <span className="font-mono text-xs sm:text-sm font-bold tracking-wider uppercase text-[#171717]">
            {formPosition === "contact" ? "Direct Inquiry Desk" : `Requirement Intake [0${formPosition}]`}
          </span>
        </div>
        <span className="font-mono text-xs text-[#626262] bg-[#E7E5DF] px-2 py-0.5 border border-[#171717]">
          Response SLA: &lt; 4h
        </span>
      </div>

      <div className="mb-5">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] tracking-tight">
          Tell us your requirement
        </h3>
        <p className="text-sm text-[#626262] mt-1">
          A short intake. We review your stack and return with a matched, vetted developer.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-3.5 bg-red-50 border-2 border-[#E11D48] text-[#E11D48] text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span className="font-medium">{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* 1. Developer Requirement */}
        <div>
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
            Developer Requirement <span className="text-[#3659F5]">*</span>
          </label>
          <div className="relative">
            <select
              value={developerReq}
              onChange={(e) => {
                setDeveloperReq(e.target.value);
                triggerFormStart();
              }}
              className="w-full h-12 px-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans font-medium text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3659F5] cursor-pointer"
            >
              {REQUIREMENTS.map((req) => (
                <option key={req} value={req}>
                  {req}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3.5 pointer-events-none text-[#171717] font-bold">
              ▼
            </div>
          </div>
        </div>

        {/* 2. Engagement Type (Segmented 3-Way Choice) */}
        <div>
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
            Engagement Model <span className="text-[#3659F5]">*</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["Hourly", "Monthly", "Fixed cost"] as const).map((type) => {
              const isSelected = engagementType === type;
              return (
                <button
                  type="button"
                  key={type}
                  onClick={() => handleEngagementChange(type)}
                  className={`py-2.5 px-2 text-xs sm:text-sm font-display font-bold border-2 border-[#171717] text-center transition-all select-none ${
                    isSelected
                      ? "bg-[#3659F5] text-white shadow-[2px_2px_0px_#171717] -translate-x-0.5 -translate-y-0.5"
                      : "bg-[#F7F5EF] text-[#171717] hover:bg-white"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Name & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
              Your Name <span className="text-[#3659F5]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                triggerFormStart();
              }}
              className="w-full h-12 px-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans text-[#171717] placeholder-[#8E8B82] focus:outline-none focus:ring-2 focus:ring-[#3659F5]"
            />
          </div>

          <div>
            <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
              Country <span className="text-[#3659F5]">*</span>
            </label>
            <div className="relative">
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  triggerFormStart();
                }}
                className="w-full h-12 px-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3659F5] cursor-pointer"
              >
                <optgroup label="Target Markets (Priority Support)">
                  {TARGET_MARKETS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="All Other Countries">
                  {OTHER_COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </optgroup>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3.5 pointer-events-none text-[#171717] font-bold">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* 4. Email or WhatsApp Contact */}
        <div>
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
            Work Email or Phone / WhatsApp <span className="text-[#3659F5]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="alex@company.com or +1 (555) 019-2834"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              triggerFormStart();
            }}
            className="w-full h-12 px-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans text-[#171717] placeholder-[#8E8B82] focus:outline-none focus:ring-2 focus:ring-[#3659F5]"
          />
        </div>

        {/* 5. Expected Start Timeline */}
        <div>
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
            Expected Start Date <span className="text-[#626262] font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <select
              value={expectedStart}
              onChange={(e) => {
                setExpectedStart(e.target.value);
                triggerFormStart();
              }}
              className="w-full h-12 px-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans text-[#171717] appearance-none focus:outline-none focus:ring-2 focus:ring-[#3659F5] cursor-pointer"
            >
              <option value="This week">Immediately / This week</option>
              <option value="Within 2 weeks">Within 2 weeks</option>
              <option value="Within a month">Within 1 month</option>
              <option value="Still exploring">Still planning / exploring scope</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3.5 pointer-events-none text-[#171717] font-bold">
              ▼
            </div>
          </div>
        </div>

        {/* 6. Project Description */}
        <div>
          <label className="block font-mono text-xs font-bold uppercase tracking-wider text-[#171717] mb-1.5">
            Project Description <span className="text-[#626262] font-normal">(Optional)</span>
          </label>
          <textarea
            rows={compact ? 2 : 3}
            placeholder="What are you building and what should the developer do? (e.g. LangChain agent on internal PDFs, FastAPI backend, Next.js frontend)"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              triggerFormStart();
            }}
            className="w-full p-3.5 bg-white border-2 border-[#171717] text-sm sm:text-base font-sans text-[#171717] placeholder-[#8E8B82] focus:outline-none focus:ring-2 focus:ring-[#3659F5] resize-y"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <BrutalButton
            type="submit"
            variant="cobalt"
            size="lg"
            isFullWidth
            disabled={isSubmitting}
            className="text-base sm:text-lg uppercase tracking-wider font-bold"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Matching Developer...
              </span>
            ) : (
              "Get an AI Developer →"
            )}
          </BrutalButton>
        </div>

        {/* Veracity & Privacy Guarantee */}
        <div className="pt-2 flex items-center justify-between text-xs text-[#626262] border-t border-[#D6D3C9] mt-4">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            No obligation · Direct match
          </span>
          <span className="font-mono text-[11px] text-[#626262]">
            Zero middleman markup
          </span>
        </div>
      </form>
    </div>
  );
};
