export default function ReservationBanner() {
  return (
    <section id="reservation" className="pb-20">
      <div className="container-constrained">
        <div className="glass-card relative overflow-hidden px-8 py-12 sm:px-12 sm:py-14">
          <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="badge">book your seat</span>
              <h2 className="section-title mt-6">Reserve for the chef’s table or dining room.</h2>
              <p className="section-subtitle">
                Limited walk-ins nightly. Reserve 48 hours ahead for our chef&apos;s table tasting. We welcome
                celebrations, intimate gatherings, and private events.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="https://resy.com" className="primary-button">
                  Reserve on Resy
                </a>
                <a href="mailto:hello@fiamma.nyc?subject=Reservation%20Inquiry" className="secondary-button">
                  Email concierge
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">hours</p>
                <p className="mt-3">Mon-Thu 5-11 PM</p>
                <p>Fri-Sat 4-12 AM</p>
                <p>Sun 4-10 PM</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">location</p>
                <p className="mt-3">213 Mulberry Street</p>
                <p>New York, NY 10012</p>
                <a
                  href="https://maps.google.com/?q=213+Mulberry+Street+New+York"
                  className="mt-4 inline-flex items-center text-xs uppercase tracking-[0.3em] text-secondary"
                >
                  directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
