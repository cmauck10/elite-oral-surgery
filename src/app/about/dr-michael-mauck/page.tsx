import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Dr. Michael Mauck - Oral Surgeon",
  description:
    "Meet Dr. Michael Mauck, board-certified oral and maxillofacial surgeon with expertise in implant dentistry, bone grafting, and sedation.",
};

export default function DrMauckPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <PageIntro
        eyebrow="Meet Our Surgeon"
        title="Dr. Michael Mauck"
        description="Board-certified oral and maxillofacial surgeon committed to advanced techniques and personalized patient care."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
          <Image
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80"
            alt="Dr. Michael Mauck"
            width={640}
            height={800}
            className="h-full w-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Clinical excellence meets genuine patient connection
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Dr. Mauck is a board-certified oral and maxillofacial surgeon with specialized training
            in dental implant surgery, bone reconstruction, and complex extractions. His meticulous
            approach and warm chairside manner have earned him the trust of referring dentists and
            patients throughout Palm Beach County.
          </p>
          <p className="text-base text-[var(--muted)]">
            After completing his surgical residency at Mount Sinai Medical Center, Dr. Mauck pursued
            advanced fellowship training in implant dentistry and regenerative techniques. He is
            passionate about using platelet-rich fibrin therapy, guided bone regeneration, and
            digital surgical planning to achieve optimal, long-lasting results.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Credentials & Expertise</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Diplomate, American Board of Oral & Maxillofacial Surgery",
            "Fellow, American Association of Oral & Maxillofacial Surgeons",
            "Advanced training in full-arch implant reconstruction",
            "Certified provider of IV conscious sedation",
            "Expert in socket preservation and ridge augmentation",
            "Continuing education faculty in PRF and biologics",
            "Member, International Congress of Oral Implantologists",
            "Published author on minimally invasive extraction techniques",
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
              Rigorous training for exceptional results
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  degree: "DMD, Doctor of Dental Medicine",
                  institution: "University of Pennsylvania School of Dental Medicine",
                },
                {
                  degree: "Oral & Maxillofacial Surgery Residency",
                  institution: "Mount Sinai Medical Center",
                },
                {
                  degree: "Implant Surgery Fellowship",
                  institution: "Midwest Implant Institute",
                },
                {
                  degree: "BS, Biology",
                  institution: "University of North Carolina at Chapel Hill",
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
              Focused on implant and reconstructive surgery
            </h3>
            <ul className="mt-6 space-y-3 text-base text-[var(--muted)]">
              {[
                "Complex dental implant placement",
                "Immediate implant placement after extraction",
                "Guided bone regeneration and sinus lifts",
                "Wisdom teeth removal with PRF therapy",
                "Socket preservation for future implants",
                "Full-arch implant rehabilitation",
                "IV sedation and anxiolysis",
                "Pre-prosthetic surgery and ridge modification",
                "Impacted canine exposure for orthodontics",
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
            "Every patient has a unique story. My role is to listen first, then craft a surgical
            plan that honors their goals and timeline."
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)] max-w-3xl">
            Dr. Mauck's approach centers on thorough communication and shared decision-making. He
            uses 3D imaging and digital treatment simulations to help patients visualize outcomes
            before surgery begins. His gentle technique and commitment to pain-free recovery have
            made him a favorite among anxious patients and those seeking second opinions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Schedule with Dr. Mauck
            </Link>
            <Link
              href="/about/dr-michael-london"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Meet Dr. London
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto">
          Outside the practice, Dr. Mauck is an avid golfer, youth sports coach, and volunteer with
          mission trips providing dental care to underserved communities in Central America.
        </p>
      </section>
    </div>
  );
}

