export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full">
      <div className="container mx-auto max-w-2xl px-2 py-2">
        <div className="flex h-12 items-center justify-center overflow-hidden rounded-full border border-neutral-700 bg-neutral-950/50 backdrop-blur">
          <a
            href="#home"
            className="flex h-full flex-1 items-center justify-center px-4 text-sm text-white hover:bg-chetwode-800/10 md:text-base"
          >
            Inicio
          </a>
          <a
            href="#about"
            className="flex h-full flex-1 items-center justify-center px-4 text-sm text-white hover:bg-chetwode-800/10 md:text-base"
          >
            Nosotros
          </a>
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center px-4 text-sm text-white hover:bg-chetwode-800/10 md:text-base"
          >
            Contact
          </a>
          <a
            href="#"
            className="flex h-full flex-1 items-center justify-center px-4 text-sm text-white hover:bg-chetwode-800/10 md:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
