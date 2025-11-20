import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Office Tour - Elite Oral Surgery",
  description:
    "Take a virtual tour of our state-of-the-art facility featuring private recovery suites, advanced technology, and comfort-focused design.",
};

export default function OfficeTourPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
      title: "Reception Lounge",
      description: "Warm, inviting space with comfortable seating and natural light.",
    },
    {
      src: "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=900&q=80",
      title: "Consultation Suite",
      description: "Private rooms for unhurried conversations about your treatment plan.",
    },
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
      title: "Advanced Operating Room",
      description: "State-of-the-art surgical theater with CBCT imaging and digital monitors.",
    },
    {
      src: "https://images.unsplash.com/photo-1631248055644-c9795f95b45c?auto=format&fit=crop&w=900&q=80",
      title: "Recovery Suite",
      description: "Private post-sedation rooms with monitoring equipment and comfort amenities.",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      title: "Comfort Bar",
      description: "Herbal tea, aromatherapy, and relaxation zones for pre- and post-operative care.",
    },
    {
      src: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
      title: "CBCT Imaging Suite",
      description: "In-house 3D cone beam CT for same-day diagnosis and surgical planning.",
    },
    {
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
      title: "Sterile Processing Area",
      description: "Hospital-grade sterilization protocols ensure safety at every step.",
    },
    {
      src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80",
      title: "Team Collaboration Hub",
      description: "Where surgeons, nurses, and coordinators plan your personalized care journey.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <PageIntro
        eyebrow="Office Tour"
        title="Welcome to Our Sanctuary"
        description="Step inside a practice designed to calm the nervous system, elevate the senses, and optimize healing."
      />

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Every detail, intentionally designed
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            From the moment you enter our Wellington office, you'll notice the difference. Soft
            lighting, natural materials, and thoughtful acoustics create an atmosphere of calm.
            Our private treatment and recovery areas ensure your experience is both dignified and
            comfortable.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Explore Our Facility</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="group overflow-hidden rounded-[28px] border border-[var(--border)] bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{image.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] text-center">
            Amenities & Features
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-center">
            Comfort and technology in harmony
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Private recovery suites with monitoring",
              "Bose noise-cancelling headphones",
              "Heated blankets and aromatherapy",
              "In-house CBCT 3D imaging",
              "Digital impression scanning",
              "3D surgical guide printing",
              "Dedicated implant laboratory",
              "Complimentary WiFi throughout",
              "Premium coffee and herbal tea bar",
              "Convenient parking and accessibility",
              "Secure medical records portal",
              "Text and email appointment reminders",
            ].map((amenity) => (
              <div
                key={amenity}
                className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-sm font-medium text-center shadow-sm"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Location & Hours
            </p>
            <h3 className="mt-4 font-serif text-2xl">Visit us in Wellington</h3>
            <div className="mt-6 space-y-4 text-base text-[var(--muted)]">
              <div>
                <p className="font-semibold text-[var(--foreground)]">Address</p>
                <p>1051 S State Road 7, Suite 1</p>
                <p>Wellington, FL 33414</p>
              </div>
              <div>
                <p className="font-semibold text-[var(--foreground)]">Phone</p>
                <a
                  href="tel:15617900206"
                  className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition"
                >
                  (561) 790-0206
                </a>
              </div>
              <div>
                <p className="font-semibold text-[var(--foreground)]">Hours</p>
                <p>Monday – Thursday: 8:00 AM – 5:00 PM</p>
                <p>Friday: 7:30 AM – 1:30 PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="https://maps.app.goo.gl/a4ZB9kYLWWRHBZDZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
              >
                Get directions
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Accessibility
            </p>
            <h3 className="mt-4 font-serif text-2xl">Designed for everyone</h3>
            <ul className="mt-6 space-y-3 text-base text-[var(--muted)]">
              {[
                "Wheelchair-accessible entrance and parking",
                "Elevator access to all treatment floors",
                "ADA-compliant restrooms",
                "Assistive listening devices available",
                "Large-print and digital forms",
                "Spanish and Creole interpretation services",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 text-[var(--accent)]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Experience It Yourself
          </p>
          <h2 className="mt-4 font-serif text-3xl">Ready to visit?</h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Schedule a complimentary consultation to tour our facility, meet our team, and discuss
            your treatment goals in a relaxed, pressure-free environment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Request an Appointment
            </Link>
            <Link
              href="/about/office-technology"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Explore Our Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

