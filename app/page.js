import AboutSection from "./_components/AboutSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import IncludedSection from "./_components/IncludedSection";
import Pricesection from "./_components/Pricesection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <IncludedSection />
      <Pricesection />
      <Footer />
    </main>
  );
}
