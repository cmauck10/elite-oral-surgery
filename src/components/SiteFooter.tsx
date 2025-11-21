import Image from "next/image";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className="h-5 w-5">
      <path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white/90 py-10 text-sm text-[var(--muted)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
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
          <p>Concierge oral surgery in a safe, comfortable, and efficient environment.</p>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61582791724204"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--accent)]"
              aria-label="Visit our Facebook page"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/eliteoralsurgerywellington/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--accent)]"
              aria-label="Visit our Instagram page"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://maps.app.goo.gl/whBTryReBdbhefcZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--accent)]"
              aria-label="View our Google reviews"
            >
              <GoogleIcon />
            </Link>
            <Link
              href="https://www.yelp.com/biz/elite-oral-surgery-wellington"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-[var(--muted)] transition hover:bg-[var(--background)] hover:text-[var(--accent)]"
              aria-label="View our Yelp page"
            >
              <YelpIcon />
            </Link>
          </div>
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
            {["Home", "About", "Services", "Resources", "Appointment Request"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href={
                      link === "Home"
                        ? "/"
                        : link === "About"
                          ? "/about"
                        : link === "Services"
                          ? "/#services"
                          : link === "Resources"
                              ? "/resources"
                              : "/appointment"
                    }
                    className="text-[var(--foreground)] hover:text-[var(--accent)] transition"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl space-y-4 px-6 text-xs text-[var(--muted)] lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Elite Oral Surgery of Wellington. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">
              Privacy Policy
            </Link>
            <span className="text-[var(--border)]">|</span>
            <Link href="/terms-and-conditions" className="text-[var(--foreground)] hover:text-[var(--accent)] transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4 text-center">
          <p>
            <strong className="text-[var(--foreground)]">Accessibility Notice:</strong> If you have a disability covered by the Americans with Disabilities Act (ADA) or similar legislation and require assistance accessing this website or our services, please contact our office at{" "}
            <a href="tel:15617900206" className="font-semibold text-[var(--accent)] hover:text-[var(--accent-dark)] transition">
              (561) 790-0206
            </a>{" "}
            to discuss reasonable accommodations we can provide.
          </p>
        </div>
      </div>
    </footer>
  );
}

