import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Our History",
  description:
    "For over three decades, Elite Oral Surgery of Wellington has been a cornerstone of exceptional oral and maxillofacial surgery in Palm Beach County.",
};

export default function OurHistoryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our Story"
        title="Three decades of surgical excellence in Wellington"
        description="A legacy of compassionate care, clinical mastery, and unwavering commitment to patient wellbeing."
      />

      <div className="mt-12 space-y-8">
        {/* Foundation */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-serif text-[var(--accent)]">1995</div>
            <div className="h-px flex-1 bg-[var(--border)]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            The Foundation
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            For over three decades, Elite Oral Surgery of Wellington has been a cornerstone of exceptional oral and maxillofacial surgery in Palm Beach County.
          </p>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Founded in 1995 by <span className="font-semibold text-[var(--foreground)]">Dr. Michael G. Mauck</span> as the Wellington Centre for Oral and Maxillofacial Surgery, our practice began in the professional building at Wellington Regional Hospital. From the start, we earned a reputation for clinical excellence, a welcoming atmosphere, and built deep ties to the Wellington community.
          </p>
        </section>

        {/* Expansion */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-serif text-[var(--accent)]">2005</div>
            <div className="h-px flex-1 bg-[var(--border)]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            A State-of-the-Art Facility
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            In 2005, Dr. Mauck expanded the practice into a state-of-the-art, custom-built facility just steps from its original location. For nearly 20 years, this center has served patients across South Florida, delivering transformative care under Dr. Mauck's leadership.
          </p>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            His commitment to patient-first values, precision, and compassion became the foundation of our legacy.
          </p>
        </section>

        {/* New Chapter */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-serif text-[var(--accent)]">2025</div>
            <div className="h-px flex-1 bg-[var(--border)]"></div>
          </div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            The Next Chapter
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed">
            With Dr. Mauck's retirement from surgical operations, we mark the start of the next chapter for our team and our patients. Reopening in August 2025 as <span className="font-semibold text-[var(--foreground)]">Elite Oral Surgery of Wellington</span>, our practice will now be led by <span className="font-semibold text-[var(--foreground)]">Dr. Michael London</span>, a board-certified, experienced oral and maxillofacial surgeon.
          </p>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Dr. London is dedicated to honoring Dr. Mauck's legacy while elevating care with cutting-edge techniques, advanced technology, and an unwavering focus on patient comfort.
          </p>
        </section>

        {/* Our Services */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,23,42,0.08)] lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            Comprehensive Oral Surgery Excellence
          </h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            At Elite Oral Surgery of Wellington, we specialize in the full spectrum of oral and maxillofacial procedures, including:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Wisdom teeth removal",
              "Dental implants",
              "Bone grafting",
              "IV sedation",
              "Full mouth implant reconstruction",
              "Pathology",
              "Orthognathic/corrective jaw surgery",
              "Facial trauma",
            ].map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium text-[var(--foreground)] shadow-sm"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="rounded-[32px] bg-gradient-to-br from-[#4b4b4b] to-[#2d2d2d] p-8 lg:p-12 text-white">
          <h2 className="text-2xl font-semibold mb-6">
            Our Values
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-8">
            Our state-of-the-art facility and compassionate team ensure every patient receives personalized, world-class care in a warm, stress-free environment. Proudly serving Wellington, Palm Beach County, and South Florida, we continue to uphold the values that have defined us for over 30 years:
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Surgical Excellence",
                description: "Board-certified expertise and precision in every procedure",
              },
              {
                title: "Genuine Compassion",
                description: "A warm, patient-first approach to care",
              },
              {
                title: "Relentless Commitment",
                description: "Dedicated to our patients' well-being and comfort",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-2xl bg-white/10 backdrop-blur-sm p-6 border border-white/20"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
            Join Our Legacy
          </p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            Experience the Elite Difference
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
            Schedule your consultation today and experience the Elite difference in oral surgery care.
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
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Call (561) 790-0206
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

