import { ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg";

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-4xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
};

export function Container({ children, size = "lg", className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto ${sizeClasses[size]} px-6 py-8 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

