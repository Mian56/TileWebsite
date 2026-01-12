export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold">Ace Tile Co.</div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#work" className="hover:underline">Work</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#reviews" className="hover:underline">Reviews</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-black px-4 py-2 text-sm text-white"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}