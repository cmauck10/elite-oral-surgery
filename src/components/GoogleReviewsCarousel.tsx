"use client";

import { useState, useRef, useEffect } from "react";
import { googleReviews } from "@/data/googleReviews";

const TRUNCATE_LENGTH = 200;

export function GoogleReviewsCarousel() {
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);
  const [translateX, setTranslateX] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 for left (default), 1 for right
  const [isDragging, setIsDragging] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const initialTranslateX = useRef(0);
  const lastTouchX = useRef(0);
  const lastTouchTime = useRef(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    lastTouchX.current = e.touches[0].clientX;
    lastTouchTime.current = Date.now();
    initialTranslateX.current = translateX;
    setIsPaused(true);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;
    const newTranslateX = initialTranslateX.current + deltaX;
    
    setTranslateX(newTranslateX);
    lastTouchX.current = currentX;
    lastTouchTime.current = Date.now();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    // Calculate velocity based on last movement
    const currentTime = Date.now();
    const timeDelta = currentTime - lastTouchTime.current;
    const distanceDelta = lastTouchX.current - touchStartX.current;
    
    // If there was significant movement, determine direction
    if (Math.abs(distanceDelta) > 10) {
      if (distanceDelta > 0) {
        // Swiped right, continue moving right
        setDirection(1);
      } else {
        // Swiped left, continue moving left
        setDirection(-1);
      }
    }

    setIsPaused(false);
    setExpandedReviews(new Set());
  };

  useEffect(() => {
    let lastTimestamp = 0;
    const speed = 30; // pixels per second

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;

      if (!isPaused && !isDragging && containerRef.current) {
        setTranslateX((prev) => {
          const movement = (speed * delta) / 1000;
          // direction -1 (left): prev - movement (more negative)
          // direction 1 (right): prev + movement (less negative)
          const newPosition = prev + (movement * direction);
          
          const halfWidth = containerRef.current!.scrollWidth / 2;
          
          if (direction === -1) {
            // Scrolling left (negative direction)
            // Reset to 0 when we reach the halfway point
            if (newPosition <= -halfWidth) {
              return 0;
            }
            return newPosition;
          } else {
            // Scrolling right (positive direction)
            // Reset to -halfWidth when we reach 0
            if (newPosition >= 0) {
              return -halfWidth + (newPosition % halfWidth);
            }
            return newPosition;
          }
        });
      }

      lastTimestamp = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, direction, isDragging]);

  // Duplicate reviews for seamless loop
  const allReviews = [...googleReviews, ...googleReviews];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex gap-4"
        style={{
          transform: `translate3d(${translateX}px, 0, 0)`,
          willChange: isPaused || isDragging ? "transform" : "auto",
          transition: isDragging ? "none" : undefined,
        }}
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
              className="flex w-[350px] flex-shrink-0 flex-col gap-3 rounded-2xl border border-[var(--border)] bg-white/90 p-4 shadow-sm-card transition-all duration-300 contain-layout"
              style={{ height: isExpanded ? 'auto' : 'auto' }}
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

              {/* Review Text - Full on mobile, truncated on desktop */}
              <p className="text-sm leading-relaxed text-[var(--foreground)] flex-1 overflow-hidden">
                <span className="lg:hidden">{review.text}</span>
                <span className="hidden lg:inline">{displayText}</span>
              </p>

              {/* Expand/Collapse Button - Desktop only */}
              {isLong && (
                <button
                  onClick={() => toggleReview(index)}
                  className="hidden lg:flex items-center gap-1 text-xs font-semibold text-[var(--accent)] transition hover:text-[var(--accent-dark)]"
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
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[var(--background)] to-transparent" />
    </div>
  );
}

