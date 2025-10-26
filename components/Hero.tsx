import Image from 'next/image';

const heroStats = [
  { label: 'Wood-Fired Pizzas Served', value: '150K+' },
  { label: 'Wine Labels', value: '60' },
  { label: 'Years in Nolita', value: '12' }
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="container-constrained grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="badge">wood-fired artistry</span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Neon nights. Cracking crusts. Napoli soul.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
            Nestled in the heart of Nolita, Fiamma crafts Neapolitan pizza using heritage grains, seasonal
            toppings, and an 800°F wood-fired oven. Join us for an intimate dinner or book the chef&apos;s table.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#reservation" className="primary-button">
              Book a Table
            </a>
            <a href="#menu" className="secondary-button">
              Explore Menu
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 text-sm text-white/70 sm:gap-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:p-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60 sm:text-sm">{stat.label}</dt>
                <dd className="mt-3 font-display text-lg tracking-wide text-white sm:text-xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="glass-card grid-fade relative w-full max-w-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1601925260369-d5971cf9b3f5?auto=format&fit=crop&w=1000&q=80"
              alt="Wood-fired pizza with basil leaves"
              width={600}
              height={720}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-white/20 bg-black/40 px-5 py-3 backdrop-blur">
              <div className="h-12 w-12 rounded-full border border-white/20 bg-white/10" />
              <div>
                <p className="text-sm font-semibold">Chef Lucia Ferraro</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/60">Neapolitan certified</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-12 top-1/2 hidden h-28 w-28 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 md:flex" />
        </div>
      </div>
    </section>
  );
}
