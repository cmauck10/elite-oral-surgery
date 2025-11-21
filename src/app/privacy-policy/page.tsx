import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Elite Oral Surgery of Wellington - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <PageIntro
          eyebrow="Legal"
          title="Privacy Policy"
          description="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information."
        />

        <div className="mt-12 space-y-8 text-base text-[var(--muted)]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-sm text-[var(--muted)] mb-6">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="mb-6">
              Elite Oral Surgery of Wellington ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <Link href="/" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">eliteoralsurgerywellington.com</Link>.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </div>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Submit an appointment request form</li>
              <li>Contact us via email or phone</li>
              <li>Fill out any other forms on our website</li>
            </ul>
            <p className="mb-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Service interests and treatment information</li>
              <li>Any other information you choose to provide in comments or messages</li>
            </ul>

            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Automatic Information</h3>
            <p className="mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Date and time of visit</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and respond to your appointment requests</li>
              <li>Communicate with you about your inquiries and appointments</li>
              <li>Send appointment reminders and follow-up communications</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            
            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party service providers who perform services on our behalf, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Email Services:</strong> Resend (for sending appointment confirmation emails)</li>
              <li><strong>Web Hosting:</strong> Vercel (for website hosting and operation)</li>
              <li><strong>Analytics:</strong> Website analytics providers to understand site usage</li>
            </ul>
            <p className="mb-4">
              These service providers are contractually obligated to protect your information and use it only for the purposes for which it was disclosed.
            </p>

            <h3 className="text-xl font-semibold text-[var(--foreground)] mt-6 mb-3">Legal Requirements</h3>
            <p>
              We may disclose your information if required by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Secure HTTPS encryption for all data transmission</li>
              <li>Secure cloud-based hosting infrastructure</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information by authorized personnel only</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">5. HIPAA Compliance</h2>
            <p className="mb-4">
              Elite Oral Surgery of Wellington is a covered entity under the Health Insurance Portability and Accountability Act (HIPAA). Protected Health Information (PHI) collected in the course of providing healthcare services is governed by our HIPAA Notice of Privacy Practices, which is available at our office and provided to patients.
            </p>
            <p>
              <strong>Important:</strong> This website is not intended for the transmission of PHI. Please do not include sensitive medical information in appointment request forms or emails. For secure communication of medical information, please contact our office directly at{" "}
              <a href="tel:15617900206" className="text-[var(--accent)] hover:text-[var(--accent-dark)]">(561) 790-0206</a>.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Google Maps, Facebook, Instagram, and Yelp). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">8. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of receiving marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately so we can delete the information.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">10. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">11. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page and updating the "Effective Date" at the top.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="rounded-[28px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
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

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

