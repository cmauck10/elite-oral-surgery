import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const resourceCards = [
  {
    title: "Financing",
    description: "Explore Cherry and CareCredit options for treatment plans of any size.",
    href: "/resources/financing",
  },
  {
    title: "Participating Insurances",
    description: "Learn about accepted insurance plans and our verification process.",
    href: "/resources/insurance",
  },
  {
    title: "Patient Forms",
    description: "Download medical history, intake, and HIPAA documents before your visit.",
    href: "/resources/patient-forms",
  },
  {
    title: "Patient Comforts",
    description: "Discover our private recovery suites, EXPAREL, and relaxation amenities.",
    href: "/resources/patient-comforts",
  },
  {
    title: "FAQ",
    description: "Answers about anesthesia, referrals, recovery timelines, and more.",
    href: "/resources/faq",
  },
  {
    title: "Pre/Post Surgery Tips",
    description: "Follow curated instructions to prepare and heal confidently.",
    href: "/resources/pre-post-surgery-tips",
  },
];

export default function ResourcesIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="Resources"
        title="Everything you need to feel prepared"
        description="From financing pathways to recovery instructions, these guides keep you informed before your visit."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {resourceCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group flex flex-col gap-3 rounded-[28px] border border-[var(--border)] bg-white/90 p-6 shadow-card transition hover:border-[var(--accent)] hover:shadow-section"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{card.title}</h2>
              <span className="text-[var(--accent)] transition group-hover:translate-x-1">→</span>
            </div>
            <p className="text-sm text-[var(--muted)]">{card.description}</p>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Explore
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

