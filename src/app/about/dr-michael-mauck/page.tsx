import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "In Memory of Dr. Michael Mauck - Elite Oral Surgery",
  description:
    "Honoring the legacy of Dr. Michael Mauck, beloved founder of our practice, who dedicated more than three decades to surgical excellence and compassionate care in South Florida.",
};

export default function DrMauckPage() {
  return (
    <Container>
      <PageIntro
        eyebrow="In Loving Memory"
        title="Dr. Michael G. Mauck"
        description="1955 – 2025 · Founder, mentor, and beloved oral surgeon who touched countless lives through his dedication to excellence and compassionate care."
      />

      <section className="mt-16 grid gap-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:p-12">
        <div className="relative overflow-hidden rounded-[28px]">
          <Image
            src="/team/michael-mauck.png"
            alt="Dr. Michael Mauck"
            width={640}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            A life dedicated to healing and service
          </h2>
          <p className="text-lg text-[var(--muted)]">
            Dr. Michael Mauck was a highly respected, board-certified oral and maxillofacial surgeon whose career spanned more than three decades of exceptional patient care across South Florida. He earned his Doctor of Dental Surgery (DDS) degree from the Medical College of Virginia School of Dentistry in Richmond in 1986, then completed his residency in oral and maxillofacial surgery at the prestigious Jackson Memorial Hospital in Miami, where he also received an additional year of advanced training in anesthesia.
          </p>
          <p className="text-base text-[var(--muted)]">
            Before his career in oral surgery, Dr. Mauck distinguished himself on the football field as an All-SEC free safety for the University of Tennessee Volunteers—an experience that instilled in him the discipline, resilience, and teamwork that defined his approach to patient care throughout his life. His Volunteer pride lives on in the <Link href="/about/office-tour" className="text-[var(--accent)] hover:text-[var(--accent-dark)] transition">orange-and-white color themes</Link> featured throughout our practice.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
        <h2 className="font-serif text-3xl mb-6">A Legacy Built in Wellington</h2>
        <div className="space-y-4 text-lg text-[var(--muted)]">
          <p>
            Dr. Mauck began his surgical career at Mount Sinai Medical Center in Miami Beach, where he practiced for five years before relocating to Wellington in 1991. There, he took over the Wellington Centre for Oral & Maxillofacial Surgery—originally founded by his colleague and close friend, Dr. Mark Wein—and built it into a state-of-the-art surgical facility serving patients throughout Palm Beach County.
          </p>
          <p>
            Throughout his career, Dr. Mauck performed a wide scope of oral and maxillofacial procedures, including wisdom tooth extractions, dental implant surgery, biopsies, treatment of facial trauma, and corrective procedures for both children and adults. He held a particular passion for reconstructive jaw surgeries, especially cases stemming from trauma and disease, where his surgical skill could truly transform patients' lives. His on-site surgical suite was designed to provide a safe, comfortable environment where the majority of procedures could be performed in-office under anesthesia.
          </p>
          <p>
            Over the years, Dr. Mauck expanded his impact by founding additional practices, including Boca Oral Maxillofacial Surgery Center in Boca Raton and Mauck Oral & Facial Surgery Center in Lake Worth. His unwavering commitment to patient-centered care earned him a reputation as one of South Florida's most trusted and beloved oral surgeons.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Education & Athletics
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">
              From the gridiron to the operating room
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  degree: "All-SEC Free Safety",
                  institution: "University of Tennessee Volunteers",
                },
                {
                  degree: "DDS, Doctor of Dental Surgery",
                  institution: "Medical College of Virginia School of Dentistry, Richmond",
                },
                {
                  degree: "Oral & Maxillofacial Surgery Residency",
                  institution: "Jackson Memorial Hospital, Miami",
                },
                {
                  degree: "Advanced Anesthesia Fellowship",
                  institution: "Jackson Memorial Hospital, Miami",
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
              Areas of Expertise
            </p>
            <h3 className="mt-4 font-serif text-2xl leading-tight">
              Comprehensive oral and maxillofacial care
            </h3>
            <ul className="mt-6 space-y-3 text-base text-[var(--muted)]">
              {[
                "Wisdom tooth extractions",
                "Dental implants",
                "Facial reconstruction",
                "Corrective jaw procedures",
                "Biopsies and pathology treatment",
                "In-office anesthesia and sedation",
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
            Remembering Dr. Mauck
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight">
            A beloved member of the Wellington community
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Beyond his professional accomplishments, Dr. Mauck was a devoted family man and a cherished member of the Wellington community, where he lived and practiced for over 30 years. His competitive spirit never left the field—he remained deeply involved in local youth sports, coaching his sons through Little League, basketball, and football from childhood through high school. When he wasn't coaching or caring for patients, you could often find him on the golf course, a passion he enjoyed throughout his life. Whether on the sidelines, the fairway, or in the operating room, he brought the same passion, dedication, and encouragement to everyone around him.
          </p>
          <p className="mt-4 text-lg text-[var(--muted)]">
            He was known not only for his surgical expertise but for his warmth, humor, and genuine care for every patient who walked through his doors. His legacy lives on through the countless lives he touched, the young athletes he mentored, and the practice he built with love and dedication.
          </p>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] border-2 border-[var(--accent)]/20 p-8 shadow-cta lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          His Legacy Continues
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          Honoring Dr. Mauck's vision
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          Under the leadership of <Link href="/about/dr-michael-london" className="font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition">Dr. Michael London</Link> and Office Director Chris Mauck, Dr. Mauck's son, we remain committed to the same standards of excellence and compassionate care that defined his life's work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about/our-history"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Read Our Story
          </Link>
          <Link
            href="/about/dr-michael-london"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Meet Dr. London
          </Link>
        </div>
      </section>
    </Container>
  );
}
