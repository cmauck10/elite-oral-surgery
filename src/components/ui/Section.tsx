import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "tight" | "normal" | "loose";
}

const spacingClasses = {
  tight: "mt-8",
  normal: "mt-12",
  loose: "mt-16",
};

export function Section({ children, className = "", spacing = "normal" }: SectionProps) {
  return <section className={`${spacingClasses[spacing]} ${className}`}>{children}</section>;
}

