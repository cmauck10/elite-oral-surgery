import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Dr. Michael London - Oral Surgeon",
  description:
    "Meet Dr. Michael London, board-certified oral and maxillofacial surgeon specializing in dental implants, reconstruction, and advanced surgical procedures.",
};

export default function DrLondonPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <PageIntro
        eyebrow="Meet Our Surgeon"
        title="Dr. Michael London"
        description="Board-certified oral and maxillofacial surgeon dedicated to surgical excellence and compassionate care."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
          <Image
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80"
            alt="Dr. Michael London"
            width={640}
            height={800}
            className="h-full w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Precision, artistry, and a patient-first philosophy
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Dr. London is a board-certified oral and maxillofacial surgeon specializing in dental
            implants, complex reconstruction, facial trauma, and orthognathic surgery. His training
            at Johns Hopkins and University of Florida laid the foundation for a practice where
            innovation and empathy are inseparable.
          </p>
          <p className="text-base text-[var(--muted)]">
            With over a decade of surgical experience, Dr. London has pioneered minimally invasive
            techniques and digital workflows that reduce recovery time and improve outcomes. His
            dedication to continuing education keeps him at the forefront of implant dentistry,
            regenerative medicine, and sedation protocols.
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
            "Certified in IV sedation & general anesthesia",
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

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12">
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
                  degree: "DDS, Doctor of Dental Surgery",
                  institution: "University of Florida College of Dentistry",
                },
                {
                  degree: "Oral & Maxillofacial Surgery Residency",
                  institution: "Johns Hopkins Hospital",
                },
                {
                  degree: "Advanced Implant Fellowship",
                  institution: "Branemark Osseointegration Center",
                },
                {
                  degree: "BS, Biomedical Engineering",
                  institution: "Georgia Institute of Technology",
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
                "Single and full-arch dental implants",
                "All-on-4 and All-on-X immediate load protocols",
                "Bone grafting and sinus lift procedures",
                "Wisdom teeth extraction (simple and complex)",
                "Facial trauma reconstruction",
                "Orthognathic (jaw) surgery",
                "TMJ disorder treatment",
                "Pathology and oral cancer screening",
                "IV sedation and general anesthesia",
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
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Philosophy
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight max-w-3xl">
            "Surgery is both science and art. My goal is to deliver predictable outcomes with
            genuine compassion."
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-3xl">
            Dr. London believes that every patient deserves to understand their treatment plan,
            feel confident in their surgeon, and experience minimal discomfort throughout their
            journey. He spends extra time in consultation to answer questions, review digital
            simulations, and co-create treatment goals that align with each patient's unique needs
            and lifestyle.
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
          When Dr. London isn't in the operating room, he enjoys sailing the South Florida coast,
          volunteering at free dental clinics, and mentoring dental students pursuing surgical
          careers.
        </p>
      </section>
    </div>
  );
}

