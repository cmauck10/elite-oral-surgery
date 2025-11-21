"use client";

import Image from "next/image";
import Link from "next/link";
import { services as serviceDetails } from "@/data/services";
import { testimonials as allTestimonials } from "@/data/testimonials";
import { GoogleReviewsCarousel } from "@/components/GoogleReviewsCarousel";

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
    label: "Treatment Planning",
  },
  {
    src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
    label: "Operating Room",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    label: "Recovery Suite",
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
    title: "Participating Insurances",
    copy:
      "We accept most major dental insurance plans and help maximize your benefits.",
    href: "/resources/insurance",
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

// Use first 3 testimonials for homepage case studies
const caseStudies = allTestimonials.slice(0, 3);

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

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-5 lg:px-8 lg:pb-32">
        <section id="home" className="pt-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] bg-[#1f1f1f] text-white shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
            >
              <source
                src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f1f1f]/90 via-[#4b4b4b]/80 to-[#ff8200]/30" />
            <div className="relative z-10 flex h-full flex-col justify-between p-10 sm:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                The Elite Difference
              </p>
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-5xl">
                  Extraordinary Oral Surgery Experience in Wellington, Florida
                </h1>
                <p className="mt-6 max-w-xl text-lg text-white/80">
                  Led by <span className="font-semibold">Dr. Michael London, </span> we fuse surgical mastery,
                  state-of-the-art technology, and concierge-level hospitality for every patient.
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
                <Link
                  href="/about/our-history"
                  aria-label="Learn about our history"
                  className="group relative flex flex-col text-left transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <span className="pointer-events-none absolute inset-[-10px] rounded-3xl border border-white/25 bg-white/8 opacity-0 transition duration-200 group-hover:opacity-100" />
                  <p className="mt-1 text-3xl font-semibold text-white">25+</p>
                  <p className="text-base text-white">Years of Experience</p>
                </Link>
                <Link
                  href="/about/dr-michael-london"
                  aria-label="Learn about our board-certified surgeons"
                  className="group relative flex flex-col text-left transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  <span className="pointer-events-none absolute inset-[-10px] rounded-3xl border border-white/25 bg-white/8 opacity-0 transition duration-200 group-hover:opacity-100" />
                  <p className="mt-1 text-3xl font-semibold text-white">ABOMS</p>
                  <p className="text-base text-white">Board-Certified</p>
                </Link>
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
              src="/michael_london.jpeg"
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
              Precision, expertise, and a patient-first philosophy
            </h2>
            <p className="text-lg text-[var(--muted)]">
              Dr. London is a board-certified oral and maxillofacial surgeon with over 10 years of experience. A McGill University graduate who completed his specialty training at Emory University, he specializes in complex full-arch implant reconstructions, advanced bone grafting, and comprehensive oral surgery care.
            </p>
            <ul className="grid gap-4 text-sm text-[var(--foreground)] sm:grid-cols-2">
              {[
                "Diplomate, American Board of Oral & Maxillofacial Surgery",
                "All-on-X Full-Arch implant pioneer",
                "Certified in IV conscious sedation",
                "Advanced training in bone grafting and sinus augmentation",
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
              Every touchpoint—scheduling, consultation, treatment planning, surgery, and recovery—was designed with patient safety, expectations, and outcomes in mind. From 3D imaging to platelet-rich fibrin, your treatment plan is as advanced as it is
              personalized to meet your unique needs.
            </p>
            <div className="grid gap-4 text-sm text-[var(--foreground)]">
              {[
                "Welcoming reception area with comfortable seating, natural light, and snacks",
                "Private consultation room for no-pressure conversations about your treatment plan",
                "ASC accredited operating room with state-of-the-art technology",
                "Peaceful recovery suite with post-sedation monitoring ",
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
                Surgical precision for every need
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

        <section id="case-studies" className="mt-24" aria-labelledby="case-studies-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Case Studies
              </p>
              <h2 id="case-studies-heading" className="mt-2 font-serif text-4xl">
                Real patients, real transformations
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end sm:max-w-lg">
              <p className="text-sm text-[var(--muted)]">
                In-depth stories from patients who experienced life-changing surgical outcomes at Elite Oral Surgery.
              </p>
              <Link
                href="/testimonials"
                className="text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
              >
                View all case studies →
              </Link>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((caseStudy) => (
              <article
                key={caseStudy.name}
                className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
                    <Image
                      src={caseStudy.photo}
                      alt={caseStudy.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">{caseStudy.name}</p>
                    <p className="text-xs text-[var(--muted)]">{caseStudy.procedure}</p>
                  </div>
                </div>
                <blockquote className="text-sm leading-relaxed text-[var(--foreground)]">
                  "{caseStudy.quote}"
                </blockquote>
              </article>
            ))}
          </div>
        </section>

        {/* Google Reviews Section */}
        <section id="google-reviews" className="mt-24" aria-labelledby="google-reviews-heading">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Google Reviews
              </p>
              <h2 id="google-reviews-heading" className="mt-2 font-serif text-4xl">
                Patients describe the Elite feeling
              </h2>
            </div>
            <div className="flex flex-col items-start gap-3 sm:items-end sm:max-w-lg">
              <p className="text-sm text-[var(--muted)]">
                Verified reviews from real patients who experienced exceptional care at Elite Oral Surgery.
              </p>
              <Link
                href="https://maps.app.goo.gl/a4ZB9kYLWWRHBZDZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
              >
                Read all reviews on Google →
              </Link>
            </div>
          </div>
          <GoogleReviewsCarousel />
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

        <section className="mt-24 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-[0_35px_90px_rgba(75,75,75,0.2)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                Appointment Request
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[var(--foreground)]">
                Ready for concierge-level oral surgery care?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                Our concierge team will coordinate your appointment and ensure you have a pleasent, safe, and no-pressure experience.
              </p>
            </div>
            <div className="space-y-4 rounded-[28px] border border-[var(--border)] bg-white/70 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Call</p>
                <a
                  href="tel:15617900206"
                  className="text-2xl font-semibold text-[var(--foreground)] transition hover:text-[var(--accent)]"
                >
                  (561) 790-0206
                </a>
              </div>
              <div className="flex items-center justify-between text-[var(--muted)]">
                <span className="text-sm uppercase tracking-[0.2em]">Fax</span>
                <span className="text-lg font-semibold text-[var(--foreground)]">(561) 795-5445</span>
              </div>
              <div className="border-t border-[var(--border)] pt-3 text-sm text-[var(--muted)]">
                <p className="uppercase tracking-[0.2em]">Hours</p>
                <p>Mon–Thu · 8:00a – 5:00p</p>
                <p>Fri · 7:30a – 1:30p</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Email</p>
                <a href="mailto:office@eoswellington.com" className="text-lg text-[var(--foreground)] transition hover:text-[var(--accent)]">
                  office@eoswellington.com
                </a>
        </div>
              <Link
                href="/appointment"
                className="inline-flex w-full justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
              >
                Appointment Request
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
