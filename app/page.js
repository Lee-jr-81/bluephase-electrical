import AboutSection from "./_components/AboutSection";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import IncludedSection from "./_components/IncludedSection";
import Pricesection from "./_components/Pricesection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <IncludedSection />
      <Pricesection />
      <Footer />
    </main>
  );
}
