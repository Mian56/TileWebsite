"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send.");

      setStatus("sent");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Get a Free Quote</h2>
        <p className="mt-1 text-zinc-600">We’ll respond quickly.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-3">
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                className="rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <textarea
                className="min-h-[120px] rounded-lg border border-zinc-200 px-3 py-2"
                placeholder="Project details (bathroom, kitchen, floor, timeline)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Request Quote"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-700">
                  ✅ Sent! We’ll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-700">❌ {error}</p>
              )}
            </div>
          </form>

          <div className="rounded-2xl bg-zinc-900 p-6 text-white">
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-white/80">
              <p>
                <span className="text-white/60">Phone:</span> (631) 598-9622
              </p>
              <p>
                <span className="text-white/60">Email:</span> info@acetileco.com
              </p>
              <p>
                <span className="text-white/60">Area:</span> Long Island, New York
              </p>
            </div>

            <a
              href="tel:16315989622"
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