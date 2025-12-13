import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { Container } from "@/components/ui";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service | Elite Oral Surgery of Wellington",
    };
  }

  return {
    title: `${service.name} | Elite Oral Surgery of Wellington`,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://eliteoralsurgery.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | Elite Oral Surgery of Wellington`,
      description: service.seoDescription,
      url: `https://eliteoralsurgery.com/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    console.error("Service not found for slug:", slug);
    notFound();
  }

  const showHighlights = service.showHighlights !== false;

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Container size="md" className="py-6 lg:py-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          <Link href="/" className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/services"
            className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-[var(--accent)]">{service.name}</span>
        </div>

        <section className="mt-10 rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-section lg:p-10">
          {/* Header with Image + Informational Content */}
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">
            <div className="overflow-hidden rounded-[28px] bg-[var(--background)] aspect-[4/3] relative">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  Elite Oral Surgery of Wellington
                </p>
                <h1 className="mt-4 font-serif text-4xl text-[var(--foreground)]">
                  {service.heroTitle}
                </h1>
              </div>
              
              {/* What to Expect */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  What to Expect
                </p>
                <h2 className="mt-3 font-serif text-xl leading-tight text-[var(--foreground)]">
                  {service.whatToExpect.title}
                </h2>
                <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                  {service.whatToExpect.paragraphs.map((p, idx) => (
                    <p key={idx}>
                      {slug === "biopsy-pathology" && p.includes("UF Health Oral Pathology Lab") ? (
                        <>
                          {p.split("UF Health Oral Pathology Lab")[0]}
                          <a 
                            href="https://ufhealth.org/specialties/oral-and-maxillofacial-pathology" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[var(--accent)] hover:underline"
                          >
                            UF Health Oral Pathology Lab
                          </a>
                          {p.split("UF Health Oral Pathology Lab")[1]}
                        </>
                      ) : p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Ideal Candidates */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  Ideal Candidates
                </p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                  {service.idealCandidates.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-3 text-[var(--accent)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Treatment Highlights */}
          {showHighlights && (
            <div className="mt-10 pt-10 border-t border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Treatment Highlights
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-[var(--foreground)] sm:grid-cols-2 lg:grid-cols-4">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-2xl border border-[var(--border)] bg-white/80 px-4 py-3 font-medium"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-[var(--border)]">
            {service.ctaText && (
              <p className="text-lg font-semibold text-[var(--foreground)] mb-4">
                {service.ctaText}
              </p>
            )}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
              >
                Request an Appointment
              </Link>
              <a
                href="tel:15617900206"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)]"
              >
                Call (561) 790-0206
              </a>
            </div>
          </div>
        </section>

        <div className="mt-12 rounded-[24px] border border-dashed border-[var(--border)] bg-white/70 p-6 text-sm text-[var(--muted)]">
          Looking for another treatment? Explore{" "}
          <Link href="/services" className="font-semibold text-[var(--accent)]">
            all services
          </Link>{" "}
          or reach out to our concierge team for a custom plan.
        </div>
      </Container>
    </div>
  );
}
