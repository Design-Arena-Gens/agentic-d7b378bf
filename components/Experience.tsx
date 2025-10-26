import { experienceFeatures, events } from '@/lib/content';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-constrained grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <span className="badge">crafted ritual</span>
          <h2 className="section-title">An experience as layered as the dough.</h2>
          <p className="section-subtitle">
            We ferment our dough for 72 hours, stretch it by hand, and finish each pizza in our olive-wood oven.
            The ambient lighting, vinyl playlists, and aperitivo cocktails complete the escape.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {experienceFeatures.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="events" className="glass-card p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Happenings</h3>
            <a
              href="mailto:events@fiamma.nyc?subject=Private%20Event%20Inquiry"
              className="text-xs uppercase tracking-[0.3em] text-secondary"
            >
              host with us →
            </a>
          </div>
          <p className="mt-3 text-sm text-white/70">
            From chef&apos;s tables to vinyl-infused aperitivo hours, discover the soul of Fiamma beyond the plate.
          </p>
          <ul className="mt-8 space-y-6">
            {events.map((event) => (
              <li key={event.title} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{event.title}</p>
                    <p className="mt-2 text-sm text-white/70">{event.detail}</p>
                  </div>
                  <span className="rounded-full border border-secondary/50 bg-secondary/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary">
                    {event.badge}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
