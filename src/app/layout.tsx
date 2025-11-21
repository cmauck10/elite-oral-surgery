import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eliteoralsurgery.com"),
  title: {
    default: "Elite Oral Surgery of Wellington | Oral Surgeons",
    template: "%s | Elite Oral Surgery of Wellington",
  },
  description:
    "Elite Oral Surgery of Wellington delivers elevated implant, wisdom tooth, and reconstructive oral surgery with concierge-level comfort for Palm Beach County.",
  keywords: [
    "oral surgery wellington",
    "oral surgeon wellington fl",
    "dental implants wellington",
    "wisdom teeth removal wellington",
    "IV sedation dentistry",
    "oral surgeon near me",
    "all on x implants",
    "bone grafting wellington",
    "Dr Michael Mauck",
    "Dr Michael London",
    "Elite Oral Surgery of Wellington",
    "palm beach county oral surgeon",
  ],
  openGraph: {
    title: "Elite Oral Surgery of Wellington | Oral Surgeons",
    description:
      "Concierge-level oral surgery, dental implants, and facial reconstruction with Dr. Michael London and Dr. Michael Mauck in Wellington, Florida.",
    url: "https://eliteoralsurgery.com",
    siteName: "Elite Oral Surgery of Wellington",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Oral Surgery of Wellington | Oral Surgeons",
    description:
      "Premium oral surgery care, advanced technology, and elevated comfort in Wellington, FL.",
  },
  alternates: {
    canonical: "https://eliteoralsurgery.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
