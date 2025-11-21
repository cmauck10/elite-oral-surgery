import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "About Elite Oral Surgery of Wellington",
  description:
    "Discover our state-of-the-art facility, advanced technology, and concierge-level care approach that sets Elite Oral Surgery of Wellington apart.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <PageIntro
        eyebrow="About Us"
        title="Elite Oral Surgery of Wellington"
        description="A sanctuary for elevated oral surgery experiences, where precision meets compassion."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-2 lg:p-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
            alt="Elite Oral Surgery reception area"
            width={640}
            height={720}
            className="h-full w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Where innovation meets exceptional care
          </h2>
          <p className="text-lg text-[var(--muted)]">
            At Elite Oral Surgery of Wellington, we've reimagined what an oral surgery practice
            can be. Every detail—from our calming interior design to our cutting-edge technology—
            has been thoughtfully curated to reduce anxiety and optimize outcomes.
          </p>
          <p className="text-base text-[var(--muted)]">
            Our practice philosophy centers on three pillars: patient-first philosophy, surgical excellence, and outcome-driven care. We believe that extraordinary results begin with
            trust, and that healing is accelerated when patients feel safe, heard, and valued. Every decision we make is made with the patient's best interests in mind.
          </p>
        </div>
      </section>

      <section className="mt-16">
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
              className="rounded-[28px] border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Our Commitment
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight">
            Redefining the oral surgery experience
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            We recognize that oral surgery can feel overwhelming. That's why we've built a practice
            that anticipates your needs before you voice them. Our concierge approach includes
            pre-visit communication, same-day imaging and treatment planning, multiple sedation
            modalities, and a dedicated recovery suite to monitor you after surgery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about/our-team"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Meet Our Team
            </Link>
            <Link
              href="/about/office-tour"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Take an Office Tour
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">What Sets Us Apart</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Relentless focus on patient safety, comfort, and outcomes",
            "In-house CBCT suite for same-day 3D imaging",
            "Private recovery suite with post-sedation monitoring",
            "Multiple sedation options including IV sedation, local anesthesia, and nitrous oxide",
            "Emergency availability for urgent cases",
            "Collaborative care with your referring dentist or specialist",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-4 text-sm font-medium shadow-sm transition hover:shadow-md"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Experience the Difference
          </p>
          <h2 className="mt-4 font-serif text-3xl">Ready to experience The Elite Difference?</h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Schedule a consultation to discuss your treatment goals and discover how our approach
            can transform your oral surgery experience.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Request an Appointment
            </Link>
            <Link
              href="tel:15617900206"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Call (561) 790-0206
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

