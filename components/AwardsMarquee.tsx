const accolades = [
  'MICHELIN BIB GOURMAND',
  'NYC WOOD-FIRED PIZZA AWARDS',
  'TOP 50 PIZZERIAS USA',
  'JAMES BEARD SEMIFINALIST',
  'BEST SOMMELIER PROGRAM'
];

export default function AwardsMarquee() {
  return (
    <section aria-label="Awards and Accolades" className="border-y border-white/10 bg-black/30 py-6">
      <div className="marquee text-xs uppercase tracking-[0.4em] text-white/40">
        {[...accolades, ...accolades].map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center justify-center gap-4">
            <span>{item}</span>
            <span className="text-white/20">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
