import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Participating Insurances",
  description:
    "Elite Oral Surgery of Wellington accepts most major dental insurance plans. Learn about our participating insurances and verification process.",
};

const ppoPlans = [
  "Aetna",
  "Ameritas",
  "Assurant",
  "Blue Cross Blue Shield",
  "Careington",
  "Cigna",
  "Connection Dental",
  "Delta Dental",
  "Dental Health Alliance",
  "DenteMax",
  "Florida Blue",
  "Florida Combined Life",
  "GEHA",
  "Guardian",
  "Humana",
  "Lincoln Financial",
  "MetLife PDP Plus",
  "Mutual of Omaha",
  "Principal",
  "Reliance Standard",
  "Solstice",
  "Sunlife Financial",
  "Teamcare",
  "The Standard",
  "United HealthCare",
  "UMR",
  "United Concordia",
];

const medicarePlans = [
  "Delta Dental Medicare Advantage",
  "Humana Medicare Advantage (DEN plans)",
  "United Healthcare Medicare Advantage",
];

const medicaidPlans = [
  "DentaQuest",
  "Liberty Dental",
];

export default function InsurancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Insurance Information"
        title="Participating Insurances"
        description="We work with most major dental insurance plans to maximize your benefits and minimize out-of-pocket costs."
      />

      <div className="mt-12 space-y-8">
        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            Insurance Acceptance
          </h2>
          <p className="text-lg text-[var(--muted)] mb-6">
            Elite Oral Surgery of Wellington is an in-network or preferred provider with many major insurance carriers. We accept most PPO dental insurance plans and will work with your insurance company to maximize your benefits.
          </p>
          <p className="text-base text-[var(--muted)]">
            Our experienced billing team will verify your insurance coverage before your appointment and provide you with an estimate of your out-of-pocket costs. We handle all insurance claim submissions and follow-ups on your behalf.
          </p>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-8">
            Insurance Plans We Accept
          </h2>
          
          <div className="space-y-8">
            {/* PPO Plans */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
                PPO Plans
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ppoPlans.map((provider) => (
                  <div
                    key={provider}
                    className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-center text-sm font-medium text-[var(--foreground)] shadow-sm"
                  >
                    {provider}
                  </div>
                ))}
              </div>
            </div>

            {/* Medicare Plans */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
                Medicare Plans
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {medicarePlans.map((provider) => (
                  <div
                    key={provider}
                    className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-center text-sm font-medium text-[var(--foreground)] shadow-sm"
                  >
                    {provider}
                  </div>
                ))}
              </div>
            </div>

            {/* Medicaid Plans */}
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
                Medicaid Plans
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {medicaidPlans.map((provider) => (
                  <div
                    key={provider}
                    className="rounded-2xl border border-[var(--border)] bg-white/70 px-4 py-3 text-center text-sm font-medium text-[var(--foreground)] shadow-sm"
                  >
                    {provider}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-[var(--muted)] italic">
            This is not an exhaustive list. Insurance participation is subject to change. If you don't see your insurance provider listed, please contact our office at{" "}
            <a href="tel:15617900206" className="font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)]">
              (561) 790-0206
            </a>{" "}
            to verify coverage.
          </p>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            What if I don't have insurance?
          </h2>
          <p className="text-base text-[var(--muted)]">
            If you don't have insurance, we will work with you to find a financing option that fits your needs.
          </p>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            How Insurance Works for Oral Surgery
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Medical vs. Dental Insurance
              </h3>
              <p className="text-base text-[var(--muted)]">
                Depending on your procedure and medical necessity, your oral surgery may be covered under your medical insurance, dental insurance, or both. Our team will help determine the best way to file your claim to maximize your benefits.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Pre-Authorization
              </h3>
              <p className="text-base text-[var(--muted)]">
                For major procedures like dental implants or bone grafting, our office will submit a pre-authorization request to your insurance company for you. This will indicate how much your insurance company will cover for the procedure.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Out-of-Network Benefits
              </h3>
              <p className="text-base text-[var(--muted)]">
                Even if we're not in-network with your specific plan, most insurance policies still provide out-of-network benefits. Our team will determine your out-of-network benefits and help you maximize your coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-section-md lg:p-12">
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
            Insurance Verification Process
          </h2>
          <ol className="space-y-4">
            {[
              {
                step: "1",
                title: "Contact Our Office",
                description:
                  "Call us at (561) 790-0206 or submit an appointment request with your insurance information.",
              },
              {
                step: "2",
                title: "Verification",
                description:
                  "Our billing team will verify your coverage, benefits, deductibles, and co-insurance percentages.",
              },
              {
                step: "3",
                title: "Estimate Provided",
                description:
                  "Before your appointment, we'll provide a detailed estimate of your expected out-of-pocket costs.",
              },
              {
                step: "4",
                title: "Treatment & Filing",
                description:
                  "After your procedure, we'll file all claims and handle communications with your insurance company.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-lg font-semibold text-white">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-[32px] bg-gradient-to-br from-[#f8f8f8] to-[#fff5eb] p-8 lg:p-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">
            Questions About Your Coverage?
          </p>
          <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">
            We're Here to Help
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
            Navigating insurance can feel overwhelming—but you don’t have to do it alone. Our knowledgeable team specializes in dental insurance and is here to answer your questions, verify your benefits, and guide you through your coverage every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:15617900206"
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
            >
              Call (561) 790-0206
            </a>
            <Link
              href="/resources/financing"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              View Financing Options
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

