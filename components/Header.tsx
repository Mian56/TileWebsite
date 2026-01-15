export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold">Ace Tile Co.</div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a className="text-zinc-700 hover:text-zinc-900" href="#work">Work</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#services">Services</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#reviews">Reviews</a>
          <a className="text-zinc-700 hover:text-zinc-900" href="#contact">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Get a Quote
        </a>
      </div>

      <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 pb-3 md:hidden">
        {["Work", "Services", "Reviews", "Contact"].map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="whitespace-nowrap rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}