import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { formSections } from "@/data/forms";

export default function PatientFormsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Patient Forms"
        title="Paperwork made simple"
      />

      <div className="mt-12 space-y-12">
        {formSections.map((section) => (
          <div key={section.category}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{section.category}</h2>
              {section.zipFile && (
                <Link
                  href={section.zipFile}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download All
                </Link>
              )}
            </div>
            {section.category === "New Patient Forms" && (
              <p className="text-sm text-[var(--muted)] mb-6">
                Download, complete, and email your forms back to us before your visit or bring them to your appointment.
              </p>
            )}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {section.forms.map((form) => (
                <div
                  key={form.name}
                  className="flex flex-col items-center justify-between gap-4 rounded-[24px] border border-[var(--border)] bg-white/95 p-6 text-center shadow-[0_15px_40px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-full bg-[var(--accent)]/10 p-4">
                      <svg
                        className="h-8 w-8 text-[var(--accent)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--foreground)]">{form.name}</h3>
                      <p className="mt-1 text-xs text-[var(--muted)]">{form.description}</p>
                    </div>
                  </div>
                  <div className="flex w-full gap-2">
            <Link
              href={form.file}
              download
                      className="flex-1 rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[var(--accent-dark)]"
                    >
                      Download
                    </Link>
                    <Link
                      href={form.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
                      View
            </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

