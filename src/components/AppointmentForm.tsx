"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "Dental Implants", value: "implants" },
  { label: "All-on-X Full Arch", value: "all-on-x" },
  { label: "Wisdom Teeth Removal", value: "wisdom-teeth" },
  { label: "Tooth Extractions", value: "tooth-extractions" },
  { label: "Bone Grafting", value: "bone-graft" },
  { label: "Other / Not Sure Yet", value: "other" },
];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative mt-12 rounded-[32px] border border-[var(--border)] bg-white/90 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]"
      >
        <div className={`space-y-6 ${submitted ? "pointer-events-none blur-sm opacity-40" : ""}`}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--foreground)]">
              First Name
              <input
                type="text"
                name="first-name"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="First name"
                required
              />
            </label>
            <label className="text-sm font-semibold text-[var(--foreground)]">
              Last Name
              <input
                type="text"
                name="last-name"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="Last name"
                required
              />
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--foreground)]">
              Email
              <input
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="you@email.com"
                required
              />
            </label>
            <label className="text-sm font-semibold text-[var(--foreground)]">
              Phone
              <input
                type="tel"
                name="phone"
                className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
                placeholder="(561) 123-4567"
                required
              />
            </label>
          </div>

          <label className="text-sm font-semibold text-[var(--foreground)]">
            Service of Interest
            <div className="relative mt-2">
              <select
                name="service"
                defaultValue=""
                className="w-full appearance-none rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
                required
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]">
                ▾
              </span>
            </div>
          </label>

          <label className="text-sm font-semibold text-[var(--foreground)]">
            Comments / Questions
            <textarea
              name="comments"
              rows={5}
              className="mt-2 w-full rounded-2xl border border-[var(--border)] bg-transparent px-4 py-3 outline-none focus:border-[var(--accent)]"
              placeholder="Let us know how we can support you..."
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)]"
          >
            Submit Request
          </button>
        </div>

        <div
          className={`pointer-events-none absolute inset-0 flex items-center justify-center px-8 text-center transition duration-300 ${
            submitted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full rounded-[24px] border border-[var(--border)] bg-white/95 p-8 text-base font-semibold text-[var(--foreground)] shadow-2xl">
            Thank you for your interest. A member of our team will contact you shortly.
          </div>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--muted)]">
        Prefer to speak with someone? Call{" "}
        <Link href="tel:15617900206" className="font-semibold text-[var(--foreground)]">
          (561) 790-0206
        </Link>{" "}
        or email{" "}
        <Link href="mailto:office@eoswellington.com" className="font-semibold text-[var(--foreground)]">
          office@eoswellington.com
        </Link>
        .
      </p>
    </>
  );
}

