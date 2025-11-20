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
    perks: ["6–24 month deferred interest plans", "Accepted nationwide", "Use for follow-up visits"],
    url: "https://www.carecredit.com",
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
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
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
    </>
  );
}

