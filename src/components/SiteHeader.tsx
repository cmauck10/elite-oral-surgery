"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { services as serviceDetails } from "@/data/services";

const serviceNavChildren = serviceDetails.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));

const navItems = [
  { label: "Home", href: "/", scrollTop: true },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Elite Oral Surgery of Wellington", href: "/about" },
      { label: "Dr Michael Mauck", href: "/about/dr-michael-mauck" },
      { label: "Dr Michael London", href: "/about/dr-michael-london" },
      { label: "Our Team", href: "/about/our-team" },
      { label: "Office Tour", href: "/about/office-tour" },
      { label: "Office Technology", href: "/about/office-technology" },
      { label: "Our History", href: "/about/our-history" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: serviceNavChildren,
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Financing", href: "/resources/financing" },
      { label: "Participating Insurances", href: "/resources/insurance" },
      { label: "Patient Forms", href: "/resources/patient-forms" },
      { label: "Patient Comforts", href: "/resources/patient-comforts" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Pre/Post Surgery Tips", href: "/resources/pre-post-surgery-tips" },
    ],
  },
  { label: "Testimonials", href: "/testimonials" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M4 7h16M4 12h16M4 17h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M6 6l12 12M18 6l-12 12"
      />
    </svg>
  );
}

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

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--border)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center" 
          onClick={(e) => {
            setMobileOpen(false);
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <Image
            src="/logo.png"
            alt="Elite Oral Surgery of Wellington logo"
            width={210}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <div onMouseLeave={() => setActiveMenu(null)}>
              <Link
                href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition ${
                  activeMenu === index ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                }`}
                onMouseEnter={() => setActiveMenu(index)}
                onClick={() => setActiveMenu(null)}
              >
                {item.label}
                    <svg 
                      className={`h-4 w-4 transition-transform duration-200 ${activeMenu === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
              </Link>
                  {activeMenu === index && (
                    <div className="absolute left-1/2 top-full z-30 -translate-x-1/2 pt-4">
                      <div className="w-64 rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-2xl transition duration-200">
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                                onClick={() => setActiveMenu(null)}
                                className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[var(--accent)]/10 hover:text-[var(--foreground)]"
                          >
                            <span>{child.label}</span>
                            <span aria-hidden="true">↗</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  onClick={(e) => {
                    if (item.label === "Home" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 lg:flex">
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
          <Link
            href="/appointment"
            className="hidden rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-dark)] lg:inline-flex"
          >
            Appointment Request
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-[var(--border)] p-2 text-[var(--foreground)] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-73px)] border-t border-[var(--border)] bg-white lg:hidden">
          {/* Fixed Appointment Button at Top */}
          <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b border-[var(--border)]">
            <Link
              href="/appointment"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Appointment Request
            </Link>
          </div>
          
          {/* Scrollable Menu Items */}
          <div className="overflow-y-auto px-6 py-4 pb-8" style={{ maxHeight: 'calc(100vh - 73px - 64px)' }}>
            <ul className="space-y-4">
              {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    setMobileOpen(false);
                    if (item.label === "Home" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center justify-between text-base font-semibold text-[var(--foreground)]"
                >
                    {item.label}
                    {item.children && (
                      <svg 
                        className="h-4 w-4 text-[var(--muted)]"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.children && (
                    <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg bg-[var(--background)] px-3 py-1.5"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

