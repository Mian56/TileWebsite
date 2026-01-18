import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

type Category = {
  id: string;
  title: string;
  description: string;
  items: GalleryItem[];
};

const categories: Category[] = [
  {
    id: "floors",
    title: "Floors",
    description: "Large-format tile, wood-look tile, leveling and clean edges.",
    items: [
      { src: "/projects/R2.png", alt: "Floor tile project 1" },
      { src: "/projects/R3.png", alt: "Floor tile project 3" },
      { src: "/projects/R4.png", alt: "Floor tile project 4" },
      { src: "/projects/R5.png", alt: "Floor tile project 5" },
      { src: "/projects/R6.png", alt: "Floor tile project 6" },
      { src: "/projects/R7.png", alt: "Floor tile project 7" },
      { src: "/projects/R8.png", alt: "Floor tile project 8" },
      { src: "/projects/R9.png", alt: "Floor tile project 9" },
      { src: "/projects/R10.png", alt: "Floor tile project 10" },
      { src: "/projects/R11.png", alt: "Floor tile project 11" },
      { src: "/projects/R12.png", alt: "Floor tile project 12" },
      { src: "/projects/R13.png", alt: "Floor tile project 13" },
      { src: "/projects/R14.png", alt: "Floor tile project 14" },
    ],
  },
  {
    id: "kitchens",
    title: "Kitchens",
    description: "Backsplashes, floors, and crisp cut lines around outlets & cabinets.",
    items: [
      { src: "/projects/k1.png", alt: "Kitchen tile project 1" },
      { src: "/projects/k2.png", alt: "Kitchen tile project 2" },
      { src: "/projects/k3.png", alt: "Kitchen tile project 3" },
      { src: "/projects/k4.png", alt: "Kitchen tile project 4" },
      { src: "/projects/K5.png", alt: "Kitchen tile project 5" },
      { src: "/projects/k6.png", alt: "Kitchen tile project 6" },
      { src: "/projects/K7.png", alt: "Kitchen tile project 7" },
      { src: "/projects/K8.png", alt: "Kitchen tile project 8" },
      { src: "/projects/K9.png", alt: "Kitchen tile project 9" },
      { src: "/projects/K10.png", alt: "Kitchen tile project 10" },
      { src: "/projects/K11.png", alt: "Kitchen tile project 11" },

    ],
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    description: "Showers, waterproofing, niches, and grout that lasts.",
    items: [
      // Add bathroom pics when you get them
      // { src: "/projects/B2.png", alt: "Bathroom tile project 2"},
      { src: "/projects/B3.png", alt: "Bathroom tile project 3"},
      { src: "/projects/B4.png", alt: "Bathroom tile project 4" },
      { src: "/projects/B5.png", alt: "Bathroom tile project 5"},
      { src: "/projects/B6.png", alt: "Bathroom tile project 6"},
      { src: "/projects/B7.png", alt: "Bathroom tile project 7"},
      { src: "/projects/B8.png", alt: "Bathroom tile project 8"},
      { src: "/projects/B9.png", alt: "Bathroom tile project 9"},




      // { src: "/projects/bath2.png", alt: "Bathroom tile project 2" },
    ],
  },
];

function CategoryBlock({ cat }: { cat: Category }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{cat.title}</h3>
        <p className="text-sm text-zinc-600">{cat.description}</p>
      </div>

      {cat.items.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-500">
          Add {cat.title.toLowerCase()} photos to showcase this category.
        </div>
      ) : (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cat.items.map((img, idx) => (
            <div
              key={img.src}
              className={[
                "group relative overflow-hidden rounded-2xl bg-zinc-200",
                "h-56 sm:h-60",
                // Optional: make the first image in each category slightly bigger on desktop
                idx === 0 ? "lg:col-span-2 lg:h-72" : "",
              ].join(" ")}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery() {
  return (
    <section id="work" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Work</h2>
        <p className="mt-1 text-zinc-600">
          Browse projects by category.
        </p>

        <div className="mt-6 grid gap-6">
          {categories.map((cat) => (
            <CategoryBlock key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}