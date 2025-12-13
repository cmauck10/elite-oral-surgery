"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const lastPathname = useRef(pathname);

  useLayoutEffect(() => {
    // Skip first render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Check if this is a back/forward navigation by seeing if we have a stored scroll position
    const scrollKey = `scroll-${pathname}`;
    const savedPosition = sessionStorage.getItem(scrollKey);

    if (savedPosition) {
      // This is likely a back navigation - restore position
      const position = JSON.parse(savedPosition);
      window.scrollTo({ top: position.y, left: position.x, behavior: "instant" });
      sessionStorage.removeItem(scrollKey);
    } else {
      // This is a forward navigation - scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    lastPathname.current = pathname;
  }, [pathname]);

  // Save scroll position before navigating away
  useLayoutEffect(() => {
    const handleBeforeUnload = () => {
      const scrollKey = `scroll-${pathname}`;
      sessionStorage.setItem(scrollKey, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
    };

    // Save position when clicking links (before navigation)
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.href && link.href.startsWith(window.location.origin)) {
        const scrollKey = `scroll-${pathname}`;
        sessionStorage.setItem(scrollKey, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}
