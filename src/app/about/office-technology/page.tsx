import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Office Technology - Elite Oral Surgery",
  description:
    "Discover the advanced technology that powers Elite Oral Surgery, from CBCT 3D imaging to digital surgical planning and PRF therapy.",
};

export default function OfficeTechnologyPage() {
  const technologies = [
    {
      title: "Comprehensive Software Suite",
      description:
        "Our integrated technology stack powers every aspect of patient care—from scheduling and imaging to prescriptions and AI-assisted documentation.",
      image: "/tech-logos.jpg",
      benefitsLabel: "Our Tech Stack",
      benefits: [
        "CareStack: All-in-one Electronic Health Record (EHR) and Patient Management System (PMS)",
        "DEXIS: Advanced digital imaging and CBCT integration",
        "XChart: Specialized sedation monitoring and documentation",
        "DoseSpot: Secure electronic prescribing with real-time drug interaction alerts",
        "Heidi AI: AI-powered clinical documentation and note generation",
      ],
    },
    {
      title: "CBCT 3D Imaging",
      description:
        "Cone Beam Computed Tomography provides precise 3D visualization of bone structure, nerve pathways, and anatomical landmarks for surgical planning.",
      image: "/office/cbct.jpg",
      benefitsLabel: "Imaging Advantages",
      benefits: [
        "Same-day diagnosis and treatment planning",
        "Sub-millimeter accuracy for implant placement",
        "Reduced radiation compared to traditional CT",
        "Virtual surgical rehearsal before your procedure",
      ],
    },
    {
      title: "Platelet-Rich Fibrin (PRF)",
      description:
        "We centrifuge a small sample of your own blood to concentrate healing growth factors, then apply the PRF membrane to surgical sites.",
      image: "/office/centrifuge.jpg",
      benefitsLabel: "Healing Benefits",
      benefits: [
        "Accelerated bone and soft tissue healing",
        "Reduced post-operative pain and swelling",
        "Natural, autologous—no synthetic materials",
        "Enhanced success rates for grafts and implants",
      ],
    },
    {
      title: "IV Sedation & Monitoring",
      description:
        "Board-certified anesthesia protocols with real-time vital sign monitoring ensure safe, comfortable sedation tailored to your needs.",
      image: "/office/operating-room.jpg",
      benefitsLabel: "Safety Features",
      benefits: [
        "Twilight sedation with minimal memory of procedure",
        "Continuous pulse oximetry, EKG, and capnography",
        "Certified ACLS-trained surgical team",
        "Private recovery suites for post-sedation care",
      ],
    },
  ];

  return (
    <Container>
      <PageIntro
        eyebrow="Office Technology"
        title="Innovation Meets Precision"
        description="Discover the advanced technology that makes Elite Oral Surgery a leader in digital workflows, regenerative medicine, and patient safety."
      />

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/80 p-8 shadow-section lg:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)]">
            Technology that transforms outcomes
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            At Elite Oral Surgery, we invest in cutting-edge technology not for its own sake, but
            because it measurably improves accuracy, reduces recovery time, and elevates patient
            comfort. Every tool in our arsenal has been chosen for its ability to deliver safer,
            faster, and more predictable results.
          </p>
        </div>
      </section>

      <section className="mt-16 space-y-16">
        {technologies.map((tech, index) => (
          <div
            key={tech.title}
            className={`grid gap-8 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-card lg:grid-cols-2 lg:p-10 ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}
          >
            <div className={`relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#f5f5f5] ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
              <Image
                src={tech.image}
                alt={tech.title}
                fill
                className="object-cover"
              />
            </div>
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">{tech.title}</h3>
              <p className="mt-4 text-base text-[var(--muted)]">{tech.description}</p>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                  {tech.benefitsLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {tech.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start text-sm text-[var(--muted)]">
                      <span className="mr-3 text-[var(--accent)]">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Commitment to Excellence
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight">
            Continuous investment in your care
          </h2>
          <p className="mt-6 text-lg text-[var(--muted)]">
            Technology evolves rapidly, and so do we. Our surgeons attend international conferences,
            participate in clinical research, and maintain relationships with leading technology
            manufacturers to ensure you always benefit from the latest advances in oral surgery.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-3xl text-center mb-10">Additional Technology Highlights</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Hospital-grade sterilization and infection control",
            "Digital radiography with 90% less radiation",
            "EXPAREL long-acting local anesthesia",
            "Electronic medical records and secure patient portal",
            "Regenerative biologics and tissue banking",
          ].map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-[var(--border)] bg-white/90 px-4 py-4 text-sm font-medium shadow-sm text-center"
            >
              {feature}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 text-center">
        <div className="rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-cta lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            See the Difference
          </p>
          <h2 className="mt-4 font-serif text-3xl">Experience technology-driven care</h2>
          <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Schedule a consultation to see our technology in action and learn how digital planning
            and regenerative therapies can elevate your surgical outcome.
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

