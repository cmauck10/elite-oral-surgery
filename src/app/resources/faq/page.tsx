"use client";

import { PageIntro } from "@/components/PageIntro";
import { useState } from "react";
import { faqs, getCategories, filterFAQs } from "@/data/faqs";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...getCategories()];

  // Filter FAQs based on search query and category
  const filteredFAQs = filterFAQs(searchQuery, selectedCategory);

  // Helper function to render answer with proper links
  const renderAnswer = (answer: string | React.ReactNode) => {
    if (typeof answer === "string") {
      // Check if answer contains link references
      if (answer.includes("/resources/insurance")) {
        const parts = answer.split("Participating Insurances page at /resources/insurance");
        return (
          <>
            {parts[0]}
            <a
              href="/resources/insurance"
              className="text-[var(--accent)] hover:text-[var(--accent-dark)]"
            >
              Participating Insurances page
            </a>
            {parts[1]}
          </>
        );
      }
      if (answer.includes("/resources/financing")) {
        const beforeLink = answer.substring(0, answer.indexOf("Financing page at"));
        const afterLink = answer.substring(answer.indexOf("/resources/financing") + 20);
        return (
          <>
            {beforeLink}
            <a
              href="/resources/financing"
              className="text-[var(--accent)] hover:text-[var(--accent-dark)]"
            >
              Financing page
            </a>
            {afterLink}
          </>
        );
      }
      return answer;
    }
    return answer;
  };

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
            placeholder="Search questions and answers..."
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
              <div className="mt-3 ml-0 pl-0 text-sm leading-relaxed text-[var(--muted)]">
                {renderAnswer(faq.answer)}
              </div>
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
