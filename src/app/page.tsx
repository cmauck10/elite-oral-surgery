import Image from "next/image";
import Link from "next/link";
import { services as serviceDetails } from "@/data/services";

const serviceHighlights = serviceDetails.map((service) => ({
  title: service.name,
  summary: service.summary,
  href: `/services/${service.slug}`,
}));

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    label: "Reception Lounge",
  },
  {
    src: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=900&q=80",
    label: "Serene Consult Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
    label: "Advanced Op Room",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    label: "Comfort Bar",
  },
];

const resourceCards = [
  {
    title: "Financing",
    copy:
      "Partnered with leading dental lenders to create flexible monthly plans for life-changing care.",
    href: "/resources/financing",
  },
  {
    title: "Patient Forms",
    copy: "Save time in-office with secure online intake, health history, and consent paperwork.",
    href: "/resources/patient-forms",
  },
  {
    title: "Patient Comforts",
    copy:
      "Heated blankets, Bose noise cancelling headphones, aromatherapy, and concierge amenities.",
    href: "/resources/patient-comforts",
  },
  {
    title: "Pre/Post Surgery Tips",
    copy:
      "Step-by-step guides curated by our surgical nurses to make recovery predictable and calm.",
    href: "/resources/pre-post-surgery-tips",
  },
  {
    title: "FAQ",
    copy:
      "Answers to the most common implant, sedation, and recovery questions we hear every day.",
    href: "/resources/faq",
  },
];

const testimonials = [
  {
    quote:
      "Dr. London restored my smile with All-on-X and I finally feel like myself again. The experience was elegant, calm, and unbelievably gentle.",
    name: "Sophia M.",
    detail: "Full-Arch Implant Patient",
  },
  {
    quote:
      "From IV sedation to follow-up calls, the entire team anticipates what you need before you know to ask. Elite truly defines concierge oral surgery.",
    name: "Jackson R.",
    detail: "Trauma & Reconstruction Case",
  },
  {
    quote:
      "Wisdom teeth removal was surprisingly easy. I was relaxing in their comfort suite with herbal tea within an hour.",
    name: "Emily W.",
    detail: "Wisdom Teeth Patient",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Elite Oral Surgery of Wellington",
    url: "https://eliteoralsurgerywellington.com",
    logo: "https://eliteoralsurgerywellington.com/logo.png",
    telephone: "+1-561-790-0206",
    faxNumber: "+1-561-795-5445",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1051 S State Road 7 Suite 1",
      addressLocality: "Wellington",
      addressRegion: "FL",
      postalCode: "33414",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:30",
        closes: "13:30",
      },
    ],
    sameAs: [
      "https://www.instagram.com/eliteoralsurgerywellington/",
      "https://www.facebook.com/profile.php?id=61582791724204",
      "https://www.yelp.com/biz/elite-oral-surgery-wellington",
      "https://maps.app.goo.gl/whBTryReBdbhefcZ9",
    ],
    medicalSpecialty: "OralSurgery",
    founder: {
      "@type": "Person",
      name: "Dr. Michael London",
    },
  };

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <a
        href="/appointment"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--foreground)] shadow-lg"
      >
        Skip to appointment request
      </a>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-10 lg:px-8 lg:pb-32">
        <section id="home" className="pt-6">
          <div className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#1f1f1f] text-white shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1503437313881-503a91226402?auto=format&fit=crop&w=1400&q=80"
            >
              <source
                src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f]/90 via-[#4b4b4b]/80 to-[#ff8200]/30" />
            <div className="relative z-10 flex h-full flex-col justify-between p-10 sm:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                The Elite Difference
              </p>
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                  Extraordinary Oral Surgery Experience in Wellington, Florida
                </h1>
                <p className="mt-6 max-w-xl text-lg text-white/80">
                  Led by <span className="font-semibold">Dr. Michael London</span> and{" "}
                  <span className="font-semibold">Dr. Michael Mauck</span>, we fuse surgical mastery,
                  evidence-based comfort, and concierge-level hospitality for every patient.
                </p>
                <div className="mt-8 mb-10 flex flex-wrap gap-4">
                  <Link
                    href="/appointment"
                    className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#ff8200]/40 transition hover:bg-[var(--accent-dark)]"
                  >
                    Request an Appointment
                  </Link>
                  <Link
                    href="#services"
                    className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                  >
                    Explore Services
                  </Link>
                </div>
        </div>
              <div className="flex flex-wrap gap-8 text-sm text-white/80">
                <Link
                  href="https://maps.app.goo.gl/a4ZB9kYLWWRHBZDZ9"
            target="_blank"
                  rel="noreferrer"
                  aria-label="View our Google Reviews"
                  className="group relative flex flex-col text-left transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <span className="pointer-events-none absolute inset-[-10px] rounded-3xl border border-white/25 bg-white/8 opacity-0 transition duration-200 group-hover:opacity-100" />
                  <p className="mt-1 text-3xl font-semibold text-white">4.8★</p>
                  <p className="text-base text-white">Google Reviews</p>
                </Link>
                <div>
                  <p className="text-3xl font-semibold text-white">10+</p>
                  <p>Years of Experience</p>
                </div>
                <div className="rounded-3xl border border-white/30 bg-white/10 px-4 py-3 text-base font-semibold leading-tight text-white">
                  Board
                  <br />
                  Certified
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="dr-michael-london"
          className="mt-24 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12"
        >
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
            <Image
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80"
              alt="Dr. Michael London smiling in office"
              width={640}
              height={800}
              className="h-full w-full object-cover mix-blend-multiply"
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Meet Dr. Michael London
            </span>
            <h2 className="font-serif text-4xl leading-tight text-[var(--foreground)]">
              Precision, artistry, and a patient-first philosophy
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Dr. London is a board-certified oral and maxillofacial surgeon specializing in dental
              implants, complex reconstruction, facial trauma, and orthognathic surgery. His
              training at Johns Hopkins and University of Florida laid the foundation for a practice
              where innovation and empathy are inseparable.
            </p>
            <ul className="grid gap-4 text-sm text-[var(--foreground)] sm:grid-cols-2">
              {[
                "Diplomate, American Board of Oral & Maxillofacial Surgery",
                "All-on-X Full-Arch implant pioneer",
                "Certified in IV sedation & general anesthesia",
                "Faculty lecturer on digital surgical workflows",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[var(--border)] px-4 py-3 font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
              >
                Schedule with Dr. London
              </Link>
              <Link
                href="#our-team"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)]"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>

        <section
          id="elite-oral-surgery"
          className="mt-24 grid gap-12 lg:grid-cols-2"
          aria-labelledby="elite-office-heading"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Elite Oral Surgery of Wellington
            </p>
            <h2 id="elite-office-heading" className="font-serif text-4xl leading-tight">
              A sanctuary for elevated oral surgery experiences
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Every touchpoint—parking, check-in, sedation, and recovery—was designed to calm the
              nervous system and streamline healing. From CBCT-guided planning to 3D-printed
              surgical guides and platelet-rich fibrin, your treatment plan is as advanced as it is
              personal.
            </p>
            <div className="grid gap-4 text-sm text-[var(--foreground)]">
              {[
                "CBCT suite, digital impressions, and 3D surgical printing in-house",
                "Private recovery lounges with post-sedation monitoring",
                "Dedicated implant lab for same-day provisional smiles",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            id="office-gallery"
            className="grid grid-cols-2 gap-4 md:gap-6"
            aria-label="Office gallery"
          >
            {galleryImages.map((image) => (
              <figure
                key={image.label}
                className="group overflow-hidden rounded-[24px] border border-[var(--border)] bg-white/60 shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.label}
                  width={420}
                  height={520}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <figcaption className="p-4 text-sm font-semibold text-[var(--foreground)]">
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="services" className="mt-24" aria-labelledby="services-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Services
              </p>
              <h2 id="services-heading" className="font-serif text-4xl">
                Surgical artistry for every need
              </h2>
            </div>
            <p className="max-w-xl text-sm text-[var(--muted)]">
              From life-changing implant dentistry to strategic bone preservation, every procedure
              is crafted with digital planning, regenerative biologics, and meticulous follow-up.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {serviceHighlights.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col gap-3 rounded-3xl border border-[var(--border)] bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:border-[var(--accent)] hover:shadow-[0_25px_70px_rgba(75,75,75,0.18)]"
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

        <section
          id="resources"
          className="mt-24 rounded-[32px] bg-white/80 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.07)] lg:p-12"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Resources
            </p>
            <h2 className="mt-2 font-serif text-4xl">Everything you need, before you need it</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resourceCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-3xl border border-[var(--border)] p-6 transition hover:border-[var(--accent)] hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <span className="text-[var(--accent)] transition group-hover:translate-x-1">→</span>
                </div>
                <p className="mt-3 text-sm text-[var(--muted)]">{card.copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="our-team"
          className="mt-24 rounded-[32px] border border-dashed border-[var(--border)] p-8 text-center text-sm text-[var(--muted)]"
        >
          Profiles for Dr. Michael Mauck, our surgical nursing collective, and technology deep dives
          are coming next. This placeholder anchors the navigation while we perfect the copy,
          photography, and virtual tour experience.
        </section>

        <section id="testimonials" className="mt-24" aria-labelledby="testimonials-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Testimonials
              </p>
              <h2 id="testimonials-heading" className="font-serif text-4xl">
                Patients describe the Elite feeling
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[var(--muted)]">
              Heartfelt stories from neighbors who trusted us with implants, sedation, and
              life-changing surgical solutions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col gap-6 rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <p className="text-base text-[var(--foreground)]">“{testimonial.quote}”</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-[var(--muted)]">{testimonial.detail}</p>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-24 rounded-[32px] bg-gradient-to-r from-[#4b4b4b] via-[#383838] to-[#ff8200] p-8 text-white shadow-[0_35px_90px_rgba(75,75,75,0.35)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Appointment Request
              </p>
              <h2 className="mt-4 font-serif text-4xl">
                Ready for concierge-level oral surgery care?
              </h2>
              <p className="mt-4 text-lg text-white/80">
                Call, text, or send a secure message. Our patient concierge will coordinate imaging,
                records transfer, and sedation planning that works for your schedule.
              </p>
            </div>
            <div className="space-y-4 rounded-[28px] bg-white/10 p-6 backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Call or Text</p>
                <a
                  href="tel:15617900206"
                  className="text-2xl font-semibold text-white transition hover:text-[var(--accent)]"
                >
                  (561) 790-0206
                </a>
              </div>
              <div className="flex items-center justify-between text-white/80">
                <span className="text-sm uppercase tracking-[0.2em]">Fax</span>
                <span className="text-lg font-semibold text-white">(561) 795-5445</span>
              </div>
              <div className="border-t border-white/20 pt-3 text-sm text-white/80">
                <p className="uppercase tracking-[0.2em] text-white/60">Hours</p>
                <p>Mon–Thu · 8:00a – 5:00p</p>
                <p>Fri · 7:30a – 1:30p</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Email</p>
                <a href="mailto:office@eoswellington.com" className="text-lg text-white transition hover:text-[var(--accent)]">
                  office@eoswellington.com
                </a>
        </div>
              <Link
                href="/appointment"
                className="inline-flex w-full justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
              >
                Appointment Request Form
              </Link>
            </div>
          </div>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
