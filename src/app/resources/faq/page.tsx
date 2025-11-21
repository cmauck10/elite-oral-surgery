import { PageIntro } from "@/components/PageIntro";

const faqs = [
  {
    question: "Do I need a referral from my dentist?",
    answer:
      "Referrals are appreciated but not required. Many patients come directly to us for implants, wisdom teeth, or trauma care. We’ll collaborate with your dentist once treatment begins.",
  },
  {
    question: "What insurances do you accept?",
    answer: (
      <>
        Please view our{" "}
        <a
          href="/resources/insurance"
          className="text-[var(--accent)] hover:text-[var(--accent-dark)]"
        >
          Participating Insurances
        </a>{" "}
        page for more information.
      </>
    ),
  },
  {
    question: "What type of anesthesia do you offer?",
    answer:
      "We provide oral sedation, IV sedation, nitrous oxide, and local anesthesia. Your medical history, anxiety level, and procedure complexity help us tailor the safest option.",
  },
  {
    question: "How long is the typical recovery?",
    answer:
      "Most patients return to normal routines within 2–3 days for wisdom teeth or extractions, while implants and bone grafting may require 5–7 days of modified activity. Orthognathic or full-arch cases may require weeks to months of downtime.",
  },
  {
    question: "Will I need someone to drive me home?",
    answer:
      "Yes. If you receive oral sedation, IV sedation, a licensed adult must stay in the office during your procedure and escort you home after your procedure.",
  },
]; 

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Answers to common questions"
        description="If you don't see your question here, call our office at (561) 790-0206."
      />

      <div className="mt-12 space-y-6">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-[28px] border border-[var(--border)] bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
          >
            <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-[var(--foreground)]">
              {faq.question}
              <span className="ml-4 text-[var(--accent)] transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</p>
          </details>
        ))}
      </div>
    </>
  );
}

