import { ReactNode } from "react";

type CardVariant = "default" | "compact" | "elevated";
type CardSize = "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  className?: string;
}

const variantClasses: Record<CardVariant, string> = {
  default: "rounded-[28px] border border-[var(--border)] bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)]",
  compact: "rounded-2xl border border-[var(--border)] bg-white/90 shadow-sm",
  elevated: "rounded-[32px] border border-[var(--border)] bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.08)]",
};

const sizeClasses: Record<CardSize, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8 lg:p-12",
};

export function Card({ children, variant = "default", size = "md", className = "" }: CardProps) {
  return (
    <div className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}

