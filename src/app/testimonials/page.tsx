import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";
import { testimonials } from "@/data/testimonials";
import { googleReviews } from "@/data/googleReviews";

export const metadata = {
  title: "Patient Testimonials",
  description:
    "Read real stories from patients who have experienced exceptional oral surgery care at Elite Oral Surgery of Wellington.",
};

export default function TestimonialsPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Testimonials"
        title="Real patients, real results"
        description="Hear from neighbors who trusted us with their oral surgery needs and experienced the Elite difference."
      />

      <div className="mt-16 space-y-16">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className="grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1fr)_1.5fr] lg:p-12"
          >
            {/* Photo on left */}
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
              <Image
                src={testimonial.photo}
                alt={`${testimonial.name} - ${testimonial.procedure}`}
                width={400}
                height={500}
                className="h-full w-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Info on right */}
            <div className="flex flex-col justify-center gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  {testimonial.procedure}
                </p>
                <h3 className="mt-2 font-serif text-3xl leading-tight text-[var(--foreground)]">
                  {testimonial.name}
                </h3>
              </div>

              <blockquote className="border-l-4 border-[var(--accent)] pl-6">
                <p className="text-xl italic leading-relaxed text-[var(--foreground)]">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="rounded-[24px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)] mb-3">
                  Case Summary
                </h4>
                <p className="text-base leading-relaxed text-[var(--muted)]">
                  {testimonial.caseDescription}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Google Reviews Section */}
      <section className="mt-24" aria-labelledby="google-reviews-heading">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Google Reviews
            </p>
            <h2 id="google-reviews-heading" className="mt-2 font-serif text-4xl">
              Verified patient experiences
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 sm:items-end sm:max-w-lg">
            <p className="text-sm text-[var(--muted)]">
              Real reviews from patients who trusted us with their care. See what others are saying about their experience at Elite Oral Surgery.
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
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-[#fbbc04]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed text-[var(--foreground)]">
                {review.text}
              </p>

              {/* Reviewer Info */}
              <div className="mt-auto border-t border-[var(--border)] pt-4">
                <p className="font-semibold text-[var(--foreground)]">{review.name}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-[0_35px_90px_rgba(75,75,75,0.2)] lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Ready to Experience Elite Care?
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Join our family of satisfied patients
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          Schedule your consultation today and discover why patients choose Elite Oral Surgery for their surgical needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Request Appointment
          </Link>
          <a
            href="tel:15617900206"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Call (561) 790-0206
          </a>
        </div>
      </section>
    </Container>
  );
}

