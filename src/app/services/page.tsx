import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";
import { services as serviceDetails } from "@/data/services";

export const metadata = {
  title: "Oral Surgery Services",
  description:
    "Comprehensive oral surgery services including dental implants, wisdom teeth removal, bone grafting, IV sedation, and full-arch reconstruction in Wellington, FL.",
};

const serviceHighlights = serviceDetails.map((service) => ({
  title: service.name,
  summary: service.summary,
  href: `/services/${service.slug}`,
}));

export default function ServicesPage() {
  return (
    <Container className="py-8">
      <PageIntro
        eyebrow="Services"
        title="Surgical precision for every need"
        description="From life-changing implant dentistry to strategic bone preservation, every procedure is crafted with digital planning, regenerative biologics, and meticulous follow-up."
      />

      <section className="mt-16">
        <div className="grid gap-4 md:grid-cols-2">
          {serviceHighlights.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-white/80 p-6 shadow-card transition hover:border-[var(--accent)] hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  {service.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--accent)] transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="text-sm text-[var(--muted)]">{service.summary}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Explore treatment
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Not Sure Where to Start?
          </p>
          <h2 className="mt-4 font-serif text-3xl">We're here to guide you</h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Every patient is unique. Schedule a consultation to discuss your specific needs and discover which treatment is right for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Request Consultation
            </Link>
            <Link
              href="tel:15617900206"
              className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Call (561) 790-0206
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

