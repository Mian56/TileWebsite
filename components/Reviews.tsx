const reviews = [
  {
    stars: "★★★★★",
    quote: "Fast, clean, and the shower came out perfect.",
    name: "Sarah — Queens",
  },
  {
    stars: "★★★★★",
    quote: "Great communication and flawless backsplash work.",
    name: "Mike — Brooklyn",
  },
  {
    stars: "★★★★★",
    quote: "On time, professional, and the floor looks amazing.",
    name: "Amina — NJ",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <p className="mt-1 text-zinc-600">What customers say.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm">{r.stars}</div>
              <p className="mt-3 text-zinc-700">“{r.quote}”</p>
              <p className="mt-4 text-sm text-zinc-500">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}