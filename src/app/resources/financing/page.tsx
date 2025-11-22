import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const financingOptions = [
  {
    name: "Cherry",
    summary: "Soft credit check, instant approvals, and flexible biweekly or monthly payment plans.",
    perks: ["0% APR promotional options", "No hard credit check", "Same-day approvals"],
    url: "https://withcherry.com",
  },
  {
    name: "CareCredit",
    summary:
      "Healthcare credit line that can cover oral surgery, dental implants, and sedation with extended payment terms.",
    perks: ["6–24 month deferred interest plans", "Accepted nationwide","Same-day approvals"],
    url: "https://www.carecredit.com",
  },
  {
    name: "Pre-Surgery Payment Plan",
    summary:
      "Break your total treatment plan into smaller, more manageable payments leading up to your procedure.",
    perks: ["No application required", "Fixed payments", "No interest or fees"],
    url: "/resources/financing",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Financing Options"
        title="Invest in your health with confident payment pathways"
        description="We partner with financial platforms that allow you to move forward with care immediately and repay over time."
      />

      <div className="mt-12 grid gap-8">
        {financingOptions.map((option) => (
          <article
            key={option.name}
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">{option.name}</h2>
              <Link
                href={option.url}
                target="_blank"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Learn more
              </Link>
            </div>
            <p className="mt-4 text-[var(--muted)]">{option.summary}</p>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--foreground)] sm:grid-cols-2">
              {option.perks.map((perk) => (
                <li
                  key={perk}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 shadow-sm"
                >
                  {perk}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Ready to Move Forward
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Let's discuss your financing options
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          Our team will walk you through payment plans and help you choose the best option for your situation. Schedule a consultation to get started.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Schedule Consultation
          </Link>
          <a
            href="tel:15617900206"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Call (561) 790-0206
          </a>
        </div>
      </section>
    </>
  );
}

