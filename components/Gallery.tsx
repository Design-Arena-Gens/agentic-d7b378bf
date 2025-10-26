import Image from 'next/image';
import { galleryImages } from '@/lib/content';

export default function Gallery() {
  return (
    <section className="section-padding">
      <div className="container-constrained">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="badge">inside fiamma</span>
            <h2 className="section-title mt-6">Step into our glow.</h2>
            <p className="section-subtitle">
              From the crackle of the oven to the intimate lounge, every corner of Fiamma is designed for
              lingering moments and shared bites.
            </p>
          </div>
          <a href="https://goo.gl/maps" className="secondary-button">
            Virtual tour
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryImages.map((image) => (
            <div key={image.src} className="relative h-72 overflow-hidden rounded-3xl border border-white/10">
              <Image src={image.src} alt={image.alt} fill className="object-cover transition duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
