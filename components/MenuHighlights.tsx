import Image from 'next/image';
import { menuHighlights } from '@/lib/content';

export default function MenuHighlights() {
  return (
    <section id="menu" className="section-padding">
      <div className="container-constrained">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="badge">seasonal signatures</span>
            <h2 className="section-title mt-6">The menu writes a love letter to Naples.</h2>
            <p className="section-subtitle">
              Crafted with DOP ingredients, finished with market-fresh produce, and paired with curated wine flights.
            </p>
          </div>
          <a href="#reservation" className="secondary-button self-start">
            Tasting menu
          </a>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {menuHighlights.map((item) => (
            <article key={item.name} className="glass-card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white">
                  {item.badge}
                </span>
              </div>
              <div className="space-y-4 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-white">{item.name}</h3>
                  <span className="text-sm font-semibold text-secondary">{item.price}</span>
                </div>
                <p className="text-sm text-white/70">{item.description}</p>
                <button
                  type="button"
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary transition hover:text-white"
                >
                  Add to experience →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
