import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { Container, Card, Section } from "@/components/ui";

export const metadata = {
  title: "Our History",
  description:
    "For over three decades, Elite Oral Surgery of Wellington has been a cornerstone of exceptional oral and maxillofacial surgery in Palm Beach County.",
};

export default function OurHistoryPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Our Story"
        title="Three decades of surgical excellence in Wellington"
        description="A legacy of compassionate care, clinical mastery, and unwavering commitment to patient wellbeing."
      />

      <div className="mt-16 space-y-8">
        {/* Foundation */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <div className="grid lg:grid-cols-[375px_1fr] gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[15/16] w-full max-w-[375px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/team/michael-mauck.png"
                alt="Dr. Michael G. Mauck"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div>
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
                Founded in 1995 by <Link href="/about/dr-michael-mauck" className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition">Dr. Michael G. Mauck</Link> as the Wellington Centre for Oral and Maxillofacial Surgery, our practice began in the professional building at Wellington Regional Hospital. From the start, we earned a reputation for clinical excellence, a welcoming atmosphere, and built deep ties to the Wellington community.
              </p>
            </div>
          </div>
        </section>

        {/* Expansion */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <div className="grid lg:grid-cols-[375px_1fr] gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[15/16] w-full max-w-[375px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/office/exterior.jpg"
                alt="State-of-the-Art Facility - 2005"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
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
            </div>
          </div>
        </section>

        {/* New Chapter */}
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <div className="grid lg:grid-cols-[375px_1fr] gap-8 items-start">
            {/* Image */}
            <div className="relative aspect-[15/16] w-full max-w-[375px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/team/dr-london-and-chris.jpg"
                alt="Dr. Michael London and Chris Mauck"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl font-serif text-[var(--accent)]">2025</div>
                <div className="h-px flex-1 bg-[var(--border)]"></div>
              </div>
              <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
                The Next Chapter
              </h2>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                With Dr. Mauck's retirement from surgical operations, we mark the start of the next chapter for our team and our patients. Reopening in August 2025 as <span className="font-semibold text-[var(--foreground)]">Elite Oral Surgery of Wellington</span>, our practice will now be led by <Link href="/about/dr-michael-london" className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition">Dr. Michael London</Link>, a board-certified, experienced oral and maxillofacial surgeon.
              </p>
              <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
                Joining Dr. London is <span className="font-semibold text-[var(--foreground)]">Chris Mauck</span>, Dr. Mauck's son, who steps into the role of Office Director. Together, they are dedicated to honoring Dr. Mauck's legacy while elevating care with cutting-edge techniques, advanced technology, and an unwavering focus on patient comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="font-serif text-3xl text-center mb-10">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Patient-First Philosophy",
                description:
                  "From your first phone call to your final follow-up appointment, you'll feel the difference a dedicated, compassionate team makes. We treat our patients as we would want our family members to be treated.",
              },
              {
                title: "Surgical Excellence",
                description:
                  "Board-certified oral and maxillofacial surgeon, evidence-based protocols, and continuous education keep our outcomes at the forefront of the field.",
              },
              {
                title: "Outcome-Driven Care",
                description:
                  "From pre-op consultations to post-op calls, every interaction is designed to ease worry and ensure your expectations are met.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="rounded-[28px] border border-[var(--border)] bg-white/90 p-6 shadow-card"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12 text-center">
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
    </Container>
  );
}

