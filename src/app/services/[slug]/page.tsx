import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";

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

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-8 lg:py-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--muted)]">
          <Link href="/" className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/#services"
            className="font-semibold text-[var(--foreground)] hover:text-[var(--accent)]"
          >
            Services
          </Link>
          <span>/</span>
          <span className="text-[var(--accent)]">{service.name}</span>
        </div>

        <section className="mt-10 grid gap-10 rounded-[32px] border border-[var(--border)] bg-white/90 p-6 shadow-[0_30px_90px_rgba(75,75,75,0.12)] lg:grid-cols-[minmax(0,0.95fr)_1.1fr] lg:p-10">
          <div className="overflow-hidden rounded-[28px] bg-[var(--background)]">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              width={720}
              height={900}
              className="h-full w-full object-cover"
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
              <p className="mt-3 text-lg text-[var(--muted)]">{service.heroSubtitle}</p>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-[var(--foreground)]">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Treatment Highlights
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-[var(--foreground)] sm:grid-cols-2">
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
            <div className="flex flex-wrap gap-4 pt-4">
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
          <Link href="/#services" className="font-semibold text-[var(--accent)]">
            all services
          </Link>{" "}
          or reach out to our concierge team for a custom plan.
        </div>
      </div>
    </div>
  );
}

