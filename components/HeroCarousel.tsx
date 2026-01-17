"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = { src: string; alt: string };

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      { src: "/projects/K1.png", alt: "Tile installation project 1" },
      { src: "/projects/B8.png", alt: "Tile installation project 2" },
      { src: "/projects/R6.png", alt: "Tile installation project 3" },
      { src: "/projects/K9.png", alt: "Tile installation project 4" },
      { src: "/projects/B7.png", alt: "Tile installation project 5" },
      { src: "/projects/HeroImage.png", alt: "Tile installation project 6" },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100 shadow-sm">
      {/* Crossfade stack */}
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={[
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle top/bottom gradient for polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5" />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-3 flex gap-2 rounded-full bg-white/70 px-3 py-2 backdrop-blur">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={[
              "h-2 w-2 rounded-full transition",
              i === index ? "bg-zinc-900" : "bg-zinc-400/70 hover:bg-zinc-600",
            ].join(" ")}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}