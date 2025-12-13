"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  src: string;
  poster: string;
  title?: string;
};

export function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative rounded-[24px] overflow-hidden bg-black aspect-video">
      {isPlaying ? (
        <video
          className="w-full h-full"
          controls
          autoPlay
          playsInline
          src={src}
        >
          Your browser does not support the video tag.
        </video>
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
          aria-label={title ? `Play ${title}` : "Play video"}
        >
          {/* Blurred background image */}
          <div className="absolute inset-0">
            <Image
              src={poster}
              alt=""
              fill
              className="object-cover blur-md scale-110"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* YouTube-style play button */}
          <div className="relative z-20 flex items-center justify-center w-20 h-14 bg-red-600 rounded-xl transition-transform group-hover:scale-110 group-hover:bg-red-500">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
