import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const comforts = [
  {
    title: "Private Recovery Suites",
    description:
      "After sedation, you’ll transition to a private suite with dimmed lighting, aromatherapy, and warmed blankets so you can wake up gradually.",
    details: [
      "Continuous monitoring by our nursing team",
      "Complimentary comfort kit with lip balm, ice packs, and herbal tea",
      "Discreet exit through a private doorway when you’re ready",
    ],
  },
  {
    title: "EXPAREL® Long-Acting Anesthetic",
    description:
      "Ask us about EXPAREL, a liposomal anesthetic that can keep surgical areas numb for up to 72 hours, drastically reducing the need for opioids after surgery.",
    details: [
      "Single-dose injection placed during surgery",
      "Helps control breakthrough pain during the most critical recovery window",
      "Part of our opioid-sparing comfort protocol",
    ],
  },
];

export default function PatientComfortsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Patient Comforts"
        title="Calming the mind and body at every step"
        description="Sedation dentistry is about trust. We pair advanced anesthesia with hospitality-level comforts, so you feel cared for before, during, and after treatment."
      />

      <div className="mt-12 space-y-8">
        {comforts.map((item) => (
          <article
            key={item.title}
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md"
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-4 text-[var(--muted)]">{item.description}</p>
            <ul className="mt-6 grid gap-3 text-sm text-[var(--foreground)]">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 shadow-sm"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Experience the Difference
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Comfort-focused care awaits
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          From the moment you arrive to your final follow-up, experience the elevated comfort and personalized attention that sets Elite Oral Surgery apart.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/about/office-tour"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Tour Our Office
          </Link>
        </div>
      </section>
    </>
  );
}

