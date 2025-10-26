import Link from 'next/link';

const footerLinks = [
  { label: 'Gift Cards', href: '#' },
  { label: 'Press', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Private Dining', href: '#' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12" id="visit">
      <div className="container-constrained flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="space-y-4">
          <p className="badge">Fiamma</p>
          <p className="text-sm text-white/70">
            213 Mulberry Street · New York, NY 10012
            <br />
            (212) 555-1234 · hello@fiamma.nyc
          </p>
          <div className="flex gap-4 text-sm uppercase tracking-[0.3em] text-white/60">
            <a href="https://instagram.com" className="hover:text-white">
              Instagram
            </a>
            <a href="https://tiktok.com" className="hover:text-white">
              TikTok
            </a>
            <a href="https://facebook.com" className="hover:text-white">
              Facebook
            </a>
          </div>
        </div>
        <div className="grid gap-6 text-sm text-white/70 sm:grid-cols-2">
          <div>
            <p className="uppercase tracking-[0.3em] text-white/60">Explore</p>
            <div className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className="block hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-white/60">Newsletter</p>
            <p className="mt-4">Get stories about ingredients, events, and limited releases.</p>
            <form className="mt-4 flex gap-3">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-secondary focus:outline-none"
              />
              <button type="submit" className="primary-button px-5 py-3 text-sm">
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/40">© {new Date().getFullYear()} Fiamma. Crafted with fire.</p>
    </footer>
  );
}
