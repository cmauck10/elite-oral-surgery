import { PageIntro } from "@/components/PageIntro";

const sections = [
  {
    label: "Before Your Procedure",
    items: [
      "Confirm fasting instructions if you’re receiving IV sedation or general anesthesia.",
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
            className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
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
    </>
  );
}

