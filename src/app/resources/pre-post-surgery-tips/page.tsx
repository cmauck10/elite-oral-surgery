import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const sections = [
  {
    label: "Before Your Procedure",
    items: [
      "Confirm fasting instructions if you're receiving IV sedation.",
      "Wear loose, comfortable clothing with short sleeves. Leave jewelry and contact lenses at home.",
      "Arrange transportation and a support person to stay with you for the first evening.",
      "Pick up prescriptions in advance and stock soft foods like smoothies, soups, and protein shakes.",
    ],
  },
  {
    label: "Immediately After Surgery",
    items: [
      "Keep gauze in place with gentle pressure for the first hour, replacing only as instructed.",
      "Use cold compresses for 20 minutes on, 20 minutes off, during the first 24 hours.",
      "Take medications on schedule—even if you feel comfortable—to stay ahead of discomfort.",
      "Stick to cool, soft foods and avoid straws, smoking, or vigorous rinsing for the first day.",
    ],
  },
  {
    label: "Days 2–7",
    items: [
      "Begin warm saltwater rinses after meals to keep the surgical site clean.",
      "Advance your diet gradually, favoring nutrient-rich foods that are easy to chew.",
      "Sleep with your head slightly elevated to reduce swelling and keep incisions protected.",
      "Call us if you notice increasing pain after day three, persistent bleeding, or a foul taste/odor.",
    ],
  },
];

export default function PrePostTipsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Pre & Post Surgery Tips"
        title="Curated guidelines for a smooth recovery"
        description="Print these reminders and keep them handy. Our team will review everything in person, but it’s helpful to revisit them as you prepare."
      />

      <div className="mt-12 space-y-8">
        {sections.map((section) => (
          <article
            key={section.label}
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md"
          >
            <h2 className="text-2xl font-semibold">{section.label}</h2>
            <ul className="mt-5 grid gap-3 text-sm text-[var(--foreground)]">
              {section.items.map((tip) => (
                <li
                  key={tip}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 shadow-sm"
                >
                  {tip}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Ready for Your Procedure
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Questions before your surgery?
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          Our surgical coordinators are available to review pre-op instructions, answer recovery questions, and ensure you feel fully prepared for your procedure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:15617900206"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Call (561) 790-0206
          </a>
          <Link
            href="/resources/faq"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            View FAQ
          </Link>
        </div>
      </section>
    </>
  );
}

