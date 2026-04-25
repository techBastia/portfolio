export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-purple-200/50 bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col">
          <a
            href="#"
            className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-pink-500"
          >
            TechBastia
          </a>
          <span className="text-[10px] sm:text-xs text-purple-600">Full Stack Developer</span>
        </div>

        <div className="hidden sm:flex items-center gap-4 md:gap-6 text-xs sm:text-sm text-purple-700">
          <a
            href="#projects"
            className="rounded-md px-2 py-1 transition hover:bg-purple-100 hover:text-purple-900"
          >
            Projects
          </a>
          <a
            href="#services"
            className="rounded-md px-2 py-1 transition hover:bg-pink-100 hover:text-pink-900"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="rounded-md px-2 py-1 transition hover:bg-orange-100 hover:text-orange-900"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="rounded-md px-2 py-1 transition hover:bg-orange-100 hover:text-orange-900"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="sm:hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1.5 text-xs font-semibold text-white"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}