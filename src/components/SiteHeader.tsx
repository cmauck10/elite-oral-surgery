"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services as serviceDetails } from "@/data/services";

const serviceNavChildren = serviceDetails.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));

const navItems = [
  { label: "Home", href: "/" },
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
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: serviceNavChildren,
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Financing", href: "/resources/financing" },
      { label: "Patient Forms", href: "/resources/patient-forms" },
      { label: "Patient Comforts", href: "/resources/patient-comforts" },
      { label: "FAQ", href: "/resources/faq" },
      { label: "Pre/Post Surgery Tips", href: "/resources/pre-post-surgery-tips" },
    ],
  },
  { label: "Testimonials", href: "/#testimonials" },
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

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
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
                  <button
                    type="button"
                    className={`text-sm font-medium transition ${
                      activeMenu === index ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                    }`}
                    onMouseEnter={() => setActiveMenu(index)}
                    onClick={() => setActiveMenu((prev) => (prev === index ? null : index))}
                  >
                    {item.label}
                  </button>
                  {activeMenu === index && (
                    <div className="absolute left-1/2 top-full z-30 -translate-x-1/2 pt-4">
                      <div className="w-64 rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-2xl transition duration-200">
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="flex items-center justify-between rounded-lg px-3 py-2 transition hover:bg-[var(--background)] hover:text-[var(--foreground)]"
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
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
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
        <div className="border-t border-[var(--border)] bg-white px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-semibold text-[var(--foreground)]"
                >
                  {item.label}
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
          <Link
            href="/appointment"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Appointment Request
          </Link>
        </div>
      )}
    </header>
  );
}

