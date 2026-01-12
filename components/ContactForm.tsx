export default function ContactForm() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Get a Free Quote</h2>
        <p className="mt-1 text-zinc-600">We’ll respond quickly.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="grid gap-3">
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Name"
              />
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Phone"
              />
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Email"
              />
              <textarea
                className="min-h-[120px] rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Project details (bathroom, kitchen, floor, timeline)"
              />
              <button
                type="button"
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Request Quote
              </button>
            </div>
          </form>

          <div className="rounded-2xl bg-zinc-900 p-6 text-white">
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <span className="text-white/60">Phone:</span> (555) 123-4567
              </p>
              <p>
                <span className="text-white/60">Email:</span> info@acetileco.com
              </p>
              <p>
                <span className="text-white/60">Area:</span> Your city + nearby
              </p>
            </div>

            <a
              href="tel:15551234567"
              className="mt-6 inline-block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}