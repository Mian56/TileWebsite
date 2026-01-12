type Service = {
  title: string;
  desc: string;
  bullets: string[];
};

const services: Service[] = [
  {
    title: "Bathrooms & Showers",
    desc: "Waterproofing, perfect slopes, niches, clean finishing and long-lasting grout.",
    bullets: ["Waterproofing", "Shower floors + niches", "Tile + grout sealing"],
  },
  {
    title: "Kitchens",
    desc: "Backsplashes and kitchen floors with crisp cuts and modern patterns.",
    bullets: ["Backsplashes", "Outlets + corners", "Clean caulking lines"],
  },
  {
    title: "Floors & Walls",
    desc: "Leveling, layout planning, and durable installs that look sharp.",
    bullets: ["Leveling/Prep", "Large-format tile", "Transitions + edges"],
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="mt-1 text-zinc-600">Tile work that looks great and lasts.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.desc}</p>

              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-zinc-900" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}