"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { googleReviews } from "@/data/googleReviews";

const TRUNCATE_LENGTH = 200;

export function GoogleReviewsCarousel() {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const scrollPositionRef = useRef(0);

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    // Collapse all reviews when mouse leaves
    setExpandedReviews(new Set());
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPositionRef.current += 0.5;
        
        // Reset scroll when we've gone through all content
        const maxScroll = scrollContainer.scrollWidth / 2;
        if (scrollPositionRef.current >= maxScroll) {
          scrollPositionRef.current = 0;
        }
        
        scrollContainer.scrollLeft = scrollPositionRef.current;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Duplicate reviews for seamless loop
  const allReviews = [...googleReviews, ...googleReviews];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-4 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {allReviews.map((review, index) => {
          const isLong = review.text.length > TRUNCATE_LENGTH;
          const isExpanded = expandedReviews.has(index);
          const displayText = isLong && !isExpanded 
            ? `${review.text.substring(0, TRUNCATE_LENGTH)}...` 
            : review.text;

          return (
            <article
              key={`${review.name}-${index}`}
              className="flex w-[350px] flex-shrink-0 flex-col gap-3 rounded-2xl border border-[var(--border)] bg-white/90 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.05)] transition-all duration-300"
              style={{ height: isExpanded ? 'auto' : '240px' }}
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-[#fbbc04]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm leading-relaxed text-[var(--foreground)] flex-1 overflow-hidden">
                {displayText}
              </p>

              {/* Expand/Collapse Button */}
              {isLong && (
                <button
                  onClick={() => toggleReview(index)}
                  className="flex items-center gap-1 text-xs font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
                >
                  {isExpanded ? "Show less" : "Read more"}
                  <svg
                    className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}

              {/* Reviewer Name */}
              <div className="border-t border-[var(--border)] pt-3">
                <p className="text-sm font-semibold text-[var(--foreground)]">{review.name}</p>
              </div>
            </article>
          );
        })}
      </div>
      
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />
    </div>
  );
}

