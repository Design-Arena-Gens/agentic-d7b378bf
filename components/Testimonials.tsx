import Image from 'next/image';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-constrained">
        <div className="glass-card grid gap-10 p-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="badge">reviews</span>
            <h2 className="section-title mt-6">Acclaimed by critics. Beloved by regulars.</h2>
            <p className="section-subtitle">
              We&apos;ve been featured in Michelin&apos;s Bib Gourmand list for nine consecutive years and remain a
              neighborhood treasure with a three-week waitlist.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-white/70">
              <div>
                <p className="text-3xl font-semibold text-secondary">4.9</p>
                <p className="mt-1 uppercase tracking-[0.25em]">google reviews</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-secondary">Top 5</p>
                <p className="mt-1 uppercase tracking-[0.25em]">nyc pizza guide</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <p className="text-lg text-white/90">“{testimonial.quote}”</p>
                <footer className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
