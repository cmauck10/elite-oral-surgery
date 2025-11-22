import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for Elite Oral Surgery of Wellington - Review the terms governing your use of our website and services.",
};

export default function TermsAndConditionsPage() {
  return (
      <Container size="sm" className="space-y-8 bg-[var(--background)] text-[var(--foreground)]">
        <PageIntro
          eyebrow="Legal"
          title="Terms and Conditions"
          description="Please read these terms and conditions carefully before using our website or services."
        />

        <div className="mt-12 space-y-8 text-base text-[var(--muted)]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <p className="text-sm text-[var(--muted)] mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="mb-6">
              Welcome to Elite Oral Surgery of Wellington. These Terms and Conditions ("Terms") govern your use of our website located at <Link href="/" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">eliteoralsurgerywellington.com</Link> (the "Site") and the services provided by Elite Oral Surgery of Wellington ("we," "us," or "our").
            </p>
            <p className="text-sm text-[var(--muted)]">
              By accessing or using our Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access the Site or use our services.
            </p>
          </div>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this Site, you accept and agree to be bound by these Terms and our Privacy Policy. These Terms apply to all visitors, users, and others who access or use the Site.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">2. Medical Disclaimer</h2>
            <p className="mb-4">
              <strong>Important:</strong> The information provided on this Site is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>This Site does not replace the need for a professional consultation with a qualified oral surgeon</li>
              <li>Always seek the advice of your physician or other qualified healthcare provider with any questions about a medical condition</li>
              <li>Never disregard professional medical advice or delay seeking it because of something you have read on this Site</li>
              <li>If you think you may have a medical emergency, call your doctor or 911 immediately</li>
            </ul>
            <p>
              The content on this Site, including text, graphics, images, and information, is provided "as is" without any warranties, express or implied.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">3. No Doctor-Patient Relationship</h2>
            <p className="mb-4">
              Use of this Site and communication with Elite Oral Surgery of Wellington through this Site does not establish a doctor-patient relationship. A formal doctor-patient relationship is only established when:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You have an in-person consultation at our office</li>
              <li>You complete all necessary medical history and consent forms</li>
              <li>A treatment plan is discussed and agreed upon</li>
              <li>You officially become a patient of our practice</li>
            </ul>
            <p>
              Information submitted through the appointment request form or email is for scheduling purposes only and should not include sensitive Protected Health Information (PHI).
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">4. Appointment Requests</h2>
            <p className="mb-4">
              When you submit an appointment request through our Site:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your request is not a confirmed appointment until you receive confirmation from our office</li>
              <li>We will contact you within one business day to schedule your appointment</li>
              <li>You may be required to complete additional forms before your appointment</li>
              <li>Appointments are subject to availability and confirmation</li>
              <li>You agree to arrive on time and provide 24 hours notice for cancellations or rescheduling</li>
            </ul>
            <p className="mb-4">
              <strong>Cancellation Policy:</strong> We require at least 24 hours notice for appointment cancellations or changes. Late cancellations or no-shows may be subject to a fee.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">5. Use of the Site</h2>
            
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Permitted Use</h3>
            <p className="mb-4">
              You may use this Site for lawful purposes only, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Learning about our services and practice</li>
              <li>Requesting appointments</li>
              <li>Accessing patient resources and forms</li>
              <li>Contacting our office</li>
            </ul>

            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Prohibited Use</h3>
            <p className="mb-4">
              You agree NOT to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Site for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to the Site or related systems</li>
              <li>Interfere with or disrupt the Site or servers</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Collect or harvest information about other users</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Reproduce, modify, or distribute Site content without authorization</li>
              <li>Impersonate any person or entity</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Elite Oral Surgery of Wellington or its content suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="mb-4">
              The compilation of all content on this Site is the exclusive property of Elite Oral Surgery of Wellington and is protected by U.S. and international copyright laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any of the material on our Site without prior written consent.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">7. Third-Party Links</h2>
            <p className="mb-4">
              This Site may contain links to third-party websites or services, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Social media platforms (Facebook, Instagram)</li>
              <li>Review sites (Google, Yelp)</li>
              <li>Payment processors</li>
              <li>Other healthcare or informational resources</li>
            </ul>
            <p>
              We do not control and are not responsible for the content, privacy policies, or practices of any third-party sites. We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">8. Disclaimer of Warranties</h2>
            <p className="mb-4">
              THIS SITE AND ALL CONTENT, SERVICES, AND PRODUCTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Site will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from the use of the Site will be accurate or reliable</li>
              <li>The quality of any products, services, or information obtained through the Site will meet your expectations</li>
              <li>Any errors in the Site will be corrected</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">9. Limitation of Liability</h2>
            <p className="mb-4">
              TO THE FULLEST EXTENT PERMITTED BY LAW, ELITE ORAL SURGERY OF WELLINGTON, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Loss of profits, revenue, or data</li>
              <li>Loss of use or business interruption</li>
              <li>Personal injury or property damage</li>
              <li>Any damages arising from your use or inability to use the Site</li>
            </ul>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitations may not apply to you.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Elite Oral Surgery of Wellington, its affiliates, officers, directors, employees, agents, and third-party service providers from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Your use of and access to the Site</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property rights</li>
              <li>Any harm caused to any third party through your use of the Site</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">11. HIPAA and Privacy</h2>
            <p className="mb-4">
              Elite Oral Surgery of Wellington is committed to protecting your privacy and complying with the Health Insurance Portability and Accountability Act (HIPAA).
            </p>
            <p className="mb-4">
              Please review our <Link href="/privacy-policy" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">Privacy Policy</Link> for detailed information about how we collect, use, and protect your personal information.
            </p>
            <p>
              For information about how we protect your medical information, please review our HIPAA Notice of Privacy Practices, available at our office.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
            <p>
              Any legal action or proceeding arising out of or related to these Terms or the Site shall be instituted exclusively in the state or federal courts located in Palm Beach County, Florida. You consent to the personal jurisdiction of such courts and waive any objection to venue in such courts.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">13. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be deemed modified to the extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Elite Oral Surgery of Wellington regarding your use of the Site and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">15. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new Terms.
            </p>
            <p>
              We encourage you to review these Terms periodically to stay informed about any updates.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">16. Contact Information</h2>
            <p className="mb-4">
              If you have questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6">
              <p className="font-semibold text-[var(--foreground)]">Elite Oral Surgery of Wellington</p>
              <p>1051 S State Road 7, Suite 1</p>
              <p>Wellington, FL 33414</p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:15617900206" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">
                  (561) 790-0206
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:office@eoswellington.com" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">
                  office@eoswellington.com
                </a>
              </p>
            </div>
          </section>

          <div className="mt-12 rounded-[28px] border-2 border-[var(--accent)] bg-white/90 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-base font-semibold text-[var(--foreground)] mb-4">
              By using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link
                href="/"
                className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
              >
                Return to Home
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
  );
}


