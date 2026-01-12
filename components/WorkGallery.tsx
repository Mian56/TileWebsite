"use client";

import Image from "next/image";
import { useState } from "react";

type Category = "Floors" | "Kitchens" | "Bathrooms";

const data: Record<Category, { src: string; alt: string }[]> = {
  Floors: [
    { src: "/projects/Room1.png", alt: "Floor tile project 1" },
    { src: "/projects/Room2.png", alt: "Floor tile project 2" },
  ],
  Kitchens: [
    { src: "/projects/k1.png", alt: "Kitchen tile project 1" },
    { src: "/projects/k2.png", alt: "Kitchen tile project 2" },
  ],
  Bathrooms: [
    // add when you have bathroom photos
  ],
};

export default function WorkGallery() {
  const [active, setActive] = useState<Category>("Floors");
  const items = data[active];

  return (
    <section id="work" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Work</h2>
            <p className="mt-1 text-zinc-600">Floors, kitchens, and bathrooms — organized.</p>
          </div>

          <div className="flex gap-2 rounded-xl border border-zinc-200 bg-white p-1">
            {(["Floors", "Kitchens", "Bathrooms"] as Category[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={[
                  "rounded-lg px-3 py-2 text-sm",
                  active === c
                    ? "bg-zinc-900 text-white"
                    : "text-zinc-700 hover:bg-zinc-50",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-white p-6 text-sm text-zinc-600">
            Add {active.toLowerCase()} photos in <span className="font-medium">public/projects</span> to display here.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((img, i) => (
              <div
                key={img.src}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm",
                  "h-60 sm:h-64",
                  i === 0 ? "lg:col-span-2 lg:h-80" : "",
                ].join(" ")}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}