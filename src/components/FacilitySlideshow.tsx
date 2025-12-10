"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface SlideImage {
  src: string;
  title: string;
}

interface FacilitySlideshowProps {
  images: SlideImage[];
  intervalMs?: number;
}

export function FacilitySlideshow({ images, intervalMs = 4000 }: FacilitySlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(goToNext, intervalMs);
    return () => clearInterval(timer);
  }, [isPaused, intervalMs, goToNext]);

  return (
    <div
      className="relative overflow-hidden rounded-[32px] border border-[var(--border)] shadow-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Container */}
      <div className="relative aspect-[16/9] bg-gradient-to-b from-[#d8c4b3] to-[#f7f1ea]">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-cover object-bottom"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Title Overlay - Bottom Left */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70 mb-2">
                {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </p>
              <h3 className="font-serif text-3xl lg:text-4xl text-white transition-all duration-500">
                {images[currentIndex].title}
              </h3>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={goToPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Previous image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Next image"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-4 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
            Paused
          </div>
        )}
      </div>
    </div>
  );
}

