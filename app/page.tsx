import AwardsMarquee from '@/components/AwardsMarquee';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import MenuHighlights from '@/components/MenuHighlights';
import NavBar from '@/components/NavBar';
import ReservationBanner from '@/components/ReservationBanner';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <AwardsMarquee />
      <MenuHighlights />
      <Experience />
      <Testimonials />
      <Gallery />
      <ReservationBanner />
      <Footer />
    </main>
  );
}
