import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

const forms = [
  {
    name: "Medical History",
    description: "Share your medical background, medications, and allergies to tailor sedation safely.",
    file: "/forms/medical-history.pdf",
  },
  {
    name: "New Patient Intake",
    description: "Complete registration details, contact information, and insurance basics ahead of arrival.",
    file: "/forms/new-patient-intake.pdf",
  },
  {
    name: "HIPAA Authorization",
    description: "Let us coordinate with your referring dentist or physician while protecting your privacy.",
    file: "/forms/hipaa-form.pdf",
  },
];

export default function PatientFormsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Patient Forms"
        title="Save time at check-in"
        description="Download, complete, and email your forms back to us before your visit or bring them to your appointment."
      />

      <div className="mt-12 space-y-6">
        {forms.map((form) => (
          <article
            key={form.name}
            className="flex flex-col gap-4 rounded-[28px] border border-[var(--border)] bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{form.name}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{form.description}</p>
            </div>
            <Link
              href={form.file}
              download
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Download PDF
            </Link>
          </article>
        ))}
      </div>

      <section className="mt-16 rounded-[32px] bg-gradient-to-br from-[#e8e8e8] to-[#ffecd9] p-8 shadow-[0_35px_90px_rgba(75,75,75,0.2)] lg:p-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
          Questions About Your Forms?
        </p>
        <h2 className="text-3xl font-serif text-[var(--foreground)] mb-4">
          We're here to help
        </h2>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
          If you need assistance completing your forms or have questions about your upcoming appointment, our concierge team is happy to guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/appointment"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Schedule Appointment
          </Link>
          <a
            href="mailto:office@eoswellington.com"
            className="rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}

