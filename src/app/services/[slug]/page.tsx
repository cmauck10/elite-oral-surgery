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

// Service-specific informational content
const serviceInfo: Record<string, {
  whatToExpect: { title: string; paragraphs: string[] };
  idealCandidates: { title: string; items: string[] };
}> = {
  implants: {
    whatToExpect: {
      title: "Your Dental Implant Journey",
      paragraphs: [
        "Dental implants are titanium posts surgically placed into your jawbone to serve as artificial tooth roots. Once healed, they provide a stable foundation for crowns, bridges, or dentures that look, feel, and function like natural teeth.",
        "The process typically involves an initial consultation with 3D imaging, implant placement surgery, a healing period of at least 3 months for osseointegration, and finally the placement of your custom restoration.",
      ],
    },
    idealCandidates: {
      title: "Are Implants Right for You?",
      items: [
        "Want to confidently bite, chew, and smile again",
        "Missing one or more teeth",
        "Seeking a long-term, permanent solution",
        "Frustration with your removable dentures",
      ],
    },
  },
  "all-on-x": {
    whatToExpect: {
      title: "Your Full-Arch Transformation",
      paragraphs: [
        "All-on-X is a revolutionary technique that replaces an entire arch of teeth using four to six strategically placed implants. ",
        "The process includes comprehensive planning with digital imaging and temporary teeth placement, followed by healing and placement of your final custom prosthesis once the implants are fully integrated.",
      ],
    },
    idealCandidates: {
      title: "Is All-on-X Right for You?",
      items: [
        "Missing all or most teeth in an arch",
        "Tired of loose or uncomfortable dentures",
        "Want a non-removable, permanent solution",
        "Generally non-restorable teeth",
      ],
    },
  },
  "iv-sedation": {
    whatToExpect: {
      title: "Your Comfort Experience",
      paragraphs: [
        "IV sedation delivers medication directly into your bloodstream for a deeply relaxed state during your procedure. You'll remain breathing on your own while feeling calm and comfortable throughout.",
        "Our highly trained team will be by your side to monitor and support you every step of the way, ensuring your comfort and safety. After your procedure, you'll relax in our secluded recovery suite with attentive, personalized care until you're fully ready to head home.",
      ],
    },
    idealCandidates: {
      title: "Is IV Sedation Right for You?",
      items: [
        "Dental anxiety or fear",
        "Undergoing longer or complex procedures",
      ],
    },
  },
  "wisdom-teeth-removal": {
    whatToExpect: {
      title: "Your Wisdom Teeth Journey",
      paragraphs: [
        "Wisdom teeth removal is one of the most common oral surgery procedures. Using 3D imaging, we carefully plan your extraction to minimize discomfort and reduce risk of complications.",
        "Most patients are back to normal activities within a few days. We provide detailed aftercare instructions and are available for any questions during your recovery.",
      ],
    },
    idealCandidates: {
      title: "When Should Wisdom Teeth Be Removed?",
      items: [
        "Impacted or partially erupted wisdom teeth",
        "Pain, swelling, or infection",
        "Crowding or damage to adjacent teeth",
        "Recommended by your dentist or orthodontist",
      ],
    },
  },
  "tooth-extractions": {
    whatToExpect: {
      title: "Your Extraction Experience",
      paragraphs: [
        "Whether due to decay, abcess, fracture, or orthodontic needs, we use gentle, atraumatic techniques to preserve bone and surrounding tissue for optimal healing.",
        "Bone grafting at time of extraction is available when needed to preserve the site for future implant placement. Multiple anesthesia options ensure your comfort throughout.",
      ],
    },
    idealCandidates: {
      title: "When Is Extraction Necessary?",
      items: [
        "Severe decay beyond repair",
        "Fractured or broken teeth",
        "Advanced periodontal disease",
        "Preparation for orthodontics or dentures",
      ],
    },
  },
  "bone-grafting": {
    whatToExpect: {
      title: "Your Bone Regeneration Journey",
      paragraphs: [
        "Bone grafting restores lost jawbone volume using advanced biomaterials, growth factors, and tissue handling techniques. This creates a solid foundation for dental implants.",
        "Healing of bone grafting typically takes 6 months as your body integrates the graft material. We monitor your progress throughout your journey to ensure optimal results.",
      ],
    },
    idealCandidates: {
      title: "Who Needs Bone Grafting?",
      items: [
        "Insufficient bone for dental implants",
        "Sinus augmentation needed for upper implants",
      ],
    },
  },
  "biopsy-pathology": {
    whatToExpect: {
      title: "Your Diagnostic Journey",
      paragraphs: [
        "Our team performs thorough oral examinations and precise biopsies when needed to diagnose a wide range of conditions. Tissue samples are analyzed in parternship with UF Health Oral Pathology Lab.",
        "Results typically return within 3 weeks. We'll discuss findings with you and coordinate any necessary follow-up care with other specialists.",
      ],
    },
    idealCandidates: {
      title: "When Is a Biopsy Needed?",
      items: [
        "Unexplained oral lesions or growths",
        "Persistent sores that don't heal",
        "Abnormal tissue changes",
        "Screening for oral cancer",
      ],
    },
  },
  "emergency-care": {
    whatToExpect: {
      title: "Your Emergency Visit",
      paragraphs: [
        "Dental emergencies require prompt attention. Our team is equipped to handle facial trauma, severe infections, uncontrolled bleeding, and other urgent situations.",
        "We coordinate with emergency rooms and your dental team to stabilize injuries while planning for long-term restoration and recovery.",
      ],
    },
    idealCandidates: {
      title: "What Constitutes an Emergency?",
      items: [
        "Knocked out or broken teeth from facial trauma",
        "Severe facial swelling or infection",
        "Facial fractures",
        "Jaw dislocations",
      ],
    },
  },
  "orthognathic-surgery": {
    whatToExpect: {
      title: "Your Jaw Surgery Journey",
      paragraphs: [
        "Orthognathic surgery corrects jaw alignment issues affecting your bite, breathing, and facial aesthetics. We use virtual surgical planning for precise, predictable results in coordination with your orthodontist.",
        "We make recovery tolerable with Enhanced Recovery After Surgery (ERAS) protocols and personalized post-operative care.",
      ],
    },
    idealCandidates: {
      title: "Is Jaw Surgery Right for You?",
      items: [
        "Significant bite misalignment",
        "Sleep apnea related to jaw position",
        "Facial asymmetry",
      ],
    },
  },
  "tmj-facial-pain": {
    whatToExpect: {
      title: "Your TMJ Treatment Journey",
      paragraphs: [
        "We begin with comprehensive evaluation including a detailed history, imaging, and an evidence-based clinical examination to identify the source of your pain and dysfunction.",
        "Treatment may include conservative non-surgical care, occlusal guards, medications, physical therapy, Botox, or surgical options when indicated.",
      ],
    },
    idealCandidates: {
      title: "Signs You May Have TMJ Disorder",
      items: [
        "Jaw pain with eating, chewing, or speaking",
        "Clicking, popping, or locking of the jaw",
        "Difficulty chewing or opening mouth",
      ],
    },
  },
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

  const info = serviceInfo[slug];

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
              
              {info ? (
                <>
                  {/* What to Expect */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                      What to Expect
                    </p>
                    <h2 className="mt-3 font-serif text-xl leading-tight text-[var(--foreground)]">
                      {info.whatToExpect.title}
                    </h2>
                    <div className="mt-3 space-y-3 text-sm text-[var(--muted)]">
                      {info.whatToExpect.paragraphs.map((p, idx) => (
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
                      {info.idealCandidates.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="mr-3 text-[var(--accent)]">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                /* Fallback for services without custom info */
                <div className="space-y-4 text-sm leading-relaxed text-[var(--muted)]">
                  <p>{service.heroSubtitle}</p>
                  {service.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Treatment Highlights */}
          {slug !== "all-on-x" && (
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
            {slug === "all-on-x" && (
              <p className="text-lg font-semibold text-[var(--foreground)] mb-4">
                Start your smile transformation today
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
