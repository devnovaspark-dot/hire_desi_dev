import React from "react";

export interface BrutalBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "yellow" | "cobalt" | "dark" | "emerald" | "outline" | "white";
  size?: "sm" | "md";
  showDot?: boolean;
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  showDot = false,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center font-mono font-medium uppercase tracking-wider border border-[#171717] select-none";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] gap-1.5",
    md: "px-2.5 py-1 text-xs gap-2",
  };

  const variantStyles = {
    default: "bg-[#E7E5DF] text-[#171717] shadow-[2px_2px_0px_#171717]",
    yellow: "bg-[#E8FF63] text-[#171717] shadow-[2px_2px_0px_#171717] font-semibold",
    cobalt: "bg-[#3659F5] text-white shadow-[2px_2px_0px_#171717]",
    dark: "bg-[#171717] text-white shadow-[2px_2px_0px_#3659F5]",
    emerald: "bg-[#ECFDF5] text-[#065F46] border-[#059669] shadow-[2px_2px_0px_#059669]",
    outline: "bg-transparent text-[#171717] border-[#171717]",
    white: "bg-white text-[#171717] shadow-[2px_2px_0px_#171717]",
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
