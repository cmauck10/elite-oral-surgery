import type { ReactNode } from "react";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Patient Resources | Elite Oral Surgery of Wellington",
  description:
    "Financing, comfort menu, patient forms, FAQs, and pre/post surgery instructions for Elite Oral Surgery of Wellington.",
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Container size="sm">{children}</Container>
    </div>
  );
}

