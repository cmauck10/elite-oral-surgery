import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Dr. Michael London - Oral Surgeon",
  description:
    "Meet Dr. Michael London, board-certified oral and maxillofacial surgeon specializing in dental implants, reconstruction, and advanced surgical procedures.",
};

export default function DrLondonPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="Meet Our Surgeon"
        title="Dr. Michael London"
        description="Board-certified oral and maxillofacial surgeon dedicated to surgical excellence and compassionate care."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
          <Image
            src="/team/michael-london.jpg"
            alt="Dr. Michael London"
            width={1200}
            height={1500}
            quality={90}
            className="h-full w-full object-cover brightness-[1.15]"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Precision, expertise, and a patient-first philosophy
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Dr. Michael London is a highly skilled, board-certified oral and maxillofacial surgeon with over 10 years of experience delivering exceptional care in dentistry and oral surgery. A graduate of McGill University in Montreal, Canada, where he earned his Doctor of Dental Medicine (DMD) degree, Dr. London furthered his training with a General Practice Residency at the University of British Columbia.
          </p>
          <p className="text-base text-[var(--muted)]">
            After practicing as a general dentist, he pursued advanced specialization in oral and maxillofacial surgery at the renowned Emory University School of Medicine in Atlanta, Georgia, where he honed his expertise in anesthesia, dentoalveolar surgery, dental implant surgery, bone grafting, facial trauma reconstruction, orthognathic surgery, maxillofacial pathology, and temporomandibular disorders.
          </p>
          <p className="text-base text-[var(--muted)]">
            Dr. London is particularly distinguished in implant dentistry and bone grafting, specializing in complex full-mouth rehabilitation using All-on-4 and All-on-6 implant-supported reconstructions, even for patients with significant bone loss requiring advanced techniques like zygomatic and pterygoid implants.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Credentials & Expertise</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Diplomate, American Board of Oral & Maxillofacial Surgery",
            "Fellow, American Association of Oral & Maxillofacial Surgeons",
            "All-on-X Full-Arch implant pioneer",
            "Certified in IV conscious sedation",
            "Advanced training in bone grafting and sinus augmentation",
            "Faculty lecturer on digital surgical workflows",
            "Member, American Dental Association",
            "Active participant in implant research and clinical trials",
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

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Education & Training
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">
              World-class training, local care
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  degree: "DMD, Doctor of Dental Medicine",
                  institution: "McGill University, Montreal, Canada",
                },
                {
                  degree: "General Practice Residency",
                  institution: "University of British Columbia",
                },
                {
                  degree: "Oral & Maxillofacial Surgery Residency",
                  institution: "Emory University School of Medicine, Atlanta, GA",
                },
              ].map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-[var(--border)] bg-white/70 p-4"
                >
                  <p className="font-semibold text-[var(--foreground)]">{item.degree}</p>
                  <p className="text-sm text-[var(--muted)] mt-1">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Areas of Specialization
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight">
              Comprehensive surgical expertise
            </h3>
            <ul className="mt-6 space-y-3 text-base text-[var(--muted)]">
              {[
                "All-on-4 and All-on-6 full-arch implant reconstructions",
                "Zygomatic and pterygoid implants for severe bone loss",
                "Complex dental implant surgery and bone grafting",
                "Wisdom teeth and dentoalveolar surgery",
                "Impacted tooth exposures and extractions",
                "Facial trauma reconstruction",
                "Orthognathic (corrective jaw) surgery",
                "TMJ disorders and facial pain management",
                "Maxillofacial pathology",
                "IV sedation and anesthesia",
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
        <div className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
            Professional Memberships
          </p>
          <ul className="space-y-3 text-base text-[var(--muted)]">
            {[
              "Diplomate, American Board of Oral and Maxillofacial Surgery",
              "Fellow, American Association of Oral and Maxillofacial Surgeons",
              "Member, Florida Society of Oral & Maxillofacial Surgery",
              "Member, Florida Dental Association (FDA)",
              "Delegate, Atlantic Coast District Dental Association to the FDA",
              "Delegate, FDA to the American Dental Association (ADA)",
            ].map((membership) => (
              <li key={membership} className="flex items-start">
                <span className="mr-3 text-[var(--accent)]">→</span>
                <span>{membership}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Philosophy
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight max-w-3xl">
            "My goal is to create a comfortable and stress-free surgical experience while empowering patients through education."
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-3xl">
            Dr. London is dedicated to creating a comfortable and stress-free surgical experience, prioritizing patient education to empower informed decision-making. His commitment to excellence extends to ongoing professional development through continuing education courses, ensuring he remains at the forefront of oral surgery advancements.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Schedule with Dr. London
            </Link>
            <Link
              href="/about/our-team"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto">
          Outside the office, Dr. London cherishes time with his family and enjoys staying active through ice hockey, golf, and cycling.
        </p>
      </section>
    </Container>
  );
}

