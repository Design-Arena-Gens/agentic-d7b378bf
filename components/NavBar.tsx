import Link from 'next/link';

const links = [
  { href: '#menu', label: 'Menu' },
  { href: '#experience', label: 'Experience' },
  { href: '#events', label: 'Events' },
  { href: '#visit', label: 'Visit' }
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-dark/70 backdrop-blur">
      <div className="container-constrained flex items-center justify-between py-4">
        <Link href="#" className="flex items-center gap-3 font-display text-2xl font-semibold tracking-wide">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full accent-gradient text-lg text-dark">
            F
          </span>
          Fiamma
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.3em] text-white/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+12125551234" className="secondary-button px-5 py-2 text-sm">
            (212) 555-1234
          </a>
          <a href="#reservation" className="primary-button px-5 py-2 text-sm">
            Reserve
          </a>
        </div>
        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 md:hidden" aria-label="Open navigation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
