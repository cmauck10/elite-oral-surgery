import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Our Team - Elite Oral Surgery",
  description:
    "Meet the talented team behind Elite Oral Surgery of Wellington, including our surgeons, surgical nurses, and patient care coordinators.",
};

export default function OurTeamPage() {
  const teamMembers = [
    {
      name: "Dr. Michael Mauck",
      role: "Oral & Maxillofacial Surgeon",
      image: "/michael_mauck.png",
      bio: "Board-certified surgeon with expertise in full-arch implants, bone grafting, and regenerative surgical techniques.",
      link: "/about/dr-michael-mauck",
    },
    {
      name: "Dr. Michael London",
      role: "Oral & Maxillofacial Surgeon",
      image: "/team/michael-london.jpg",
      bio: "Board-certified surgeon with 10+ years experience, specializing in complex full-arch implants, advanced bone grafting, and comprehensive oral surgery.",
      link: "/about/dr-michael-london",
    },
    {
      name: "Chris Mauck",
      role: "Office Director",
      image: "/team/chris-mauck.jpg",
      bio: "Oversees practice operations and ensures every patient receives exceptional concierge-level care.",
    },
    {
      name: "Leslie London",
      role: "Practice Relations",
      image: "/team/leslie-london.jpg",
      bio: "Cultivates relationships with referring dentists and community partners throughout Palm Beach County.",
    },
    {
      name: "Ana Gonzalez",
      role: "Treatment Coordinator",
      image: "/team/ana-gonzalez.jpg",
      bio: "Guides patients through treatment planning, insurance navigation, and financial coordination.",
    },
    {
      name: "Yasmin Rodriguez",
      role: "Treatment Coordinator",
      image: "/team/yasmin-rodriguez.jpg",
      bio: "Your dedicated resource for scheduling, pre-operative preparation, and post-surgical follow-up.",
    },
    {
      name: "Maci Lee",
      role: "Dental Assistant",
      image: "/team/maci-lee.jpg",
      bio: "Provides chairside support and ensures patient comfort throughout surgical procedures.",
    },
    {
      name: "Kerri Coury",
      role: "Dental Assistant",
      image: "/team/kerri-coury.jpg",
      bio: "Skilled in sterilization protocols, digital imaging, and compassionate patient care.",
    },
  ];

  return (
    <Container>
      <PageIntro
        eyebrow="Our Team"
        title="Meet the Elite Oral Surgery Family"
        description="A collective of talented professionals united by a commitment to surgical excellence and compassionate care."
      />

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Experience you can trust
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Behind every successful procedure is a team of dedicated professionals working in
            harmony. From our board-certified surgeons to our experienced surgical nurses and
            patient coordinators, every member of our team plays a vital role in delivering the
            Elite experience.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Our Talented Team</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-[28px] border border-[var(--border)] bg-white/90 overflow-hidden shadow-card transition hover:shadow-card-hover"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover mix-blend-multiply transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{member.role}</p>
                <p className="mt-3 text-sm text-[var(--muted)]">{member.bio}</p>
                {member.link && (
                  <Link
                    href={member.link}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
                  >
                    Learn more
                    <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] text-center">
            Team Values
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-center">
            United by a shared mission
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                value: "Clinical Excellence",
                description: "Continuous training and evidence-based protocols keep our skills sharp.",
              },
              {
                value: "Patient Advocacy",
                description: "We champion your comfort, questions, and peace of mind at every step.",
              },
              {
                value: "Collaboration",
                description: "Seamless communication with your dentist and specialists ensures continuity.",
              },
              {
                value: "Innovation",
                description: "We embrace new technology and techniques that improve patient outcomes.",
              },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-[var(--border)] bg-white/70 p-5"
              >
                <h3 className="font-semibold text-[var(--foreground)]">{item.value}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Join the Elite Family
          </p>
          <h2 className="mt-4 font-serif text-3xl">Experience care from a team that cares</h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            From your first phone call to your final follow-up appointment, you'll feel the
            difference a dedicated, compassionate team makes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Request an Appointment
            </Link>
            <Link
              href="/about/office-tour"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]"
            >
              Tour Our Office
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}

