import Header from "./components/Header";
import Hero from "./components/HeroSection";
import JourneyWithHarmony from "./components/Journey";
import Service from "./components/Service";
import CertifiedConsultant from "./components/CertifiedConsultant";

export default function Home() {
  return (
    <>
      <main className="w-full px-4 md:px-20">
        <Header />
        <Hero />
        <JourneyWithHarmony />
        <Service />
        <CertifiedConsultant />
      </main>
    </>
  );
}
