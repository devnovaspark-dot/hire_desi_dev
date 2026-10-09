"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface BrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cobalt" | "yellow" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  arrowPosition?: "left" | "right";
  isFullWidth?: boolean;
  children: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  arrowPosition = "right",
  isFullWidth = false,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-semibold transition-all duration-150 select-none border-2 border-[#171717] focus-visible:ring-2 focus-visible:ring-[#3659F5] focus-visible:outline-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs min-h-[38px] tracking-wide",
    md: "px-5 py-2.5 text-sm sm:text-base min-h-[48px] tracking-tight",
    lg: "px-7 py-3.5 text-base sm:text-lg min-h-[54px] tracking-tight",
  };

  const variantStyles = {
    primary:
      "bg-[#171717] text-white shadow-[4px_4px_0px_#3659F5] hover:shadow-[6px_6px_0px_#3659F5] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#3659F5]",
    cobalt:
      "bg-[#3659F5] text-white shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#171717]",
    yellow:
      "bg-[#E8FF63] text-[#171717] shadow-[4px_4px_0px_#171717] hover:shadow-[6px_6px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#171717]",
    outline:
      "bg-white text-[#171717] shadow-[3px_3px_0px_#171717] hover:bg-[#F7F5EF] hover:shadow-[5px_5px_0px_#171717] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#171717]",
    ghost:
      "bg-transparent text-[#171717] border-transparent shadow-none hover:bg-black/5 hover:border-[#171717]",
    dark:
      "bg-[#171717] text-white shadow-[4px_4px_0px_#E8FF63] hover:shadow-[6px_6px_0px_#E8FF63] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#E8FF63]",
  };

  const disabledStyles = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none shadow-none transform-none"
    : "";

  const widthStyle = isFullWidth ? "w-full" : "";

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${disabledStyles} ${className}`.trim();

  const content = (
    <>
      {showArrow && arrowPosition === "left" && (
        <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
      )}
      <span>{children}</span>
      {showArrow && arrowPosition === "right" && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${combinedClasses}`} onClick={onClick as any}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`group ${combinedClasses}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};
