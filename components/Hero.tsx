export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Premium Tile Installation Done Right.
          </h1>

          <p className="mt-4 text-zinc-600">
            Bathrooms • Kitchens • Floors • Backsplashes • Waterproofing
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Get a Free Estimate
            </a>

            <a
              href="#work"
              className="rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["4.9★", "Avg Rating"],
              ["100+", "Projects"],
              ["Clean", "Worksite"],
              ["Fast", "Response"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-xl border border-zinc-200 p-3">
                <div className="font-semibold">{big}</div>
                <div className="text-sm text-zinc-600">{small}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100">
          <div className="h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200" />
        </div>
      </div>
    </section>
  );
}