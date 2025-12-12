import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "About Elite Oral Surgery of Wellington",
  description:
    "Discover our state-of-the-art facility, advanced technology, and concierge-level care approach that sets Elite Oral Surgery of Wellington apart.",
};

export default function AboutPage() {
  return (
    <Container className="py-8">
      <PageIntro
        eyebrow="About Us"
        title="Elite Oral Surgery of Wellington"
        description="A sanctuary for elevated oral surgery experiences, where precision meets compassion."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:grid-cols-2 lg:p-12">
        <div className="relative aspect-[4/3] max-h-[400px] overflow-hidden rounded-[28px]">
          <Image
            src="/team/team.jpg"
            alt="The Elite Oral Surgery team"
            fill
            className="object-cover"
            loading="lazy"
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
                "From your first phone call to your final follow-up appointment, you'll feel the difference a dedicated, compassionate team makes. We treat our patients as we would our family.",
            },
            {
              title: "Surgical Excellence",
              description:
                "Board-certification, modern surgical techniques, rigorous safety standards, and continued education ensure our procedures are precise, safe, and predictable.",
            },
            {
              title: "Outcome-Driven Care",
              description:
                "We start with the end in mind. In coordination with your dentist, we tailor your treatment for your desired prosthetic result.",
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

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            The Elite Difference
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight">
            Redefining the oral surgery experience
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            We recognize that oral surgery can feel overwhelming. That's why we've built a practice
            that anticipates your needs before you voice them. Our concierge approach includes
            pre-visit communication, same-day imaging and treatment planning, multiple anesthesia
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
            "Relentless focus on patient comfort and predictable outcomes",
            "High-resoluton, 3D CBCT digital imaging technology for accurate diagnosis and treatment planning",
            "Over a decade of experience in advanced surgical techniques and patient care",
            "Same-day emergency availability for urgent cases",
            "Multiple sedation options including IV sedation, oral sedation, local anesthesia, and nitrous oxide",
            "Private recovery suite with post-sedation monitoring",
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
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
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
    </Container>
  );
}

