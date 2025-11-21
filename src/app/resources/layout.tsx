import type { ReactNode } from "react";

export const metadata = {
  title: "Patient Resources | Elite Oral Surgery of Wellington",
  description:
    "Financing, comfort menu, patient forms, FAQs, and pre/post surgery instructions for Elite Oral Surgery of Wellington.",
};

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-4xl px-6 py-8 lg:px-8">{children}</section>
    </div>
  );
}

