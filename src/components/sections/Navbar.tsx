export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 flex w-full">
      <div className="container mx-auto max-w-2xl px-4 py-4">
        <div className="flex h-12 items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-900">
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center bg-zinc-900 px-4 text-white hover:bg-zinc-800"
          >
            Home
          </a>
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center bg-zinc-900 px-4 text-white hover:bg-zinc-800"
          >
            About
          </a>
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center bg-zinc-900 px-4 text-white hover:bg-zinc-800"
          >
            Contact
          </a>
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center bg-zinc-900 px-4 text-white hover:bg-zinc-800"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
