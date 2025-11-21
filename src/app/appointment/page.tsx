import { AppointmentForm } from "@/components/AppointmentForm";
import { Container } from "@/components/ui";

export const metadata = {
  title: "Request an Appointment",
  description:
    "Request a concierge consultation with Elite Oral Surgery of Wellington for implants, wisdom teeth, All-on-X, and more.",
};

export default function AppointmentPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <Container size="sm">
        <div className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Concierge Scheduling
          </p>
          <h1 className="font-serif text-4xl">Appointment Request</h1>
          <p className="text-lg text-[var(--muted)]">
            Tell us a little about yourself and which service you're interested in. Our patient concierge will reach out within one business day with next steps.
          </p>
        </div>

        <AppointmentForm />
      </Container>
    </div>
  );
}

