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
      name: "Dr. Michael London",
      role: "Oral & Maxillofacial Surgeon",
      image: "/team/michael-london.jpg",
      bio: "Board-certified surgeon over a decade of experience, specializing in the full scope of oral and maxillofacial surgery including complex full-arch implants, advanced bone grafting, and IV sedation.",
      link: "/about/dr-michael-london",
    },
    {
      name: "Chris Mauck",
      role: "Director of Practice Operations",
      image: "/team/chris-mauck.jpg",
      bio: "Leads all business operations, financial strategy, and administrative processes—ensuring the practice runs smoothly while delivering an exceptional patient experience.",
    },
    {
      name: "Ana Gonzalez",
      role: "Treatment Coordinator",
      image: "/team/ana-gonzalez.jpg",
    },
    {
      name: "Yasmin Rodriguez",
      role: "Treatment Coordinator",
      image: "/team/yasmin-rodriguez.jpg",
    },
    {
      name: "Maci Lee",
      role: "Surgical Assistant",
      image: "/team/maci-lee.jpg",
    },
    {
      name: "Kerri Coury",
      role: "Surgical Assistant",
      image: "/team/kerri-coury.jpg",
    },
  ];

  return (
    <Container>
      <PageIntro
        eyebrow="Our Team"
        title="Meet the Elite Oral Surgery Family"
        description="A collective of talented professionals united by a commitment to surgical excellence and compassionate care."
      />

      {/* Team Photo Card */}
      <section className="mt-12 rounded-[32px] border border-[var(--border)] bg-white/80 p-6 shadow-section lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="overflow-hidden rounded-[24px]">
            <Image
              src="/team/team.jpg"
              alt="The Elite Oral Surgery team"
              width={800}
              height={500}
              quality={90}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
              Experience you can trust
            </h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Behind every successful procedure is a team of dedicated professionals working in
              harmony. From our board-certified surgeon to our experienced surgical staff and
              patient coordinators, every member of our team plays a vital role in delivering The
              Elite Difference.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Our Talented Team</h2>
        
        {/* Leadership Row - Dr. London and Chris Mauck */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.slice(0, 2).map((member) => (
            <div
              key={member.name}
              className="group rounded-[28px] border border-[var(--border)] bg-white/90 overflow-hidden shadow-card transition hover:shadow-card-hover"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={800}
                  height={1000}
                  quality={90}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{member.role}</p>
                {member.bio && (
                  <p className="mt-3 text-sm text-[var(--muted)]">{member.bio}</p>
                )}
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

        {/* Staff Row - Ana, Yasmin, Maci, Kerri */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {teamMembers.slice(2).map((member) => (
            <div
              key={member.name}
              className="group rounded-[28px] border border-[var(--border)] bg-white/90 overflow-hidden shadow-card transition hover:shadow-card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={800}
                  height={1000}
                  quality={90}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{member.role}</p>
                {member.bio && (
                  <p className="mt-3 text-sm text-[var(--muted)]">{member.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
        <div className="mx-auto">
          <h2 className="font-serif text-3xl leading-tight text-center">
            Our Core Values
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                value: "Patient-First Philosophy",
                description: "From your first phone call to your final follow-up appointment, you'll feel the difference a dedicated, compassionate team makes. We treat our patients as we would our family.",
              },
              {
                value: "Surgical Excellence",
                description: "Board-certification, modern surgical techniques, rigorous safety standards, and continued education ensure our procedures are precise, safe, and predictable.",
              },
              {
                value: "Outcome-Driven Care",
                description: "We start with the end in mind. In coordination with your dentist, we tailor your treatment for your desired prosthetic result.",
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

