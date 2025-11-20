import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/90 py-10 text-sm text-[var(--muted)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div className="space-y-3">
          <Image
            src="/logo.png"
            alt="Elite Oral Surgery of Wellington logo"
            width={210}
            height={60}
          />
          <p className="text-base font-semibold text-[var(--foreground)]">
            Elite Oral Surgery of Wellington
          </p>
          <p>Concierge oral surgery, full-arch implants, and regenerative healing.</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Visit
          </p>
          <p className="mt-3 font-semibold text-[var(--foreground)]">
            1051 S State Road 7 Suite 1
            <br />
            Wellington, FL 33414
          </p>
          <a href="tel:15617900206" className="mt-3 block font-semibold text-[var(--foreground)]">
            P: (561) 790-0206
          </a>
          <p className="font-semibold text-[var(--foreground)]">F: (561) 795-5445</p>
          <p className="mt-2">Mon–Thu · 8:00a – 5:00p</p>
          <p>Fri · 7:30a – 1:30p</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2">
            {["Home", "Services", "Resources", "Testimonials", "Appointment Request"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href={
                      link === "Home"
                        ? "/#home"
                        : link === "Services"
                          ? "/#services"
                          : link === "Resources"
                            ? "/#resources"
                            : link === "Testimonials"
                              ? "/#testimonials"
                              : "/#appointment"
                    }
                    className="text-[var(--foreground)] hover:text-[var(--accent)]"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 text-xs text-[var(--muted)] lg:px-8">
        © {new Date().getFullYear()} Elite Oral Surgery of Wellington. All rights reserved.
      </div>
    </footer>
  );
}

