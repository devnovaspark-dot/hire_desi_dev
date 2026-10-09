import React from "react";

export interface BrutalCardProps {
  children: React.ReactNode;
  variant?: "white" | "mist" | "dark" | "yellow" | "cobalt";
  hoverEffect?: boolean;
  tag?: string;
  className?: string;
  headerRight?: React.ReactNode;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({
  children,
  variant = "white",
  hoverEffect = false,
  tag,
  className = "",
  headerRight,
}) => {
  const variantStyles = {
    white: "bg-white text-[#171717] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]",
    mist: "bg-[#F7F5EF] text-[#171717] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]",
    dark: "bg-[#171717] text-white border-2 border-[#171717] shadow-[4px_4px_0px_#3659F5]",
    yellow: "bg-[#E8FF63] text-[#171717] border-2 border-[#171717] shadow-[4px_4px_0px_#171717]",
    cobalt: "bg-[#3659F5] text-white border-2 border-[#171717] shadow-[4px_4px_0px_#171717]",
  };

  const hoverStyles = hoverEffect
    ? "card-interactive transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#171717]"
    : "";

  return (
    <div
      className={`group relative h-full flex flex-col justify-between ${variantStyles[variant]} ${hoverStyles} ${className}`}
    >
      {tag && (
        <div className="flex items-center justify-between border-b-2 border-inherit px-5 py-2.5 bg-black/[0.04]">
          <span className="font-mono text-xs font-semibold tracking-wider uppercase opacity-80">
            {tag}
          </span>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between">{children}</div>
    </div>
  );
};
