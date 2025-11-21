"use client";

import { PageIntro } from "@/components/PageIntro";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string | React.ReactNode;
  category: string;
};

const faqs: FAQ[] = [
  // General
  {
    category: "General",
    question: "Do I need a referral from my dentist?",
    answer:
      "Referrals are appreciated but not required. Many patients come directly to us for implants, wisdom teeth, or trauma care. We'll collaborate with your dentist once treatment begins.",
  },
  {
    category: "General",
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
    category: "General",
    question: "What are your office hours?",
    answer:
      "We are open Monday through Friday, 8:00 AM to 5:00 PM. Emergency appointments are available for urgent cases. Please call (561) 790-0206 to schedule.",
  },
  {
    category: "General",
    question: "Do you offer payment plans?",
    answer: (
      <>
        Yes! We partner with Cherry and CareCredit to offer flexible financing options. Visit our{" "}
        <a
          href="/resources/financing"
          className="text-[var(--accent)] hover:text-[var(--accent-dark)]"
        >
          Financing page
        </a>{" "}
        for more details.
      </>
    ),
  },

  // Anesthesia & Sedation
  {
    category: "Anesthesia & Sedation",
    question: "What type of anesthesia do you offer?",
    answer:
      "We provide oral sedation, IV sedation, nitrous oxide, and local anesthesia. Your medical history, anxiety level, and procedure complexity help us tailor the safest option.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Will I need someone to drive me home?",
    answer:
      "Yes. If you receive oral sedation or IV sedation, a licensed adult must stay in the office during your procedure and escort you home afterward.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Is IV sedation safe?",
    answer:
      "Yes. Dr. London is trained and certified in IV sedation. We monitor vital signs continuously throughout your procedure to ensure your safety and comfort.",
  },
  {
    category: "Anesthesia & Sedation",
    question: "Will I be asleep during surgery?",
    answer:
      "With IV sedation, you'll be in a deeply relaxed state and likely won't remember the procedure. With local anesthesia alone, you'll be awake but numb in the treatment area.",
  },

  // Recovery & Aftercare
  {
    category: "Recovery & Aftercare",
    question: "How long is the typical recovery?",
    answer:
      "Most patients return to normal routines within 2–3 days for wisdom teeth or extractions, while implants and bone grafting may require 5–7 days of modified activity. Orthognathic or full-arch cases may require weeks to months of downtime.",
  },
  {
    category: "Recovery & Aftercare",
    question: "What can I eat after surgery?",
    answer:
      "Stick to soft foods for the first few days—smoothies, yogurt, mashed potatoes, scrambled eggs. Avoid hot, spicy, crunchy, or chewy foods until your surgeon approves.",
  },
  {
    category: "Recovery & Aftercare",
    question: "How do I manage pain after surgery?",
    answer:
      "We'll prescribe pain medication and provide detailed aftercare instructions. Most patients find over-the-counter pain relievers sufficient after the first 1-2 days.",
  },
  {
    category: "Recovery & Aftercare",
    question: "When can I return to work or school?",
    answer:
      "Most patients take 2-3 days off for wisdom teeth removal or extractions. More complex procedures may require 5-7 days. We'll provide a personalized timeline based on your procedure.",
  },

  // Dental Implants
  {
    category: "Dental Implants",
    question: "How long do dental implants last?",
    answer:
      "With proper care, dental implants can last 25+ years or even a lifetime. Regular dental hygiene and checkups are essential for long-term success.",
  },
  {
    category: "Dental Implants",
    question: "Am I a candidate for dental implants?",
    answer:
      "Most adults with adequate bone density are candidates. We'll evaluate your jaw structure, medical history, and oral health during your consultation.",
  },
  {
    category: "Dental Implants",
    question: "What is the success rate of dental implants?",
    answer:
      "Dental implants have a 95-98% success rate when placed by an experienced oral surgeon and properly maintained by the patient.",
  },
  {
    category: "Dental Implants",
    question: "How long does the implant process take?",
    answer:
      "The entire process typically takes 3-6 months. This includes initial placement, healing time for osseointegration, and final crown placement. Some cases may qualify for same-day teeth.",
  },

  // Wisdom Teeth
  {
    category: "Wisdom Teeth",
    question: "When should wisdom teeth be removed?",
    answer:
      "Ideally between ages 17-25 when roots are not fully formed. However, they can be removed at any age if causing pain, infection, crowding, or other problems.",
  },
  {
    category: "Wisdom Teeth",
    question: "Do all wisdom teeth need to be removed?",
    answer:
      "Not necessarily. If they're healthy, fully erupted, properly positioned, and can be cleaned daily, they may not need removal. We'll assess your specific situation.",
  },
  {
    category: "Wisdom Teeth",
    question: "Will my face swell after wisdom teeth removal?",
    answer:
      "Some swelling is normal and peaks around day 2-3. Ice packs, prescribed medications, and keeping your head elevated help minimize swelling.",
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  // Filter FAQs based on search query and category
  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (typeof faq.answer === "string" && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="Answers to common questions"
        description="If you don't see your question here, call our office at (561) 790-0206."
      />

      {/* Search Bar */}
      <div className="mt-6 rounded-2xl border border-[var(--border)] bg-white/90 p-3 shadow-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2 pl-10 text-sm outline-none focus:border-[var(--accent)]"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Category Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              selectedCategory === category
                ? "bg-[var(--accent)] text-white"
                : "bg-white border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      {(searchQuery || selectedCategory !== "All") && (
        <p className="mt-3 text-xs text-[var(--muted)]">
          Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? "result" : "results"}
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      )}

      {/* FAQ List */}
      <div className="mt-4 space-y-3">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <details
              key={`${faq.category}-${index}`}
              className="group rounded-2xl border border-[var(--border)] bg-white/90 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left">
                <div className="flex items-center gap-3 flex-1">
                  <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--accent)]">
                    {faq.category}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {faq.question}
                  </h3>
                </div>
                <span className="ml-4 text-xl text-[var(--accent)] transition group-open:rotate-45 flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="mt-3 ml-0 pl-0 text-sm leading-relaxed text-[var(--muted)]">{faq.answer}</div>
            </details>
          ))
        ) : (
          <div className="rounded-2xl border border-[var(--border)] bg-white/90 p-8 text-center shadow-sm">
            <p className="text-base text-[var(--muted)]">No questions found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Still Have Questions?
        </p>
        <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)]">
          We're Here to Help
        </h2>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Our team is happy to answer any questions you may have about your treatment.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="tel:15617900206"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Call (561) 790-0206
          </a>
          <a
            href="/appointment"
            className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
          >
            Request Appointment
          </a>
        </div>
      </div>
    </>
  );
}
