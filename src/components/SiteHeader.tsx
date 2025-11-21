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
      { label: "Our History", href: "/about/our-history" },
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
      { label: "Participating Insurances", href: "/resources/insurance" },
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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-2.314-2.091-2.634-2.409l-.043-.043c-.237-.248-.237-.589-.092-.84.186-.32.475-.646 1.039-1.098.563-.451 1.096-.747 1.393-.923.3-.177.632-.3.905-.3.331 0 .602.15.784.421.309.463 2.235 2.825 2.381 2.991.147.164.196.339.146.444zm-2.126-6.815c.034.07.052.154.052.243 0 .221-.111.464-.317.639-.266.226-.64.367-1.024.367-.296 0-.524-.075-.64-.154-.076-.051-3.066-1.461-3.184-1.528-.218-.123-.326-.313-.326-.535 0-.192.083-.377.278-.517.195-.141.521-.27.851-.3.598-.057 1.931-.114 2.406-.114.324 0 .634.049.854.129.221.08.369.196.416.301.096.215.471 1.237.634 1.469zM11.898 7.45c-.022.107-.114.217-.276.308-.166.093-.362.125-.517.086-.155-.039-.281-.138-.358-.277-.056-.099-1.382-3.162-1.427-3.268-.046-.106-.022-.197.045-.277.154-.177.483-.414.849-.586.366-.172.724-.247.979-.247.104 0 .184.014.237.043.086.048.138.124.155.226.036.214.225 1.921.376 3.026.091.668.121 1.196.121 1.487 0 .166-.073.339-.184.479zM8.183 20.538c-.304.164-2.79.584-3.831.584-.223 0-.401-.05-.529-.153-.144-.116-.229-.288-.253-.502-.022-.194.015-.401.101-.589.067-.146 1.311-2.661 1.42-2.858.082-.148.229-.25.391-.27.162-.021.346.028.508.139.284.197 2.177 1.602 2.654 1.97.478.368.614.761.539.914zm1.742-7.989c0 .274-.055.523-.146.735-.092.213-.225.385-.375.482-.15.097-.334.146-.525.146-.406 0-.825-.213-1.159-.506-.334-.293-.568-.671-.649-1.055-.081-.384-.018-.772.175-1.086.193-.314.506-.545.87-.643.364-.098.746-.067 1.061.088.315.154.545.405.634.7.089.295.114.639.114.944z" />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
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
                    className={`flex items-center gap-1 text-sm font-medium transition ${
                      activeMenu === index ? "text-[var(--accent)]" : "text-[var(--foreground)]"
                    }`}
                    onMouseEnter={() => setActiveMenu(index)}
                    onClick={() => setActiveMenu((prev) => (prev === index ? null : index))}
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
                  </button>
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
        <div className="border-t border-[var(--border)] bg-white px-6 py-6 lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
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

