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
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
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
    </>
  );
}

