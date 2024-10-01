import Hero from "./components/HeroSection";
import JourneyWithHarmony from "./components/Journey";
import Service from "./components/Service";
import CertifiedConsultant from "./components/CertifiedConsultant";
import Features from "./components/Features";
import AOSWrapper from '../../src/components/AOSWrapper'

export default function Home() {
  return (
    <>
      <main className="w-full px-4 md:px-20">
        <Hero />
        <JourneyWithHarmony />
        <AOSWrapper>
          <Service />
          <CertifiedConsultant />
          <Features />
        </AOSWrapper>
      </main>
    </>
  );
}
