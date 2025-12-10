import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Dr. Michael Mauck - Oral Surgeon",
  description:
    "Meet Dr. Michael Mauck, board-certified oral and maxillofacial surgeon with more than three decades of experience serving South Florida.",
};

export default function DrMauckPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Meet Our Founder"
        title="Dr. Michael Mauck"
        description="Board-certified oral and maxillofacial surgeon with more than 30 years of surgical excellence in South Florida."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
          <Image
            src="/team/michael-mauck.png"
            alt="Dr. Michael Mauck"
            width={640}
            height={800}
            className="h-full w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Three decades of surgical excellence and community dedication
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Dr. Michael Mauck is a highly respected, board-certified oral and maxillofacial surgeon with more than three decades of experience delivering comprehensive surgical care to patients across South Florida. He earned his Doctor of Dental Surgery (DDS) degree from the Medical College of Virginia School of Dentistry in Richmond in 1986, then went on to complete his residency in oral and maxillofacial surgery at the prestigious Jackson Memorial Hospital in Miami, where he also received an additional year of advanced training in anesthesia.
          </p>
          <p className="text-base text-[var(--muted)]">
            Before his career in oral surgery, Dr. Mauck distinguished himself on the football field as an All-SEC free safety for the University of Tennessee Volunteers, an experience that instilled in him the discipline, resilience, and teamwork that continue to shape his approach to patient care. His Volunteer pride even inspires the <Link href="/about/office-tour" className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition">orange-and-white color themes</Link> featured throughout his practice.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
        <h2 className="font-serif text-3xl mb-6">Building a Legacy in Wellington</h2>
        <div className="space-y-4 text-lg text-[var(--muted)]">
          <p>
            Dr. Mauck began his surgical career at Mount Sinai Medical Center in Miami Beach, where he practiced for five years before relocating to Wellington in 1991. There, he took over the Wellington Centre for Oral & Maxillofacial Surgery—originally founded by his colleague and close friend, Dr. Mark Wein—and has since built it into a state-of-the-art surgical facility serving patients throughout Palm Beach County.
          </p>
          <p>
            At his practice, Dr. Mauck performs a wide scope of oral and maxillofacial procedures, including wisdom tooth extractions, dental implant surgery, biopsies, treatment of facial trauma, and corrective procedures for both children and adults. With an on-site surgical suite designed to provide a safe, comfortable environment, the majority of procedures are performed in-office under anesthesia, while more complex trauma cases are managed at Palms West Hospital.
          </p>
          <p>
            Over the years, Dr. Mauck has expanded his impact by founding additional practices, including Boca Oral Maxillofacial Surgery Center in Boca Raton and Mauck Oral & Facial Surgery Center in Lake Worth. His commitment to patient-centered care has earned him a reputation for surgical excellence and compassionate treatment.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Credentials & Certifications</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Diplomate, American Board of Oral & Maxillofacial Surgery",
            "Fellow, American Association of Oral & Maxillofacial Surgeons",
            "Advanced training in anesthesia",
            "Expertise in dental implant surgery",
            "Specialist in wisdom tooth extractions",
            "Facial trauma reconstruction",
            "Corrective jaw procedures",
            "Biopsies and pathology treatment",
          ].map((credential) => (
            <div
              key={credential}
              className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-3 text-sm font-medium shadow-sm"
            >
              {credential}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Education & Training
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">
              Elite training from premier institutions
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  degree: "DDS, Doctor of Dental Surgery",
                  institution: "Medical College of Virginia School of Dentistry, Richmond",
                  year: "1986",
                },
                {
                  degree: "Oral & Maxillofacial Surgery Residency",
                  institution: "Jackson Memorial Hospital, Miami",
                  year: "Post-1986",
                },
                {
                  degree: "Advanced Anesthesia Training",
                  institution: "Jackson Memorial Hospital, Miami",
                  year: "Additional Year",
                },
                {
                  degree: "All-SEC Free Safety",
                  institution: "University of Tennessee Volunteers",
                  year: "Pre-dental school",
                },
              ].map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 p-4"
                >
                  <p className="font-semibold text-[var(--foreground)]">{item.degree}</p>
                  <p className="text-sm text-[var(--muted)] mt-1">{item.institution}</p>
                  {item.year && <p className="text-xs text-[var(--muted)] mt-1">{item.year}</p>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Surgical Expertise
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight">
              Comprehensive oral and maxillofacial care
            </h3>
            <ul className="mt-6 space-y-3 text-base text-[var(--muted)]">
              {[
                "Wisdom tooth extractions",
                "Dental implant surgery",
                "Facial trauma reconstruction",
                "Corrective jaw procedures",
                "Biopsies and pathology treatment",
                "Procedures for children and adults",
                "In-office anesthesia and sedation",
                "Complex trauma cases at Palms West Hospital",
              ].map((specialty) => (
                <li key={specialty} className="flex items-start">
                  <span className="mr-3 text-[var(--accent)]">→</span>
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Community & Family
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight max-w-3xl">
            A lifelong commitment to Wellington
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-3xl">
            Outside of his professional life, Dr. Mauck values time with his family and his longtime ties to the Wellington community, where he has lived and practiced since the early 1990s. His dedication to patient-centered care, combined with his surgical expertise, has established him as one of South Florida's most trusted oral surgeons.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] border-2 border-[var(--accent)]/20 p-8 shadow-cta lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Continue the Legacy
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Be part of three decades of surgical excellence
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          Experience the same dedication to patient care and surgical precision that has defined our practice since 1995. Schedule your consultation today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Schedule Consultation
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

