import type { ReactNode } from "react";

export const metadata = {
  title: "About Us | Elite Oral Surgery of Wellington",
  description:
    "Meet our board-certified surgeons, explore our state-of-the-art facility, and discover the Elite Oral Surgery difference in Wellington, Florida.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      {children}
    </div>
  );
}

